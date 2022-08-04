import * as Tone from 'tone';
import { MONOSYNTH, POLYSYNTH } from '../synths/main';

export class EventManager {

    private counter: number
    private keySigValueNum: number
    private currentTime: number
    private mainPart: Tone.Part

    public sequenceArray: Tone.Sequence
    public mainLoop: Tone.Loop


    constructor()
    {
	
        this.counter = 0; 
    
        this.keySigValueNum = 1;
        this.currentTime = Tone.Transport.getSecondsAtTime(Tone.Transport.position);
        this.sequenceArray = new Tone.Sequence((time, note) => this.sequenceCallback, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], '4n');
        this.mainLoop = new Tone.Loop((time: number)=> this.startCounter(time), '4n'); //start counter
        this.mainPart = new Tone.Part(this.currentPart, [[0, 'E2'], ['0:5', 'G3'], ['0:3:2', ' B2']]);


        const gainNode = Tone.context.createGain(),
              env = new Tone.Envelope().connect(gainNode.gain),
              filter = new Tone.Filter(200, 'highpass'),
              filterEnvelope = new Tone.FrequencyEnvelope().connect(filter),
              ampEnv = new Tone.AmplitudeEnvelope().toDestination();

    //start transport

        Tone.Transport.loopStart = '0'
        Tone.Transport.loopEnd = '4:0:0';
        Tone.Transport.loop = true;
        Tone.Transport.bpm.value = 170; 
        Tone.Transport.schedule(time => this.scheduledCallback(time), "0:0:0"); 

   
    } 

 //-----------------------------------------

    private async startCounter(ticks: number): Promise<void>
    { 	
        ticks = Tone.Transport.ticks;

        let remainder = 16 - this.counter;
        
        if (this.counter === 0)
            this.scheduledCallback(ticks);
        
    //sample pad pad sequencer
   
        const pads = Array.from(document.getElementsByClassName('sequencer-pad')),

            track1 = [
                document.getElementById(`sequencer-pad-1`),
                document.getElementById(`sequencer-pad-9`),
                document.getElementById(`sequencer-pad-17`), 
                document.getElementById(`sequencer-pad-25`)
            ],
            track2 = [
                document.getElementById(`sequencer-pad-2`),
                document.getElementById(`sequencer-pad-10`),
                document.getElementById(`sequencer-pad-18`), 
                document.getElementById(`sequencer-pad-26`)
            ],
            track3 = [
                document.getElementById(`sequencer-pad-3`),
                document.getElementById(`sequencer-pad-11`),
                document.getElementById(`sequencer-pad-19`), 
                document.getElementById(`sequencer-pad-27`)
            ],
            track4 = [
                document.getElementById(`sequencer-pad-4`),
                document.getElementById(`sequencer-pad-12`),
                document.getElementById(`sequencer-pad-20`), 
                document.getElementById(`sequencer-pad-28`)
            ],
            track5 = [
                document.getElementById(`sequencer-pad-5`),
                document.getElementById(`sequencer-pad-13`),
                document.getElementById(`sequencer-pad-21`), 
                document.getElementById(`sequencer-pad-29`)
            ],
            track6 = [
                document.getElementById(`sequencer-pad-6`),
                document.getElementById(`sequencer-pad-14`),
                document.getElementById(`sequencer-pad-22`), 
                document.getElementById(`sequencer-pad-30`)
            ],
            track7 = [
                document.getElementById(`sequencer-pad-7`),
                document.getElementById(`sequencer-pad-15`),
                document.getElementById(`sequencer-pad-23`), 
                document.getElementById(`sequencer-pad-31`)
            ],
            track8 = [
                document.getElementById(`sequencer-pad-8`),
                document.getElementById(`sequencer-pad-16`),
                document.getElementById(`sequencer-pad-24`), 
                document.getElementById(`sequencer-pad-32`)
            ],

            highLightCurrentTrack = (currentTrack: (HTMLElement | null)[]) => {
                
                clear();
                currentTrack.forEach((i: (HTMLElement | null)) => {
                    if (i !== null)
                        i.style.backgroundColor = '#6291a2';
                });
            },

            clear = () => {
                for (let i = 0; i < pads.length + 1; i++)
                {   
                    const pad = document.getElementById(`sequencer-pad-${i}`);
                    if (pad !== null)
                        pad.style.backgroundColor = '#ffffff';
                }
            }
         
        switch (this.counter)
        {
            case 2: highLightCurrentTrack(track2); break;
            case 4: highLightCurrentTrack(track3); break;
            case 6: highLightCurrentTrack(track4); break;
            case 8: highLightCurrentTrack(track5); break;
            case 10: highLightCurrentTrack(track6); break;
            case 12: highLightCurrentTrack(track7); break;
            case 14: highLightCurrentTrack(track8); break;
            case 16:  
                highLightCurrentTrack(track1);
                this.counter = 0; 
            break;
        } 

        this.counter++;
 
        console.log(
            'counter: ', this.counter, 
            'remainder: ', remainder,
            'seconds elapsed: ', Math.floor(Tone.Transport.seconds)
        );
    }
    
 //-----------------------------------------
 
    private currentPart(time: number, note: any): void
    {     
        console.log('playing note: ', note);
        MONOSYNTH.triggerAttackRelease(note, '4n', time);
    }
 
 //-----------------------------------------
 
    private scheduledCallback(data: any): void
    {
        this.mainPart.start();
        console.log('scheduled reset at 0:0:0', data);
    }
 
//-----------------------------------------
 
    private sequenceCallback(): void
    {
        //  if (button_changeToOsc === true) 
        //  {
        //      osc.frequency.value = note;
        //  }
        // if (button_changeToSynth === true) 
        //{
            //  if (secondaryBtn1Toggle === true) 
            ///     amSynthRes.triggerAttackRelease(note, '4n');
            // if (secondaryBtn2Toggle === true) 
            //    fmSynthRes.triggerAttackRelease(note, '4n');
            // if (secondaryBtn3Toggle === true) 
            // MONOSYNTH.triggerAttackRelease(note, '4n');
            // if (secondaryBtn4Toggle === true) 
                //  duoSynthRes.triggerAttackRelease(note, '4n');
        //}
        //  if (button_changeToDrums === true) 
        //  {    
        //      if (secondaryBtn1Toggle === true) kickRes.triggerAttackRelease(note, 0.1); 
        //      if (secondaryBtn2Toggle === true) snareRes.triggerAttack(note);
        //      if (secondaryBtn3Toggle === true) hhRes.triggerAttackRelease('4n');
        //      if (secondaryBtn4Toggle === true) clapRes.triggerAttackRelease('4n');
        //  }
    }

}




// let timeline = new Tone.Timeline(),
//     pattern = new Tone.Pattern((time, note)=>{
//     kick.triggerAttackRelease('C4', '4n'); 
// }, [note, note, note, note]).start(0);