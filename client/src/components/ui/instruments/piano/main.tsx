import { OptionsManager } from './ui/modSliders';
import { SoundbankUI } from './ui/soundBank';
import { SynthbankUI } from './ui/synthBank';
import { KEYBOARD } from './ui/Keyboard';
import { Display } from './ui/display';
import { ModuleRack } from './ui/modules/rack';
import { Midi } from './ui/midi';


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