import { OptionsManager } from './optionsManager';
import { SoundManager } from './soundManager';
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
            <SoundManager />     
            <ModuleRack /> 
            <KEYBOARD />
        </div>
    );
}   