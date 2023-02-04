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

export class SynthManager {

    public static synths: Element[] = []
    public static init: boolean = false
    public static Synth: any//Tone.PolySynth

    public static options: { volume: number, voice: any, oscillator: { type: string }} = 
        { volume: 1, voice: Tone.MonoSynth, oscillator: { type: 'square' }}


    public static update (): void
    { 
       if (SynthManager.Synth)
            SynthManager.Synth.disconnect();

        SynthManager.Synth = new Tone.PolySynth({ volume: SynthManager.options.volume, voice: SynthManager.options.voice }).toDestination();
        SynthManager.Synth.set({oscillator: { type: SynthManager.options.oscillator.type }})
    }

    public static async swapSynth (e: Event, selection: any) 
    {            

        e.preventDefault();
    
        const 
            off = 'rgb(109, 104, 118)',
            on = 'rgb(64, 62, 68)',
            id = selection.getAttribute('id');

        selection.style.backgroundColor = selection.style.backgroundColor === on ? off : on;

        switch (id)
        {
            case 'synth-bank-mono': 
                SynthManager.options.volume = 0;
                SynthManager.options.voice = Tone.MonoSynth;
            break;
            case 'synth-bank-duo': 
                SynthManager.options.volume = 0;
                SynthManager.options.voice = Tone.DuoSynth;
            break; 
            case 'synth-bank-am': 
                SynthManager.options.volume = 2;
                SynthManager.options.voice = Tone.AMSynth;
            break;
            case 'synth-bank-fm': 
                SynthManager.options.volume = 0;
                SynthManager.options.voice = Tone.FMSynth;
            break;
        }

        SynthManager.update();

        SynthManager.synths.forEach((element: any) => {    

            if (id !== element.id)
            {
                element.setAttribute('style', 'background-color: on');
                element.style.backgroundColor = 'rgb(64, 62, 68)';
            }
        });
    
    }
}

//------------------------------ UI component

export function SynthbankUI()
{

    useEffect(()=> { 
        
        if (SynthManager.init) 
            return;

        SynthManager.init = true;
        SynthManager.update();
        SynthManager.synths = Array.from(document.getElementsByClassName('synth-bank-item'));
        SynthManager.synths.forEach((i: Element) => i.addEventListener('click', (e: any) => SynthManager.swapSynth(e, i)));

    });


    return (

        <div className="sound-bank" >
            <div id="synth-bank-mono" className="bordered synth-bank-item"><p>MONO</p></div>
            <div id="synth-bank-duo" className="bordered synth-bank-item"><p>DUO</p></div>
            <div id="synth-bank-am" className="bordered synth-bank-item"><p>AM</p></div>
            <div id="synth-bank-fm" className="bordered synth-bank-item"><p>FM</p></div>
        </div>
    );
}