
import '../../../../css/Piano.css';
import * as Tone from 'tone';
import React, { useEffect, useState } from 'react';
import { MONOSYNTH, POLYSYNTH } from '../../../synths/main';
import { eventManager } from './sequencer/eventManager';
import VISUALIZATION from './display';

//import 'react-piano/dist/styles.css';

//react piano

const { Piano, KeyboardShortcuts, MidiNumbers } = require('react-piano'),
	   midiToNote = require('midi-note');

//midi 
	require('webmidi');




//--------------------------------- PIANO UI


export function KEYBOARD ()   
{	
	let 
		initialized = false,
		octave = 1;

	const 
		firstNote = MidiNumbers.fromNote('c3'),
		lastNote = MidiNumbers.fromNote('f6'),
		keyboardShortcuts = KeyboardShortcuts.create({
			firstNote: firstNote,
			lastNote: lastNote,
			keyboardConfig: KeyboardShortcuts.HOME_ROW,
		});


	useEffect(()=>{ 

		navigator.requestMIDIAccess().then((access: WebMidi.MIDIAccess) => {
			
			console.log('MIDI ACCESS: ', access);

			const debugEl = document.getElementById('debug');

			function connectToDevice(device: any)
			{
				console.log('connecting to device: ', device);
				assignMidiToKeys();
					
				device.onmidimessage = function(message: WebMidi.MIDIMessageEvent)
				{
					const [command, num, velocity]: any = message.data;
					if (debugEl !== null)
					{
						if (command === 248) //up
							return;

						playNote(num, '16n');
					}
				}
			}
			function updateDeviceList(inputs: any)
			{
				inputs.map((e: any) => {
					const el = document.getElementById('midi-device');
					if (el !== null)
					{
						el.innerText = `${e.name} (${e.manufacturer})`;
						el.addEventListener('click', connectToDevice.bind(null, e));
					}
					return el;
				});
			}			
			updateDeviceList(Array.from(access.inputs.values()));

			access.onstatechange = function(e: any){
				updateDeviceList(Array.from(this.inputs.values()));
			}

			
		
		});

	});


//play note

  	const playNote = (message: number, duration: number | string) => { 

		VISUALIZATION.init = true; 

		const key = document.getElementById(`key${message}`); 
		key?.classList.add('.ReactPiano__KeyActive');
		key?.classList.remove('.ReactPiano__Key--natural');

		//console.log('midi num: ', message, 'to note: ', midiToNote(message));

		let note = midiToNote(message * octave),
			time = Tone.Transport.seconds;

		eventManager.events.push([time, note]); 
		eventManager.mainPart = new Tone.Part(eventManager.currentPart, eventManager.events);

	//play note
		POLYSYNTH.triggerAttackRelease(`${note}`, duration);

	},

	assignMidiToKeys = () => {

		if (initialized)
			return;

		initialized = true;

		const pianoKeys = Array.from(document.getElementsByClassName('ReactPiano__Key'));

		//set data names for keys

		for (let i = 0; i < pianoKeys.length; i++)
			pianoKeys[i].setAttribute('id', `key${Number(i + 48)}`); 
		
	}

	return ( 
			<div id="piano-ui">
			<Piano 
				id="piano" className='bordered'
				noteRange={{ first: firstNote, last: lastNote }}
				playNote={(midiNumber: number) => playNote(midiNumber, Infinity)}
				stopNote={(midiNumber: number) => {
					POLYSYNTH.releaseAll();
					VISUALIZATION.init = false;
				}}  //MONOSYNTH.triggerRelease()}
				/* width={window.innerWidth / 2} */
				keyboardShortcuts={keyboardShortcuts}
			/>
		</div>
	  );

}