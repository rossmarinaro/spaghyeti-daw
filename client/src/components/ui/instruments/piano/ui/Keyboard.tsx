
//import 'react-piano/dist/styles.css';
import '../../../../../css/Piano.css';
import * as Tone from 'tone';
import { useEffect } from 'react';
import { SynthManager } from './synthBank';
import { eventManager } from './sequencer/eventManager';
import { playerManager } from '../../../../workspace/track/playerManager';
import { MidiManager } from './midi';
import VISUALIZATION from './display';


//midi 
	require('webmidi');

//react piano

const { Piano, KeyboardShortcuts, MidiNumbers } = require('react-piano'),
	    midiToNote = require('midi-note'),
	    firstNote = MidiNumbers.fromNote('c3'),
		lastNote = MidiNumbers.fromNote('f6'),
		keyboardShortcuts = KeyboardShortcuts.create({ firstNote, lastNote, keyboardConfig: KeyboardShortcuts.HOME_ROW });


let uiInit = false;


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
	

	public static playNote (message: number, duration: number | string): void 
	{ 

		VISUALIZATION.init = true; 

		const key = document.getElementById(`key${message}`); 

		key?.classList.add('.ReactPiano__KeyActive');
		key?.classList.remove('.ReactPiano__Key--natural');

		//console.log('midi num: ', message, 'to note: ', midiToNote(message));

		PianoManager.noteFreq = message * PianoManager.octave;

		let note = midiToNote(PianoManager.noteFreq),
			time = Tone.Transport.seconds;

		PianoManager.noteType = note.toString().includes('b') ? 'flat' : 'natural'; 
		
		PianoManager.notesPlaying.push(note);
	
	//capture inputs if recording

		if (playerManager.recording === true)
		{
			eventManager.events.push([time, note]); 
			eventManager.mainPart = new Tone.Part(eventManager.currentPart, eventManager.events);
		}

	//play note

		//if (SynthManager.Synth.activeVoices <= 1)
			SynthManager.Synth.triggerAttackRelease(`${note}`, duration);

	}

	//-----------------------------

	public static releaseNotes (): void
	{
		
		SynthManager.Synth.releaseAll();
		PianoManager.notesPlaying = [];
		PianoManager.noteFreq = 0;
		PianoManager.noteType = '';
		VISUALIZATION.init = false;
		
	}

}


//--------------------------------- PIANO UI


export function KEYBOARD ()
{	
	
	useEffect(()=> { 

		navigator.requestMIDIAccess().then((access: WebMidi.MIDIAccess) => {
			
			console.log('MIDI ACCESS: ', access);
			MidiManager.updateDeviceList(Array.from(access.inputs.values()));
			access.onstatechange = function(e: any){ MidiManager.updateDeviceList(Array.from(this.inputs.values())); }			
		
		});

		if (uiInit)
			return;

		uiInit = true;

		PianoManager.assignKeys();

	});


	return ( 
			<div id="piano-ui">
			<Piano 
				id="piano" className='bordered'
				noteRange={{ first: firstNote, last: lastNote }}
				playNote={ (midiNumber: number): void => PianoManager.playNote(midiNumber, Infinity) }
				stopNote={ (): void => PianoManager.releaseNotes()}  
				keyboardShortcuts={keyboardShortcuts}
				/* width={window.innerWidth / 2} */
			/>
		</div>
	  );

}