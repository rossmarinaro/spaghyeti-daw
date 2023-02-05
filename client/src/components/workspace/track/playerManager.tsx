import * as Tone from 'tone';
import { useEffect } from "react";

import { eventManager } from '../../ui/instruments/piano/ui/sequencer/eventManager'

let init = false;

export const playerManager = {
    recording: false
}

export function PlayerRack()
{

    let toggle = false;

    const handleActions = (e: any) => e.preventDefault(),

    update = (action: string) => {

        switch(action)
        {
            case 'record': 
            
                playerManager.recording = true; 
                
            break; 

            case 'start': 

                Tone.Transport.start(0);
                eventManager.sequenceArray.start(0);
                eventManager.mainLoop.start(0);
                eventManager.subLoop16th.start(0);
                eventManager.subLoop8th.start(0);

            break;

            case 'stop': 

                Tone.Transport.stop(0);
                eventManager.sequenceArray.stop(0);
                eventManager.mainLoop.stop(0);
                eventManager.subLoop16th.stop(0);
                eventManager.subLoop8th.stop(0);
                eventManager.clearTrackHighlight();
                eventManager.counter = 0;
                playerManager.recording = false;

            break;

            case 'pause': 

                if (toggle === false)
                {
                    toggle = true;
                    Tone.Transport.pause(0);
                    eventManager.sequenceArray.stop(0);
                    eventManager.mainLoop.stop(0);
                    eventManager.subLoop16th.stop(0);
                    eventManager.subLoop8th.stop(0);
                }
                else
                {
                    toggle = false;
                    Tone.Transport.start();
                    eventManager.sequenceArray.start(0);
                    eventManager.mainLoop.start(0);
                    eventManager.subLoop16th.start(0);
                    eventManager.subLoop8th.start(0);
                }

            break;
        }
   
    }   
    useEffect(()=> {

        if (init)
            return;

        init = true;

        const startSeq = document.getElementById('start-seq'),
              stopSeq = document.getElementById('stop-seq'),
              recordSeq = document.getElementById('record-seq'),
              pauseSeq = document.getElementById('pause-seq');

        startSeq?.addEventListener('click', () => update('start'));
        stopSeq?.addEventListener('click', () => update('stop'));
        recordSeq?.addEventListener('click', () => update('record'));
        pauseSeq?.addEventListener('click', () => update('pause'));

    });


    return (

        <form action="" onSubmit={ handleActions }>
            <input className="form-input" id="record-seq" type="submit" value="record" name="recordButton"/>
            <input className="form-input" id="start-seq" type="submit" value="play" name="playButton"/>
            <input className="form-input" id="pause-seq" type="submit" value="pause" name="pauseButton"/>
            <input className="form-input" id="stop-seq" type="submit" value="stop" name="stopButton"/>
        </form>
    );
}