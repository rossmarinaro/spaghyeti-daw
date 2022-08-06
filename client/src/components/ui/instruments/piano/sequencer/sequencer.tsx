import { useEffect } from "react";

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
                
                pad.addEventListener('click', (e: any) => {   
                    e.preventDefault(); 
                    pad.style.opacity = pad.style.opacity === '1' ? '0.5' : '1';  
                });
            }
        } 
    });

    return (
        <div id="sequencer" style={
            { height: '60%', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(8, 1fr)', 
            gridTemplateRows: 'repeat(8, 1fr)'
            }
        }>
            <div id="sequencer-pad-1" className="sequencer-pad"></div>
            <div id="sequencer-pad-2" className="sequencer-pad"></div>
            <div id="sequencer-pad-3" className="sequencer-pad"></div>
            <div id="sequencer-pad-4" className="sequencer-pad"></div>
            <div id="sequencer-pad-5" className="sequencer-pad"></div>
            <div id="sequencer-pad-6" className="sequencer-pad"></div>
            <div id="sequencer-pad-7" className="sequencer-pad"></div>
            <div id="sequencer-pad-8" className="sequencer-pad"></div>
            <div id="sequencer-pad-9" className="sequencer-pad"></div>
            <div id="sequencer-pad-10" className="sequencer-pad"></div>
            <div id="sequencer-pad-11" className="sequencer-pad"></div>
            <div id="sequencer-pad-12" className="sequencer-pad"></div>
            <div id="sequencer-pad-13" className="sequencer-pad"></div>
            <div id="sequencer-pad-14" className="sequencer-pad"></div>
            <div id="sequencer-pad-15" className="sequencer-pad"></div>
            <div id="sequencer-pad-16" className="sequencer-pad"></div>
            <div id="sequencer-pad-17" className="sequencer-pad"></div>
            <div id="sequencer-pad-18" className="sequencer-pad"></div>
            <div id="sequencer-pad-19" className="sequencer-pad"></div>
            <div id="sequencer-pad-20" className="sequencer-pad"></div>
            <div id="sequencer-pad-21" className="sequencer-pad"></div>
            <div id="sequencer-pad-22" className="sequencer-pad"></div>
            <div id="sequencer-pad-23" className="sequencer-pad"></div>
            <div id="sequencer-pad-24" className="sequencer-pad"></div>
            <div id="sequencer-pad-25" className="sequencer-pad"></div>
            <div id="sequencer-pad-26" className="sequencer-pad"></div>
            <div id="sequencer-pad-27" className="sequencer-pad"></div>
            <div id="sequencer-pad-28" className="sequencer-pad"></div>
            <div id="sequencer-pad-29" className="sequencer-pad"></div>
            <div id="sequencer-pad-30" className="sequencer-pad"></div>
            <div id="sequencer-pad-31" className="sequencer-pad"></div>
            <div id="sequencer-pad-32" className="sequencer-pad"></div>
        </div>
    );
}