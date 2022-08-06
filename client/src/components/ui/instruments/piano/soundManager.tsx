import { useEffect } from 'react';
import * as Tone from 'tone';

import { MONOSYNTH, POLYSYNTH } from '../../../synths/main';

export function SoundManager()
{
    let sounds: Element[] = [];

    const swapSound = async (e: any, option: any) => {

        e.preventDefault();

        const 
        off = 'rgb(109, 104, 118)',
        on = 'rgb(64, 62, 68)',
        id = option.getAttribute('id'),

        check = async ()=>{

            switch (id)
            {
                case 'sound-bank-square': 
                    return 'square';
                case 'sound-bank-saw': 
                    return 'sawtooth';
                case 'sound-bank-sine': 
                    return 'sine';
                case 'sound-bank-triangle': 
                    return 'triangle';
            }
        },

        sound = await check();

        POLYSYNTH.set({oscillator: { type: sound}});

        option.style.backgroundColor = option.style.backgroundColor === on ? off : on;

        sounds.forEach((element: Element) => {
            if (id !== element.id)
                element.setAttribute('style', 'background-color: off');
        })

    }

    useEffect(()=>{

        sounds = Array.from(document.getElementsByClassName('sound-bank-item'));

        sounds.forEach((i: Element) => i.addEventListener('click', (e: any) => swapSound(e, i)));

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