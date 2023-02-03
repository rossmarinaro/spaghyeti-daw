import { OptionsManager } from './optionsManager';
import { SoundbankUI } from './soundManager';
import { SynthbankUI } from './synthManager';
import { KEYBOARD } from './Keyboard';
import { Display } from './display';
import { ModuleRack } from './modules/rack';
import { Midi } from './midi';


export function PIANO()
{
    return (
        <div id="piano-component" className='bordered' >
            <Midi />
            <Display />
            <OptionsManager />
            <SoundbankUI />     
            <SynthbankUI />  
            <ModuleRack /> 
            <KEYBOARD />
        </div>
    );
}   