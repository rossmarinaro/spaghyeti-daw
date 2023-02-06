import { useEffect } from "react";
import { SynthManager } from './synthBank';


const getSliderVal = (e: any, meter: string): void => {
         
    e.preventDefault();

    switch(meter)
    {
        case 'partials': 
            SynthManager.options.oscillator.partialCount = e.target.value;
            SynthManager.Synth.set({ oscillator : {partialCount: e.target.value} }); 
        break;
        case 'frequency': 
            SynthManager.options.detune = e.target.value;
            SynthManager.Synth.set({ detune: e.target.value }); 
        break;
        case 'env': 
            SynthManager.options.envelope.attack = e.target.value * 0.001;
            SynthManager.Synth.set({ envelope: {attack: e.target.value * 0.001 } }); 
        break;
    }

}

//--------------------------- options UI


export function OptionsUI()
{

    useEffect(()=> {

        const partialsMeter = document.getElementById('partials-meter-level'),
              frequencyMeter = document.getElementById('frequency-meter-level'),
              envMeter = document.getElementById('env-meter-level');

        envMeter?.addEventListener('change', e => getSliderVal(e, 'env'));
        partialsMeter?.addEventListener('change', e => getSliderVal(e, 'partials'));
        frequencyMeter?.addEventListener('change', e => getSliderVal(e, 'frequency'));

    });

    return (

        <div className="sound-bank">
         
           <div id="synth-options" className="options">
               
                <div id="partials">
                    <p>Partials</p>
                    <input id="partials-meter-level" className="bordered" type="range" min="0" max="200"/>
                </div>
                <div id="frequency">
                    <p>frequency</p>
                    <input id="frequency-meter-level" className="bordered" type="range" min="0" max="1000"/>
                </div>
                <div id="env">
                    <p>env</p>
                    <input id="env-meter-level" className="bordered" type="range" min="0" max="1000"/>
                </div>
 
           </div>
        </div>
    );
}