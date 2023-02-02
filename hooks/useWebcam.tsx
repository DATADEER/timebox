import {useEffect, useState} from "react";

export function useWebcam(selector: string = 'video'): MediaStream | undefined{

    const [mediaStream, setMediaStream] = useState<MediaStream>();

    useEffect(() => {
        (async () => {
            const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: true})
            setMediaStream(stream)

            const video = document.querySelector(selector) as HTMLVideoElement
            if (!video) return console.log('no video element found');
            const videoAlreadyHasStream = !!video.srcObject
            if (videoAlreadyHasStream) return

            video.srcObject = stream
            video.onloadedmetadata = function (e) {
                video.play();
            }
        })()

    })

    return mediaStream
}
