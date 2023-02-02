import {useCallback, useEffect, useState} from "react";

export function useMediaRecorder(mediaStream: MediaStream | undefined){
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
    const [savedRecordingUrl, setSavedRecordingUrl] = useState<string | null>(null);
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        if (!mediaStream) return;
        if (mediaRecorder) console.log("mediaRecorder",mediaRecorder)
        if (mediaRecorder) return;

        const recorder = new MediaRecorder(mediaStream);

        setMediaRecorder(recorder);
        recorder.ondataavailable = (e) => {
        setRecordedChunks((prev) => [...prev, e.data]);
        };
        return recorder.removeEventListener("dataavailable", () => {})
    }, [mediaStream]);



    const startRecording = useCallback(() => {
        // resetRecording();
        console.log("start recording on recorder",mediaRecorder)
        if (!mediaRecorder) return;
        mediaRecorder.start();
        setIsRecording(true);
    }, [mediaRecorder]);

    const stopRecording = useCallback(() => {
        console.log("stop recording on recorder",mediaRecorder)
        if (!mediaRecorder) return;
        mediaRecorder.stop();
        setIsRecording(false);
        saveRecording()
    }, [mediaRecorder]);

    const resetRecording = useCallback(() => {
        setRecordedChunks([]);
        setSavedRecordingUrl(null);
    }, []);

    const saveRecording = () => {
        const blob = new Blob(recordedChunks, {
        type: "video/mp4",
        })
        setSavedRecordingUrl(URL.createObjectURL(blob))
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
