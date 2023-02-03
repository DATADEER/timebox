import {useCallback, useEffect, useRef, useState} from "react";

export function useMediaRecorder(mediaStream: MediaStream | undefined){
    const mediaRecorderRef = useRef<MediaRecorder>(null);
    const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
    const [savedRecordingUrl, setSavedRecordingUrl] = useState<string | null>(null);
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {

        if (!mediaStream) return;
        if (mediaRecorderRef.current) return;

        // @ts-ignore
        mediaRecorderRef.current = new MediaRecorder(mediaStream);
        mediaRecorderRef.current.addEventListener("dataavailable",(e) => {
            console.log("data available", e.data)
        setRecordedChunks((prev) => [...prev, e.data]);
        });

    }, [mediaStream]);



    const startRecording = () => {
        resetRecording();
        console.log("start recording on recorder",mediaRecorderRef.current)
        if (!mediaRecorderRef.current) return;
        mediaRecorderRef.current.start(1000);
        setIsRecording(true);
    }

    const stopRecording = () => {
        console.log("stop recording on recorder",mediaRecorderRef.current)
        if (!mediaRecorderRef.current) return;
        mediaRecorderRef.current.stop();
        mediaRecorderRef.current.addEventListener("stop", () => {
            console.log("stopped recording event fired")
            setIsRecording(false);
            saveRecording()
        },{once: true})
    }

    const resetRecording = useCallback(() => {
        setRecordedChunks([]);
        setSavedRecordingUrl(null);
    }, []);

    const saveRecording = () => {
        const blob = new Blob(recordedChunks, {
        type: "video/mp4",
        })
        const url = URL.createObjectURL(blob)
        setSavedRecordingUrl(url)
        console.log("saved recording url", url)
    }

    return {
        startRecording,
        stopRecording,
        resetRecording,
        isRecording,
        recordedChunks,
        savedRecordingUrl
    };
}
