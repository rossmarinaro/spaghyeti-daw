import { useEffect } from 'react';
import { SYNTHS } from '../../../synths/main';

let sounds: Element[] = [];

export function SoundManager()
{

    const swapSound = async (e: Event, selection: any) => {

        e.preventDefault();

        const 
            off = 'rgb(109, 104, 118)',
            on = 'rgb(64, 62, 68)',
            id = selection.getAttribute('id'),

        checkOption = async ()=> {

            switch (id)
            {
                case 'sound-bank-mono': 
                    return SYNTHS.mono;
                case 'sound-bank-duo': 
                    return SYNTHS.duo;
                case 'sound-bank-am': 
                    return SYNTHS.am;
                case 'sound-bank-fm': 
                    return SYNTHS.fm;

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

        option = await checkOption();

        option instanceof String ?
            SYNTHS.current.options.oscillator.type = option :
            SYNTHS.current = option;

        selection.style.backgroundColor = selection.style.backgroundColor === on ? off : on;

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

        <>
            <div className="sound-bank" >
                <div id="sound-bank-square" className="bordered sound-bank-item"><p>SQR</p></div>
                <div id="sound-bank-saw" className="bordered sound-bank-item"><p>SAW</p></div>
                <div id="sound-bank-sine" className="bordered sound-bank-item"><p>SIN</p></div>
                <div id="sound-bank-triangle" className="bordered sound-bank-item"><p>TRI</p></div>
            </div>
            <div className="sound-bank" >
                <div id="sound-bank-mono" className="bordered sound-bank-item"><p>MONO</p></div>
                <div id="sound-bank-duo" className="bordered sound-bank-item"><p>DUO</p></div>
                <div id="sound-bank-am" className="bordered sound-bank-item"><p>AM</p></div>
                <div id="sound-bank-fm" className="bordered sound-bank-item"><p>FM</p></div>
            </div>
        </>
    );
}