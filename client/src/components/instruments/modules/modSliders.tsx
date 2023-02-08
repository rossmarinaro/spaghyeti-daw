import { useEffect } from 'react';
import { SynthManager } from '../piano/ui/synthBank';


const getSliderVal = (e: any, meter: string): void => {
         
    e.preventDefault();

    switch(meter)
    {
        case 'volume': 
            SynthManager.options.volume = e.target.value;
            SynthManager.Synth.set({ volume: e.target.value }); 
        break;
        case 'partials': 
            SynthManager.options.oscillator.partialCount = e.target.value;
            SynthManager.Synth.set({ oscillator : {partialCount: e.target.value} }); 
        break;
        case 'frequency': 
            SynthManager.options.detune = e.target.value;
            SynthManager.Synth.set({ detune: e.target.value }); 
        break;
        case 'env-att': 
            SynthManager.options.envelope.attack = e.target.value;
            SynthManager.Synth.set({ envelope: {attack: e.target.value } }); 
        break;
        case 'env-rel': 
            SynthManager.options.envelope.release = e.target.value;
            SynthManager.Synth.set({ envelope: {release: e.target.value } }); 
        break;
        case 'env-sus': 
            SynthManager.options.envelope.sustain = e.target.value;
            SynthManager.Synth.set({ envelope: {sustain: e.target.value } }); 
        break;
        case 'env-dec': 
            SynthManager.options.envelope.decay = e.target.value;
            SynthManager.Synth.set({ envelope: {decay: e.target.value } }); 
        break;
    }

}

//--------------------------- options UI

let init = false;


export function ModulationUI()
{

    useEffect(()=> {

        if (init)
            return;

        init = true;

        const 
              volumeMeter = document.getElementById('volume-meter-level'),
              partialsMeter = document.getElementById('partials-meter-level'),
              frequencyMeter = document.getElementById('frequency-meter-level'),
              envAttMeter = document.getElementById('env-att-meter-level'),
              envRelMeter = document.getElementById('env-rel-meter-level'),
              envSusMeter = document.getElementById('env-sus-meter-level'),
              envDecMeter = document.getElementById('env-dec-meter-level');

        volumeMeter?.addEventListener('change', e => getSliderVal(e, 'volume'));
        partialsMeter?.addEventListener('change', e => getSliderVal(e, 'partials'));
        frequencyMeter?.addEventListener('change', e => getSliderVal(e, 'frequency'));
        envAttMeter?.addEventListener('change', e => getSliderVal(e, 'env-att'));
        envRelMeter?.addEventListener('change', e => getSliderVal(e, 'env-rel'));
        envSusMeter?.addEventListener('change', e => getSliderVal(e, 'env-sus'));
        envDecMeter?.addEventListener('change', e => getSliderVal(e, 'env-dec'));

    });

    return (

        <div id="mod-sliders">
            <div>
                {/* <label htmlFor="volume-meter-level">volume</label> */}
                <input id="volume-meter-level" className="bordered mod-slider" type="range" min="0" max="700" step="0.1" />
            </div>
            <div>
                {/* <label htmlFor="partials-meter-level">partials</label> */}
                <input id="partials-meter-level" className="bordered mod-slider" type="range" min="0" max="200"/>
            </div>
            <div>
          {/*       <label htmlFor="frequency-meter-level">frequency</label> */}
                <input id="frequency-meter-level" className="bordered mod-slider" type="range" min="0" max="1000"/>
            </div>
            <div>
               {/*  <label htmlFor="env-att-meter-level">env att</label> */}
                <input id="env-att-meter-level" className="bordered mod-slider" type="range" min="0" max="1" step="0.1" />
            </div>
            <div>
               {/*  <label htmlFor="env-rel-meter-level">env rel</label> */}
                <input id="env-rel-meter-level" className="bordered mod-slider" type="range" min="0" max="1" step="0.1" />
            </div>
            <div>
               {/*  <label htmlFor="env-sus-meter-level">env sus</label> */}
                <input id="env-sus-meter-level" className="bordered mod-slider" type="range" min="0" max="1" step="0.1" />
            </div>
            <div>
                {/* <label htmlFor="env-dec-meter-level">env dec</label> */}
                <input id="env-dec-meter-level" className="bordered mod-slider" type="range" min="0" max="1" step="0.1" />
            </div>
        </div>   
     
       
    );
}