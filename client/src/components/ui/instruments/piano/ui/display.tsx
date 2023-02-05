import { useEffect } from 'react';
import { Sequencer } from './sequencer/sequencer';
import { Staff } from './display/staff';
import { PianoUIDisplay, Screen } from './display/screen';

const VISUALIZATION = { init: false};

let initialized = false;

//----------------------------- display ui


export function Display()
{


   useEffect(() => {

        if (initialized)
            return;

        initialized = true;

        PianoUIDisplay.createWindow();
        
    });

    return (

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ width: '50%' }}>
                <Staff />
                <Sequencer />
            </div>
            <Screen />
        </div>
    );

 
}


export default VISUALIZATION;