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
    public static Synth: Tone.PolySynth
    public static options: any = { //synth defaults
        voice: Tone.MonoSynth,
        volume: 1,  
        detune: 1,
        envelope: { attack: 0.1 }, 
        oscillator: { 
            type: 'square', 
            partials: [0, 2, 3, 4],
            partialCount: 1 
        }
    }


    //--------------- update current synth

    public static update (): void
    { 
        
       if (SynthManager.Synth)
            SynthManager.Synth.dispose().disconnect();

        SynthManager.Synth = new Tone.PolySynth({ volume: SynthManager.options.volume, voice: SynthManager.options.voice }).toDestination();

        SynthManager.Synth.set({
            envelope: { attack: SynthManager.options.envelope.attack },
            detune: SynthManager.options.detune,
            oscillator: { 
                type: SynthManager.options.oscillator.type, 
                partials: SynthManager.options.oscillator.partials,
                partialCount: SynthManager.options.oscillator.partialCount
            }
        });
    }

    //-------------- swap current synth

    public static swapSynth (event: Event | null, selection: any): void 
    {            

        if (event)
            event.preventDefault();

        switch (selection.getAttribute('id'))
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

        SynthManager.synths.forEach((element: any) => element.style.backgroundColor = selection.getAttribute('id') !== element.id ? 'rgb(64, 62, 68)' : 'rgb(109, 104, 118)');
    
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
        
        //set default synth

        for (let i = 0; i < 2; i++)
            SynthManager.swapSynth(null, document.getElementById('synth-bank-mono'));

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