
import { useEffect } from "react";
import { eventManager } from "./eventManager";

let initialized = false;

export function Sequencer ()
{

    useEffect(()=>{

        const pads = Array.from(document.getElementsByClassName('sequencer-pad'));
        
        if (initialized)
            return;

        for (let i = 0; i < pads.length + 1; i++)
        {        
            const pad = document.getElementById(`sequencer-pad-${i}`);
            if (pad !== null)
            { 
                pad.style.opacity = '1';
                initialized = true;
                
            //toggles pad on / off
                pad.addEventListener('click', (e: any) => { 

                    e.preventDefault(); 
                    pad.style.opacity = pad.style.opacity === '1' ? '0.5' : '1';  
                
                   // if (pad.style.opacity === '0.5')
                //    // {
                //         eventManager.events.filter(event => {
                //             //console.log('counter8th: ', eventManager.counter8th, 'time: ', event[0], 'note: '/* , event[1], 'data: ', Number(pad.dataset.part) */)
                           
                //             if (Number(pad.dataset.part) / 4 === eventManager.counter8th / 4)
                //             //{
                //                 console.log(event)
                //            // }
                //         });
                   // }
                  //  else 
                   // {

                   // }
                 
                });



            }
        } 
    });

    return (
        <div id="sequencer" 
            style={
                { 
                    height: '60%', 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(8, 1fr)', 
                    gridTemplateRows: 'repeat(8, 1fr)'
                }
            }
        >
            <div id="sequencer-pad-1" className="sequencer-pad" data-note="" data-part="1"></div>
            <div id="sequencer-pad-2" className="sequencer-pad" data-note="" data-part="5"></div>
            <div id="sequencer-pad-3" className="sequencer-pad" data-note="" data-part="9"></div>
            <div id="sequencer-pad-4" className="sequencer-pad" data-note="" data-part="13"></div>
            <div id="sequencer-pad-5" className="sequencer-pad" data-note="" data-part="17"></div>
            <div id="sequencer-pad-6" className="sequencer-pad" data-note="" data-part="21"></div>
            <div id="sequencer-pad-7" className="sequencer-pad" data-note="" data-part="25"></div>
            <div id="sequencer-pad-8" className="sequencer-pad" data-note="" data-part="29"></div>
            <div id="sequencer-pad-9" className="sequencer-pad" data-note="" data-part="2"></div>
            <div id="sequencer-pad-10" className="sequencer-pad" data-note="" data-part="6"></div>
            <div id="sequencer-pad-11" className="sequencer-pad" data-note="" data-part="10"></div>
            <div id="sequencer-pad-12" className="sequencer-pad" data-note="" data-part="14"></div>
            <div id="sequencer-pad-13" className="sequencer-pad" data-note="" data-part="18"></div>
            <div id="sequencer-pad-14" className="sequencer-pad" data-note="" data-part="22"></div>
            <div id="sequencer-pad-15" className="sequencer-pad" data-note="" data-part="26"></div>
            <div id="sequencer-pad-16" className="sequencer-pad" data-note="" data-part="30"></div>
            <div id="sequencer-pad-17" className="sequencer-pad" data-note="" data-part="3"></div>
            <div id="sequencer-pad-18" className="sequencer-pad" data-note="" data-part="7"></div>
            <div id="sequencer-pad-19" className="sequencer-pad" data-note="" data-part="11"></div>
            <div id="sequencer-pad-20" className="sequencer-pad" data-note="" data-part="15"></div>
            <div id="sequencer-pad-21" className="sequencer-pad" data-note="" data-part="19"></div>
            <div id="sequencer-pad-22" className="sequencer-pad" data-note="" data-part="23"></div>
            <div id="sequencer-pad-23" className="sequencer-pad" data-note="" data-part="27"></div>
            <div id="sequencer-pad-24" className="sequencer-pad" data-note="" data-part="31"></div>
            <div id="sequencer-pad-25" className="sequencer-pad" data-note="" data-part="4"></div>
            <div id="sequencer-pad-26" className="sequencer-pad" data-note="" data-part="8"></div>
            <div id="sequencer-pad-27" className="sequencer-pad" data-note="" data-part="12"></div>
            <div id="sequencer-pad-28" className="sequencer-pad" data-note="" data-part="16"></div>
            <div id="sequencer-pad-29" className="sequencer-pad" data-note="" data-part="20"></div>
            <div id="sequencer-pad-30" className="sequencer-pad" data-note="" data-part="24"></div>
            <div id="sequencer-pad-31" className="sequencer-pad" data-note="" data-part="28"></div>
            <div id="sequencer-pad-32" className="sequencer-pad" data-note="" data-part="32"></div>
        </div>
    );
}