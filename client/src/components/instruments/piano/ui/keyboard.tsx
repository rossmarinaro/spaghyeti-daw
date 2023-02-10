
//import 'react-piano/dist/styles.css';
import '../../../../css/Piano.css';
import { useEffect } from 'react';
import { MidiManager } from '../../../midi';
import { PianoManager } from '../main';


//midi 
	require('webmidi');

//react piano

const { Piano, KeyboardShortcuts, MidiNumbers } = require('react-piano'),
	    firstNote = MidiNumbers.fromNote('c3'),
		lastNote = MidiNumbers.fromNote('f6'),
		keyboardShortcuts = KeyboardShortcuts.create({ firstNote, lastNote, keyboardConfig: KeyboardShortcuts.HOME_ROW });


let uiInit = false;


//--------------------------------- PIANO UI


export function KEYBOARD ()
{	
	
	useEffect(()=> { 

		navigator.requestMIDIAccess().then((access: WebMidi.MIDIAccess) => {
			
			console.log('MIDI ACCESS: ', access);
			MidiManager.updateDeviceList(Array.from(access.inputs.values()));
			access.onstatechange = function(e: any) { MidiManager.updateDeviceList(Array.from(this.inputs.values())); }			
		
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
					playNote={ (midiNumber: number): void => PianoManager.playNote(midiNumber) }
					stopNote={ (): void => PianoManager.releaseNotes()}  
					keyboardShortcuts={ keyboardShortcuts }
					/* width={window.innerWidth / 2} */
				/>
			</div>
	  );

}