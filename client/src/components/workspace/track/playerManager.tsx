import * as Tone from 'tone';
import { useEffect } from "react";

import { eventManager } from '../../ui/instruments/piano/sequencer/eventManager'

let init = false;

export function PlayerManager()
{

    let toggle = false;

    const handleActions = (e: any) =>  e.preventDefault(),

    update = (action: string) => {

        switch(action)
        {
            case 'start': 

                Tone.Transport.start();
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

            break;
            case 'record': 

                eventManager.sequenceArray.start(0);

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
    useEffect(()=>{

        if (init)
            return;

        init = true;

        const startSeq = document.getElementById('start-seq');
        startSeq?.addEventListener('click', () => update('start'));
    
        const stopSeq = document.getElementById('stop-seq');
        stopSeq?.addEventListener('click', () => update('stop'));

        const recordSeq = document.getElementById('record-seq');
        recordSeq?.addEventListener('click', () => update('record'));

        const pauseSeq = document.getElementById('pause-seq');
        pauseSeq?.addEventListener('click', () => update('pause'));
    });


    return (

        <form action="" onSubmit={handleActions}>
            <input className="form-input" id="record-seq" type="submit" value="record" name="recordButton"/>
            <input className="form-input" id="start-seq" type="submit" value="play" name="playButton"/>
            <input className="form-input" id="pause-seq" type="submit" value="pause" name="pauseButton"/>
            <input className="form-input" id="stop-seq" type="submit" value="stop" name="stopButton"/>
        </form>
    );
}