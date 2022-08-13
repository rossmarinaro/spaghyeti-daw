import * as Tone from 'tone';
import { MONOSYNTH, POLYSYNTH } from '../../../../synths/main';


export class EventManager {

    public counter: number
    public counter16th: number
    public counter8th: number
    public events: any[] = []
    public mainPart: Tone.Part | any
    public sequenceArray: Tone.Sequence
    public mainLoop: Tone.Loop
    public subLoop16th: Tone.Loop
    public subLoop8th: Tone.Loop

    private keySigValueNum: number
    private currentNote: string = ''
    private currentTime: number = 0

    constructor()
    {
	
        this.keySigValueNum = 1;
        this.counter = 0; 
        this.counter8th = 0;
        this.counter16th = 0;
        this.currentTime = Tone.Transport.getSecondsAtTime(Tone.Transport.position);
        this.sequenceArray = new Tone.Sequence((time, note) => this.sequenceCallback, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], '4n');

    //counters
        this.mainLoop = new Tone.Loop((time: number) => this.startCounter4th(time), '4n');
        this.subLoop8th = new Tone.Loop((time: number) => this.startCounter8th(time), '8n');
        this.subLoop16th = new Tone.Loop((time: number) => this.startCounter16th(time), '16n'); 
      

    ////temp fixed loop
        //let events: any = [[0, 'E2'], ['0:3:2', ' B2'], ['0:5', 'G3']]


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
 
    public currentPart(time: number, note: any): void
    {     

        this.currentNote = note;
        this.currentTime = time;
        console.log('playing note: ', this.currentNote, 'at time: ', this.currentTime);
    
    //play note if defined or sequencer pad enabled
        if (this.currentNote !== '')
            POLYSYNTH.triggerAttackRelease(this.currentNote, '4n', this.currentTime);
    }

 //-----------------------------------------

    private async startCounter4th(ticks: number): Promise<void>
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

            highLightCurrentTrack = (currentTrack: (HTMLElement | null)[]) => {      console.log(Tone.Transport.seconds) 
                
                clear();
                if (currentTrack[0])
                {
                    currentTrack[0].dataset.note = this.currentNote;
                    console.log(currentTrack[0].dataset.note)
                }
                //currentTrack[1].dataset.part
                //currentTrack[2].dataset.part

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
            case 0: 
                highLightCurrentTrack(track1);
                this.counter = 0; 
            break;
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
            //'counter: ', this.counter, 
            //'remainder: ', remainder,
            //'seconds elapsed: ', Tone.Transport.seconds
            //'seconds elapsed: ', Math.floor(Tone.Transport.seconds)
        );
    }

    //------------------------------------------------

    private async startCounter16th(ticks: number): Promise<void>
    { 	
        ticks = Tone.Transport.ticks;

        if (this.counter === 0 || this.counter === 16)
            this.counter16th = 0;


        this.counter16th++;

        console.log(
            //'counter16th: ', this.counter16th,
        );
    }

    private async startCounter8th(ticks: number): Promise<void>
    { 	
        ticks = Tone.Transport.ticks;

        if (this.counter === 0 || this.counter === 16)
            this.counter8th = 0;

        this.counter8th++;

        //console.log('counter8th: ', this.counter8th);
    }
    
 
 //-----------------------------------------
 
    private scheduledCallback(data: any): void
    {
        //console.log('events: ', this.events /* , 'data: ', data */);
        this.currentTime = 0;
        this.mainPart.start();
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

export const eventManager = new EventManager();


// let timeline = new Tone.Timeline(),
//     pattern = new Tone.Pattern((time, note)=>{
//     kick.triggerAttackRelease('C4', '4n'); 
// }, [note, note, note, note]).start(0);