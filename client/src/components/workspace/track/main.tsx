import { useEffect, useRef, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { PlayerRack } from './playerManager';


const saveFile = (file: any) => {
    
    const blob = new Blob([file], {type: 'audio/wav; codecs=opus' }),
          blobUrl = URL.createObjectURL(blob),
          el = document.createElement('a');
    
    el.href = blobUrl;
    el.download = blobUrl;
    document.body.appendChild(el);

} 

export function TRACK()
{
    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true }),
            audioRef = useRef<HTMLAudioElement>(null);

    const [ stream, setStream ] = useState();

    useEffect(() => {

        if (audioRef.current && stream)
            audioRef.current.srcObject = stream;

    }, [stream]);


    return (
        <div className='bordered' >
            <p onClick={() => saveFile(mediaBlobUrl)}>Save File</p>
            <p> Recording: { status } </p>
            <audio src={ mediaBlobUrl } autoPlay controls/>
            <PlayerRack start={startRecording} stop={stopRecording}/>
        </div>
    );
}