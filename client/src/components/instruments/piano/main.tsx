import * as Tone from 'tone';
import { SynthManager } from './ui/synthBank';
import { SoundbankUI } from './ui/soundBank';
import { SynthbankUI } from './ui/synthBank';
import { KEYBOARD } from './ui/keyboard';
import { ModuleRack } from '../modules/rack';
import { eventManager } from './ui/sequencer/eventManager';
import { playerManager } from '../../workspace/track/playerManager';
import VISUALIZATION, { Display } from './ui/display';


const midiToNote = require('midi-note');



export class PianoManager {

	private static initialized: boolean = false
	private static octave: number = 1
	
	public static notesPlaying: number[] = [] 
	public static noteFreq: number = 0
	public static noteType: string = ''

	//------------------------------ assign keys

	public static assignKeys (): void
	{     

		if (PianoManager.initialized)
			return;

		PianoManager.initialized = true;

		const pianoKeys = Array.from(document.getElementsByClassName('ReactPiano__Key'));

		//set data names for keys

		for (let i = 0; i < pianoKeys.length; i++)
			pianoKeys[i].setAttribute('id', `key${Number(i + 48)}`); 
		
	}

	//--------------------------play note
	

	public static playNote (message: number): void 
	{ 

		VISUALIZATION.init = true; 

		const key = document.getElementById(`key${message}`); 

		key?.classList.add('.ReactPiano__KeyActive');
		key?.classList.remove('.ReactPiano__Key--natural');

		PianoManager.noteFreq = message * PianoManager.octave;

		let note = midiToNote(PianoManager.noteFreq),
			time = Tone.Transport.seconds,
			isFlat = note.toString().toLowerCase().includes('b');

		PianoManager.noteType = isFlat ? 'flat' : 'natural'; 

		PianoManager.notesPlaying.push(note);

		document.getElementById(note)?.setAttribute('display', 'visible');

	//capture inputs if recording

		if (playerManager.recording === true)
		{
			eventManager.events.push([time, note]); 
			eventManager.mainPart = new Tone.Part(eventManager.currentPart, eventManager.events);
		}

	//play note

		SynthManager.Synth && SynthManager.options.type === 'poly' ?
			SynthManager.Synth.triggerAttack(`${note}`) :
			SynthManager.Synth.triggerAttackRelease(`${note}`, '8n');

	}

	//-----------------------------

	public static releaseNotes (): void
	{
		
		if (SynthManager.Synth && SynthManager.options.type === 'poly')
			SynthManager.Synth.releaseAll();

		PianoManager.notesPlaying.forEach(note => {
            document.getElementById(note.toString())?.setAttribute('display', 'none');
            PianoManager.notesPlaying = [];
        });
		PianoManager.noteFreq = 0;
		PianoManager.noteType = '';
		VISUALIZATION.init = false;
		
	}

}

//--------------------- main piano component

export function PIANO()
{

    return (

        <div id="piano-component" className='bordered' >
    
            <Display/>
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