import { useEffect } from 'react';
import { SynthManager } from './synthManager';

let sounds: Element[] = [],
    init = false;

const swapSound = async (event: Event | null, selection: any) => {

    if (event)
        event.preventDefault();

    const 
        off = 'rgb(109, 104, 118)',
        on = 'rgb(64, 62, 68)',
        id = selection.getAttribute('id');

    selection.style.backgroundColor = selection.style.backgroundColor === on ? off : on;

    switch (id)
    {

        case 'sound-bank-square': 
            SynthManager.options.oscillator.type = 'square';
        break;
        case 'sound-bank-saw': 
            SynthManager.options.oscillator.type = 'sawtooth';
        break;
        case 'sound-bank-sine': 
            SynthManager.options.oscillator.type = 'sine';
        break;
        case 'sound-bank-triangle': 
            SynthManager.options.oscillator.type = 'triangle';
        break;
    } 

    SynthManager.update();

    sounds.forEach((element: any) => {    

        if (id !== element.id)
        {
            element.setAttribute('style', 'background-color: on');
            element.style.backgroundColor = 'rgb(64, 62, 68)';
        }
    });

}




//------------------------------- UI component


export function SoundbankUI()
{

    useEffect(()=> {

        if (init) 
            return;

        init = true;

        sounds = Array.from(document.getElementsByClassName('sound-bank-item'));

        sounds.forEach((i: Element) => i.addEventListener('click', (e: any) => swapSound(e, i)));

        //set default sound

        for (let i = 0; i < 2; i++)
            swapSound(null, document.getElementById('sound-bank-square'));

    });


    return (

        <div className="sound-bank" >
            <div id="sound-bank-square" className="bordered sound-bank-item"><p>SQR</p></div>
            <div id="sound-bank-saw" className="bordered sound-bank-item"><p>SAW</p></div>
            <div id="sound-bank-sine" className="bordered sound-bank-item"><p>SIN</p></div>
            <div id="sound-bank-triangle" className="bordered sound-bank-item"><p>TRI</p></div>
        </div>

    );
}