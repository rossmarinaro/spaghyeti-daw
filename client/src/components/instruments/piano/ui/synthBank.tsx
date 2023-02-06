import * as Tone from 'tone';

import { useEffect } from 'react';


export class SynthManager {

    public static synths: Element[] = []
    public static init: boolean = false
    public static Synth: any
    
    public static options: any = { //synth defaults
        voice: Tone.PolySynth,
        type: 'poly',
        volume: 1,  
        detune: 1,
        envelope: { 
            attack: 0.005,
            decay: 0.1,
            release: 1,
            sustain: 0.3
        },
        filter: {
            Q: 1,
            detune: 0,
            frequency: 0,
            gain: 0,
            rolloff: -12,
            type: 'lowpass'
        }, 
        filterEnvelope: {
            attack: 0.001,
            attackCurve: 'linear',
            baseFrequency: 300,
            decay: 0.7,
            decayCurve: 'exponential',
            exponent: 2,
            octaves: 54,
            release: 0.8,
            releaseCurve: 'exponential',
            sustain: 0.1
        },
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

        SynthManager.Synth = SynthManager.options.type === 'poly' ?
            new Tone.PolySynth(Tone.Synth).toDestination() :
            new SynthManager.options.voice({filterEnvelope: SynthManager.options.filterEnvelope}).toDestination();

        SynthManager.Synth.set({
            oscillator : SynthManager.options.oscillator, 
            envelope: SynthManager.options.envelope, 
            detune: SynthManager.options.detune
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
                SynthManager.options.type = 'mono';
                SynthManager.options.voice = Tone.MonoSynth;
            break;
            case 'synth-bank-duo': 
                SynthManager.options.volume = 0;
                SynthManager.options.type = 'duo';
                SynthManager.options.voice = Tone.DuoSynth;
            break; 
            case 'synth-bank-poly': 
                SynthManager.options.volume = 2;
                SynthManager.options.type = 'poly';
                SynthManager.options.voice = Tone.PolySynth;
            break;
            case 'synth-bank-fm': 
                SynthManager.options.volume = 0;
                SynthManager.options.type = 'fm';
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
            SynthManager.swapSynth(null, document.getElementById('synth-bank-poly'));

    });


    return (

        <div className="sound-bank" >
            <div id="synth-bank-mono" className="bordered synth-bank-item"><p>MONO</p></div>
            <div id="synth-bank-duo" className="bordered synth-bank-item"><p>DUO</p></div>
            <div id="synth-bank-poly" className="bordered synth-bank-item"><p>POLY</p></div>
            <div id="synth-bank-fm" className="bordered synth-bank-item"><p>FM</p></div>
        </div>
    );
}