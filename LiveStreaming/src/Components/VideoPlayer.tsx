import FlvJs from "flv.js";
import { useEffect, useRef } from "react"
import VideoPlayerProps from "../Types/VideoPlayerProps"

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        let flvPlayer: FlvJs.Player;

        if (FlvJs.isSupported()) {
            flvPlayer = FlvJs.createPlayer({
                type: 'flv',
                url: src
            });
            flvPlayer.attachMediaElement(videoRef.current!);
            flvPlayer.load();
            flvPlayer.play();
        }

    }, [src])

    return (
        <>
            <video autoPlay ref={videoRef} controls style={{ width: '600px', height: '600px' }} />
        </>
    )


}

export default VideoPlayer;