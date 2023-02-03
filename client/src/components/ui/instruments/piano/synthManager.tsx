import * as Tone from 'tone';

import { useEffect } from 'react';

// export const MONOSYNTH = new Tone.MonoSynth().toDestination();
// export const POLYSYNTH = new Tone.PolySynth().toDestination();

// MONOSYNTH.set({
//     filterEnvelope: {octaves: 54, sustain: 0.2, baseFrequency: 900}, 
//     oscillator : {type: 'square', partialCount: 25}, 
//     envelope: {attack: 0.1}, 
//     detune: 10
// });

// POLYSYNTH.set({ 
//     oscillator : {type: 'square'}, 
//     envelope: {attack: 0.1}, 
// });

let synths: Element[] = [];

export const SYNTHS: any = {
    current: null,
    mono : new Tone.PolySynth().toDestination(),
    duo : new Tone.PolySynth().toDestination(),
    am : new Tone.PolySynth().toDestination(),
    fm : new Tone.PolySynth().toDestination()
};

SYNTHS.mono.set({  
    polyphony : 6, 
    detune : 0, 
    volume : -7, 
    voice : Tone.MonoSynth, 
    oscillator : {type: 'square'}
});

SYNTHS.duo.set({  
    polyphony : 6, 
    detune : 0, 
    volume : 0, 
    voice : Tone.DuoSynth, 
    oscillator : {type: 'square'}
});

SYNTHS.am.set({  
    polyphony : 6, 
    detune : 0, 
    volume : -7, 
    voice : Tone.AMSynth, 
    oscillator : {type: 'square'}
});

SYNTHS.fm.set({  
    polyphony : 6, 
    detune : 0, 
    volume : 0, 
    voice : Tone.FMSynth, 
    oscillator : {type: 'square'}
});

//set default synth

SYNTHS.current = SYNTHS.mono;

console.log(SYNTHS.current)
export function SynthManager()
{

    const swapSynth = async (e: Event, selection: any) => {

        e.preventDefault();

        const 
            off = 'rgb(109, 104, 118)',
            on = 'rgb(64, 62, 68)',
            id = selection.getAttribute('id'),

        checkOption = async ()=> {

            switch (id)
            {
                case 'sound-bank-mono': 
                    return SYNTHS.mono;
                case 'sound-bank-duo': 
                    return SYNTHS.duo;
                case 'sound-bank-am': 
                    return SYNTHS.am;
                case 'sound-bank-fm': 
                    return SYNTHS.fm;

            }
        },

        option = await checkOption();

        if (option)
            SYNTHS.current = option;
            
        selection.style.backgroundColor = selection.style.backgroundColor === on ? off : on;

    }

    useEffect(()=>{

        synths = Array.from(document.getElementsByClassName('sound-bank-item'));

        synths.forEach((i: Element) => i.addEventListener('click', (e: any) => swapSynth(e, i)));

    });


    return (

        <div className="sound-bank" >
            <div id="synth-bank-mono" className="bordered sound-bank-item"><p>MONO</p></div>
            <div id="synth-bank-duo" className="bordered sound-bank-item"><p>DUO</p></div>
            <div id="synth-bank-am" className="bordered sound-bank-item"><p>AM</p></div>
            <div id="synth-bank-fm" className="bordered sound-bank-item"><p>FM</p></div>
        </div>
    );
}