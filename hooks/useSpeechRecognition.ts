import {useEffect, useRef, useState} from "react";


export function useSpeechRecognition(){


    const speechRecognitionRef = useRef(null);
    const [results, setResults] = useState<string[]>([]);

    useEffect(() => {

        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

        const recognizer = new SpeechRecognition()
        speechRecognitionRef.current = recognizer
        console.log("recognizer",recognizer)
        speechRecognitionRef.current.lang = "en-US"
        speechRecognitionRef.current.continuous = true
        speechRecognitionRef.current.addEventListener("result", (e) => {
            console.log("result", e)
            setResults((prev) => [...prev, e.results[0][0].transcript])
        })

        speechRecognitionRef.current.addEventListener("audiostart", (e) => {
            console.log("audiostart", e)
        })

        speechRecognitionRef.current.addEventListener("soundstart", (e) => {
            console.log("soundstart", e)
        })

        speechRecognitionRef.current.addEventListener("speechstart", (e) => {
            console.log("speechstart", e)
        })

    }, [])

    const startListening = () => {
        if (!speechRecognitionRef.current) return;
        speechRecognitionRef.current.start();
    }

    const stopListening = () => {
        if (!speechRecognitionRef.current) return;
        speechRecognitionRef.current.stop();
    }

    return {
        startListening,
        stopListening,
        results
    }
}
