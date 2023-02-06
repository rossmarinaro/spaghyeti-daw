
import { SoundbankUI } from './ui/soundBank';
import { SynthbankUI } from './ui/synthBank';
import { KEYBOARD } from './ui/keyboard';
import { Display } from './ui/display';
import { ModuleRack } from '../modules/rack';



export function PIANO()
{
    return (

        <div id="piano-component" className='bordered' >
    
            <Display />
            <ModuleRack />
            <br></br>
            <br></br>
            <SoundbankUI />     
            <SynthbankUI />  
            <br></br>
            <br></br>
            <KEYBOARD />
        </div>
    );
}   