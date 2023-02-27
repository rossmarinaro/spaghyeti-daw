// export class MIDIAccess {

//     onDeviceInput: any;

//     constructor(args: any) {
//         this.onDeviceInput = args.onDeviceInput //|| console.log;
//     }
//     start() {
//     return new Promise((resolve, reject) => {
//             this._requestAccess().then(access => {
//                 this.initialize(access);
//                 resolve();
//             }).catch(() => reject('Something went wrong.'));
//         });
//     }
//     initialize(access: any) {
//         const devices = access.inputs.values();
//         for (let device of devices) this.initializeDevice(device);
//     }
//     initializeDevice(device: any) {
    
//         device.onmidimessage = this.onMessage.bind(this);
//     }
//     onMessage(message: any) {
    
//         let [_, input, value] = message.data;
//         this.onDeviceInput({ input, value });
//     }
// //     _requestAccess() {
// //     return new Promise((resolve, reject) => {
// //         if (navigator.requestMIDIAccess)
// //         navigator.requestMIDIAccess()
// //             .then(resolve)
// //             .catch(reject);
// //         else reject();
// //     });
// //   }
// };
// new MIDIAccess(null/* { onDeviceInput } */)
// // class Instrument {
// //     constructor() {
// //         this.synth = new Tone.PolySynth(3, Tone.FMSynth);
// //         this.filter = new Tone.Filter();
// //         this.volume = new Tone.Gain();
// //         this.synth.connect(this.filter);
// //         this.filter.connect(this.volume);
// //         this.volume.toMaster();
// //         this.filter.frequency.value = 200; // 200 - 15000
// //         this.volume.gain.value = 0.8; // 0-0.8
// //     }
// //     toggleSound(value) 
// //     {
// //         let method = value === 127 ? 'triggerAttack' : 'releaseAll';
// //         this.synth[method](['C4', 'E4', 'G4']);
// //     }
// //     handleVolume(value) 
// //     { // 0-127
// //         let val = value / 127 * 0.8;
// //         this.volume.gain.value = val;
// //     }
// //     handleFilter(value) 
// //     { // 0-127
// //         let val = value / 127 * 14800 + 200;
// //         this.filter.frequency.value = val;
// //     }
// // }


// // // if there is a problem in chrome with starting audio context before a user gesture. This fixes it.
// // let started = false;
// // document.documentElement.addEventListener('mousedown', () => {
// //     if (started) return;
// //     started = true;
// //     const inst = new Instrument();
// //     const midi = new MIDIAccess({ onDeviceInput });
// //     midi.start().then(() => console.log('STARTED!')).catch(console.error);

// //     function onDeviceInput({ input, value }) 
// //     {
// //         if (input === 23) inst.toggleSound(value);
// //         else if (input === 2) inst.handleVolume(value);
// //         else if (input === 14) inst.handleFilter(value);
// //         //  
// //         if (input === 7) inst.toggleSound(value);
// //         //else console.log('onDeviceInput!', input, value);
// //     }
// // });


import VISUALIZATION from './instruments/piano/ui/display';
import { PianoManager } from './instruments/piano/main';


export class MidiManager {

    private static connectToDevice (device: any): void
    {

        console.log('connecting to device: ', device);
            
        device.onmidimessage = function(message: WebMidi.MIDIMessageEvent)
        {
            const [command, num, velocity]: any = message.data; 

            if (command === 248) //up
            {
                VISUALIZATION.init = false;
                PianoManager.releaseNote(num, PianoManager.relTime);
            }

            else 
               PianoManager.playNote(num);
        }
    }

    //------------------------------------

    public static updateDeviceList (inputs: any): void
    {

        inputs.map((e: any) => {

            const el = document.getElementById('midi-device');

            if (el !== null)
            {
                el.innerText = `${e.name} (${e.manufacturer})`;
                el.addEventListener('click', MidiManager.connectToDevice.bind(null, e));

            //auto connect to midi device

                MidiManager.connectToDevice(e);
            }

            return el;

        });
    }	
}




