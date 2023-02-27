
//import 'react-piano/dist/styles.css';
import '../../../../css/Piano.css';
import { useEffect, useState } from 'react';
import { MidiManager } from '../../../midi';
import { PianoManager } from '../main';


//midi 
	require('webmidi');


let uiInit = false;

const { Piano, KeyboardShortcuts, MidiNumbers } = require('react-piano'),   //react piano
	    firstNote = MidiNumbers.fromNote('c3'),
		lastNote = MidiNumbers.fromNote('f6'),
		keyboardShortcuts = KeyboardShortcuts.create({ firstNote, lastNote, keyboardConfig: KeyboardShortcuts.HOME_ROW });

		
//--------------------------------- keyboard UI


export function KEYBOARD ()
{	

	PianoManager.releaseNotes();

	const [ relTime, setRelTime ] = useState(8);


	useEffect(()=> { 

		
		PianoManager.relTime = relTime.toString() + 'n';

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

				<div>
					<p onClick={() => setRelTime(relTime + 2)}>Attack</p>
					<p onClick={() => setRelTime(relTime - 2)}>Release</p>
					<p>{PianoManager.relTime}</p>
				</div>

				<Piano 
					id="piano" className='bordered'
					noteRange={{ first: firstNote, last: lastNote }}
					playNote={ (midiNumber: number): void => PianoManager.playNote(midiNumber) }
					stopNote={ (midiNumber: number): void => PianoManager.releaseNote(midiNumber, PianoManager.relTime)}  
					keyboardShortcuts={ keyboardShortcuts }
					/* width={window.innerWidth / 2} */
				/>
			</div>
	  );

}