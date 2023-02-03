import * as Tone from 'tone';

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