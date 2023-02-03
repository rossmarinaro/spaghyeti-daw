import { useEffect } from "react";
import { SYNTHS } from './synthManager';



export function OptionsManager()
{

    const getSliderVal = (e: any, meter: string) =>{ 
        e.preventDefault();

        switch(meter)
        {
            case 'partials': SYNTHS.current.set({ oscillator : {partialCount: e.target.value} }); break;
            case 'frequency': SYNTHS.current.set({ detune: e.target.value }); break;
            case 'env': SYNTHS.current.set({ envelope: {attack: e.target.value } }); break;
        }
    }

    useEffect(()=>{

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
                    <input id="env-meter-level" className="bordered" type="range" min="0.1" max="1"/>
                </div>
 
           </div>
        </div>
    );
}