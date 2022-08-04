
// ////////////////////////
// ////// Transport time configuration
// 	///////time
// //     var currentTime = Tone.Transport.time;             	  
// //     var currentTimeSignature = Tone.Transport.timeSignature;
// //  //   let isLooping = Tone.Transport.loop = true;
// //   //  let loopStart = Tone.Transport.loopStart = "4m";
// //   //  let loopEnd = Tone.Transport.loopEnd = "8m";         
// //     let timePosition = Tone.Transport.position;
// //     let timeProgress = Tone.Transport.progress; 
// // //////sampler config
// //     let counter = 0, elapsedTime = 0; 
// //     let keySigValueNum = 1;
// //     let menu_mode = false, menu_key = false, menu_bpm = true;
// //     let button_changeToOsc = false, button_changeToSynth = true, button_changeToDrums = false;


// ////percussive synths
//    // let kick = new Tone.MembraneSynth().toMaster();
//      let kick = new Tone.MembraneSynth({
//         "octaves": -1,
//         "envelope": {
//             "attack": 0.02,
//             "decay": 0.8,
//             "sustain": 0,
//             "release": 4.4
//         }
//     }).toMaster();
//     //
//     let kickRes = new Tone.MembraneSynth({
//         "octaves": -1,
//         "envelope": {
//             "attack": 0.02,
//             "decay": 0.8,
//             "sustain": 0,
//             "release": 4.4
//         }
//     }).toMaster();
//     let clap = new Tone.NoiseSynth({
//         envelope: {
//             release: 1000
//         }                                                        // osc.frequency.rampTo('C'+ this.currentOctave, 10);
//     }).toMaster();
//     //
//     let clapRes = new Tone.NoiseSynth({
//         envelope: {
//             release: 1000
//         }                                                        // osc.frequency.rampTo('C'+ this.currentOctave, 10);
//     }).toMaster(); 
//     let hh = new Tone.MetalSynth({
//         "frequency": 250,
//         "envelope": {
//             "attack": 0.011,
//             "decay": 0.01,
//             "release": 0.2
//         },
//         "harmonicity": 3.1,
//         "modulationIndex": 32,
//         "resonance": 4000,
//         "octaves": 1.5
//     }).toMaster();
//     //
//     let hhRes = new Tone.MetalSynth({
//         "frequency": 250,
//         "envelope": {
//             "attack": 0.011,
//             "decay": 0.01,
//             "release": 0.2
//         },
//         "harmonicity": 3.1,
//         "modulationIndex": 32,
//         "resonance": 4000,
//         "octaves": 1.5
//     }).toMaster();
//     let snare = new Tone.MetalSynth({
//         "frequency": 450,
//         "envelope": {
//             "attack": 0.011,
//             "decay": 0.01,
//             "release": 0.2
//         },
//         "harmonicity": 3.1,
//         "modulationIndex": 12,
//         "resonance": 4000,
//         "octaves": 1.5
//     }).toMaster();
//     //
//     let snareRes = new Tone.MetalSynth({
//         "frequency": 450,
//         "envelope": {
//             "attack": 0.011,
//             "decay": 0.01,
//             "release": 0.2
//         },
//         "harmonicity": 3.1,
//         "modulationIndex": 12,
//         "resonance": 4000,
//         "octaves": 1.5
//     }).toMaster();
    
// //synths
//     let amSynth = new Tone.AMSynth().toMaster();
//     let fmSynth = new Tone.FMSynth().toMaster();
//     let duoSynth = new Tone.DuoSynth().toMaster();
//     let monoSynth = new Tone.MonoSynth({    
//         "volume": -15,
//         "oscillator": {
//             "type": "square"
//         },
//         // "filter": {
//         //     "Q": 2,
//         //     "type": "highpass",
//         //     "rolloff": -24
//         // },
//         "envelope": {
//             "attack": 0.005,
//             "decay": 0.2,
//             "sustain": 0.9,
//             "release": 1
//         }
//     }).toMaster();   
//     //
//     let amSynthRes = new Tone.AMSynth().toMaster();
//     let fmSynthRes = new Tone.FMSynth().toMaster();
//     let duoSynthRes = new Tone.DuoSynth().toMaster();
//     let monoSynthRes = new Tone.MonoSynth({    
//         "volume": -15,
//         "oscillator": {
//             "type": "square"
//         },
//         // "filter": {
//         //     "Q": 2,
//         //     "type": "highpass",
//         //     "rolloff": -24
//         // },
//         "envelope": {
//             "attack": 0.005,
//             "decay": 0.2,
//             "sustain": 0.9,
//             "release": 1
//         }
//     }).toMaster();  
// //oscillators    
//  ////////////////////////////////////////////// oscillators
// let osc1 = new Tone.Oscillator(0, 'sine').toMaster();
// let osc2 = new Tone.Oscillator(0, 'sine').toMaster();
// let osc3 = new Tone.Oscillator(0, 'sine').toMaster();
// let osc4 = new Tone.Oscillator(0, 'sine').toMaster();
// let osc5 = new Tone.Oscillator(0, 'sine').toMaster();
// let osc6 = new Tone.Oscillator(0, 'sine').toMaster();
// let osc7 = new Tone.Oscillator(0, 'sine').toMaster();
// let osc8 = new Tone.Oscillator(0, 'sine').toMaster();
// let osc = new Tone.Oscillator(0, 'sine').toMaster(); 
// ////sequences
// let playerLoop, player = new Tone.Player(playerLoop); 
// let note, triggerTime, currentOctave;
// let inputTime;
// function noteInput(time, note){
//     //console.log(note);
// }
// // let sequenceArray = new Tone.Sequence((time, note)=>{
// //       //console.log(note);
// //       console.log(timeProgress, timePosition, time);
// //    if (button_changeToOsc === true) 
// //    {
// //        osc.frequency.value = note;
// //    }
// //    if (button_changeToSynth === true) 
// //    {
// //         if (secondaryBtn1Toggle === true) 
// //             amSynthRes.triggerAttackRelease(note, '4n');
// //         if (secondaryBtn2Toggle === true) 
// //             fmSynthRes.triggerAttackRelease(note, '4n');
// //         if (secondaryBtn3Toggle === true) 
// //             monoSynthRes.triggerAttackRelease(note, '4n');
// //         if (secondaryBtn4Toggle === true) 
// //             duoSynthRes.triggerAttackRelease(note, '4n');
// //    }
// //    if (button_changeToDrums === true) 
// //    {    
// //        if (secondaryBtn1Toggle === true) kickRes.triggerAttackRelease(note, 0.1); 
// //        if (secondaryBtn2Toggle === true) snareRes.triggerAttack(note);
// //        if (secondaryBtn3Toggle === true) hhRes.triggerAttackRelease('4n');
// //        if (secondaryBtn4Toggle === true) clapRes.triggerAttackRelease('4n');
// //    }
// // }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], '4n'); 
// //  let mainLoop = new Tone.Loop(startCounter, '4n'); //start counter
// // // let timeline = new Tone.Timeline();
// // ////////////////////////////////////////////////////////////////////////////////////////////
// // // let pattern = new Tone.Pattern((time, note)=>{
// // //     kick.triggerAttackRelease('C4', '4n'); 
// // // }, [note, note, note, note]).start(0);	

// // function currentPart(time, note){
// //   //  monoSynth.triggerAttackRelease(note, '4n', time);
// // }

// // let part = new Tone.Part(currentPart, [[0, 'E2'], ['0:5', 'G3'], ['0:3:2', ' B2']]).start(0);
// // //let part = new Tone.Part(currentPart, ['C4']);

					

// // let part1 = new Tone.Part((time, value)=>{
// //     monoSynth.triggerAttackRelease(value.note, '4n', time, note.velocity);
// // }, [{'time': counter, 'note': note, 'velocity': 0.9}, 
// // {'time': counter, 'note': note, 'velocity': 0.5}, 
// // {'time': '0:3:2', 'note': 'C4', 'velocity': 0.5}]).start(0);

// // part1.loop = true;
// // part1.loopStart = 0;
// // part1.loopEnd = '4m';


// ////tmp
//     let gainNode = Tone.context.createGain();
//     let env = new Tone.Envelope().connect(gainNode.gain);
//     let filter = new Tone.Filter(200, 'highpass');
//     let filterEnvelope = new Tone.FrequencyEnvelope().connect(filter);
//     //oscillators and effects
//     let ampEnv = new Tone.AmplitudeEnvelope().toMaster();
//    // let osc = new Tone.Oscillator('C4', 'sine').toMaster().connect(ampEnv, filter, filterEnvelope);
//         //  ampEnv.triggerAttackRelease('4t');
//     // let output = new Tone.Instrument().chain(osc, ampEnv, Tone.Master)
//     // output.triggerAttack('C4');

// let myPolySynth = new Tone.PolySynth(6, Tone.MonoSynth, {
//     oscillator: {
//         type: 'sawtooth'
//     }
// }).toMaster();

// //myPolySynth.triggerAttack(['C5', 'E5', 'A5']).detune.rampTo(-1200, 0.4);

// //setTimeout(()=> myPolySynth.set('detune', -1200, 500), 1000);

     
// //    let newPoly = new Tone.PolySynth(400, Tone.MonoSynth, {
// //     'oscillator': {
// //         'type': 'square8'
// //     },
// //     'envelope': {
// //         'attack': 0.05,
// //         'decay': 0.3,
// //         'sustain': 0.4,
// //         'release': 0.8
// //     },
// //     'filterEnvelope': {
// //         'attack': 0.001,
// //         'decay': 0.7,
// //         'sustain': 0.1,
// //         'release': 0.8,
// //         'baseFrequency': 300,
// //         'octaves': 4
// //     }
// //    }).toMaster();
   
   
// ////piano config
//     // let fmSynth = new Tone.FMSynth().toMaster();
//     // let duoSynth = new Tone.DuoSynth().toMaster();
//     let synth = new Tone.Synth({
//         "oscillator" : {
//             "type" : "sine",
//             "harmonicity" : 0.5,
//             "modulationType" : "sine"
//         },
//         "envelope" : {
//             "attackCurve" : "exponential",
//             "attack" : 0.05,
//             "decay" : 0.2,
//             "sustain" : 0.2,
//             "release" : 1.5,
//         },
//         "portamento" : 0.05
//     }).toMaster();


       
//         let time = Tone.Transport.time;
//         Tone.Transport.loopStart = '0'
//         Tone.Transport.loopEnd = '4:0:0';
//         Tone.Transport.loop = true;
//        Tone.Transport.start();
//         // Tone.Transport.scheduleRepeat((time)=>{
//         //     console.log(`this is the ${time}`);
//         // }, "8n");
//         Tone.Transport.schedule((time)=>{
//            // console.log(`this is also the ${time}, ${timePosition}`);
//         }, "0:0:0"); 
//         // let oscillators = [];
//         //         let bassFreq = 32;
                
//         //         for (var i = 0; i < 8; i++){
// 		// 			oscillators.push(new Tone.Oscillator({
// 		// 				"frequency" : bassFreq * i,
// 		// 				"type" : "sawtooth10",
// 		// 				"volume" : -Infinity,
// 		// 				"detune" : Math.random() * 30 - 15,
// 		// 			}).toMaster());
//         //         }	  

//         //         console.log(/*bpm: ${currentBPM}, */ `time: ${currentTime}, time signature: ${currentTimeSignature}`); 

        



//     //------------------------------------------------------------



    


// //////sampler ui class
// 		class Sampler extends Phaser.Scene {
//             constructor() {
//               super({key: "Sampler", physics: {default: 'matter', matter: {debug: true}, arcade: {debug: true} }});
//             }
  
//       preload() {
  
//           this.load.scenePlugin({
//               key: 'rexuiplugin',
//               url: 'js/plugins/slider.js',
//               sceneKey: 'rexUI'
//           });
//           this.load.plugin('rexdragrotateplugin', 'js/plugins/round-slider.js', true)
            
//           //////////////////////////sampler
//           this.load.image('pause_play', 'assets/sampler/icons/pause_play.png');
//           this.load.image('stop', 'assets/sampler/icons/stop.png');
//           this.load.image('record', 'assets/sampler/icons/record.png');
//           this.load.image('sampler_no_btn', 'assets/sampler/sampler_no_btn.png');
//           this.load.image('sampler_ui_pad', 'assets/sampler/inputs/pads/1.png');
//           this.load.image('knob_primary', 'assets/sampler/inputs/knobs/primary/1.png');
//           this.load.image('knob_secondary', 'assets/sampler/inputs/knobs/secondary/1.png');
//           this.load.image('button_primary', 'assets/sampler/inputs/buttons/primary/1.png');
//           this.load.image('button_secondary', 'assets/sampler/inputs/buttons/secondary/1.png');
//           this.load.image('XY_pad', 'assets/sampler/inputs/xy_pad.png');
//       }
  
//       ////create
//           create()
//               {  
//                   //instruments running
//                   samplerRunning = true; pianoRunning = false;
//                   //time transport
//                   Tone.Transport.bpm.value = 130; 
//                   elapsedTime = Tone.Transport.seconds; 
//                   currentTime = Tone.Transport.getSecondsAtTime(timePosition); 
//                   time = Tone.Transport.time;
//                   //	this.input.on('pointerdown', ()=>{console.log( time, currentTime,timePosition, timeProgress);});
//                   console.log(Tone.Transport.ticks)
  
//                   this.timeTxt = this.add.text(500, 300, timePosition, {font: '30px Arial'});
//   //////////////sampler///////////////////////////////////////////////////
//               this.samplerUI = this.add.sprite(300, 550, 'sampler_no_btn');
//               let inputs = this.physics.add.group();
//               this.pointer = this.input.activePointer;
//           //////text
//               //bpm 
//                   this.bpmText = this.add.text(340, 100, `BPM: `, {fontSize: '30px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//                   this.bpmTextValue = this.add.text(340, 190, ``, {fontSize: '30px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//               //key
//                   this.keyText = this.add.text(340, 100, `Key: `, {fontSize: '30px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//                   keySigValueNum = 1, this.keySigTextEval;
//                   this.keyTextValue = this.add.text(340, 190, `C`, {fontSize: '30px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90).setDepth(8);
//               //mode
//                   this.modeText = this.add.text(340, 100, `Mode: `, {fontSize: '30px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//                   this.modeTextValueNum = 1; this.modeTextEval;
//                   this.modeTextValue = this.add.text(340, 200, `IONIAN`, { fontSize: '20px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90).setDepth(8);
  
//       ///// X Y pad
//               this.XYPad = inputs.create(150, 230, 'XY_pad').setInteractive();
//               this.XYPad.body.setAllowGravity(false).setImmovable(true);
//               this.input.setDraggable(this.XYPad).on('drag', ()=>{
                  
//               });
//           ////high pass filter
//               this.highPassFilter = new Tone.Filter({
//                   type: 'highpass',
//                   Q: 12
//               }).toMaster();
//               this.values = [['C5'], ['E5'], ['G5'], ['B5'], ['C5']];
//               for (let i = 0; i < this.values.length; i++)
//               {
//                   let filterFreq = this.values[i];
//               //	this.highPassFilter.frequency.setValueAtTime(filterFreq, 0); 
//                   console.log(filterFreq);
//               }
              
//       this.currentLoop = false;
//       //// primary buttons
//               //record
//                   this.primaryBtn1 = inputs.get(400, 100, 'button_primary').setInteractive();
//                   this.primaryBtn1.body.setAllowGravity(false).setImmovable(true);
//                   this.primaryBtn1.on('pointerdown', ()=>{	
//                       this.currentLoop = true;
//                       primaryBtn1Toggle === true ? primaryBtn1Toggle = false : primaryBtn1Toggle = true;
//                       primaryBtn2Toggle = false; //primaryBtn3Toggle = false;
//                       if (primaryBtn1Toggle === true)
//                       {	
//                           Tone.Transport.start();
//                           sequenceArray.start(0);
//                           mainLoop.start(0);
//                       }
//                   });
//                   this.recordIcon = this.add.image(400, 100, 'record').setAngle(90);
//               //stop
//                   this.primaryBtn2 = inputs.get(400, 230, 'button_primary').setInteractive();
//                   this.primaryBtn2.body.setAllowGravity(false).setImmovable(true);
//                   this.primaryBtn2.on('pointerdown', ()=>{
//                       primaryBtn2Toggle === true ? primaryBtn2Toggle = false : primaryBtn2Toggle = true;
//                       primaryBtn1Toggle = false; primaryBtn3Toggle = false;
//                       if (primaryBtn2Toggle === true)
//                       {
//                           Tone.Transport.stop(); mainLoop.stop(0);
//                           counter = 0; secondaryBtn1Bool = false; secondaryBtn2Bool = false; secondaryBtn3Bool = false; secondaryBtn4Bool = true;
//                       }
//                       this.currentLoop = false;
//                   });
//                   this.stopIcon = this.add.image(400, 230, 'stop').setAngle(90);
//               //play
//                   this.primaryBtn3 = inputs.get(400, 360, 'button_primary').setInteractive();
//                   this.primaryBtn3TopLayer = this.add.image(400, 360, 'button_primary').setAlpha(0).setTint(0xff4c4c);
//                   this.primaryBtn3.body.setAllowGravity(false).setImmovable(true);
//                   this.primaryBtn3.on('pointerdown', ()=>{
//                       //toggle on/off	
//                       primaryBtn3Toggle === true ? primaryBtn3Toggle = false : primaryBtn3Toggle = true;
//                       primaryBtn1Toggle = false; primaryBtn2Toggle = false;	
//                       if (primaryBtn3Toggle === true)
//                       {
//                           Tone.Transport.start(0);
//                           mainLoop.start(0); part.start(0);
//                       }
//                       else{
//                            Tone.Transport.stop(); //mainLoop.pause();
//                            mainLoop.stop(0);
//                       }
//                       this.currentLoop === true ? this.currentLoop = false : this.currentLoop = true;
//                   });
//                   this.pausePlayIcon = this.add.image(400, 360, 'pause_play').setAngle(90);
//               // //play tween (blinking)
//               this.bpmBlinkTime = 60000 / Tone.Transport.bpm.value;
//                   this.bpmBlinkingTween = this.tweens.add({
//                       targets: this.primaryBtn3TopLayer, alpha: 1, duration: this.bpmBlinkTime,  repeat: -1, ease: 'Linear'
//                   });
  
  
//       //// intrument type text
//                   this.instrumentText = this.add.text(310, 280, ``, {fontSize: '20px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);	
//       //// change key
//                   this.currentKeySig;
//                   this.changeKeySigBtn = inputs.get(460, 360, 'button_secondary').setInteractive().on('pointerdown', ()=>{
//                       this.changeKeySigBtn.setTint(0xff0000);
//                       menu_key = true; menu_mode = false; menu_bpm = false;
//                   }).on('pointerup', ()=>{this.changeKeySigBtn.clearTint()}).on('pointerout', ()=>{this.changeKeySigBtn.clearTint()});
//                   this.changeKeySigBtn.body.setAllowGravity(false).setImmovable(true);
//                   this.add.text(470, 350, `KEY`, {fontSize: '15px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//       //// change mode
//                   this.changeModeBtn = inputs.get(500, 360, 'button_secondary').setInteractive().on('pointerdown', ()=>{
//                       this.changeModeBtn.setTint(0xff0000);
//                       menu_key = false; menu_mode = true; menu_bpm = false;
//                   }).on('pointerup', ()=>{this.changeModeBtn.clearTint()}).on('pointerout', ()=>{this.changeModeBtn.clearTint()});
//                   this.changeModeBtn.body.setAllowGravity(false).setImmovable(true);
//                   this.add.text(510, 350, `MODE`, {fontSize: '15px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//       //// change bpm
//                   this.changeBpmBtn = inputs.get(540, 360, 'button_secondary').setInteractive().on('pointerdown', ()=>{
//                       this.changeBpmBtn.setTint(0xff0000);
//                       menu_key = false; menu_mode = false; menu_bpm = true;
//                   }).on('pointerup', ()=>{this.changeBpmBtn.clearTint()}).on('pointerout', ()=>{this.changeBpmBtn.clearTint()});
//                   this.changeBpmBtn.body.setAllowGravity(false).setImmovable(true);
//                   this.add.text(550, 350, `BPM`, {fontSize: '15px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//       //// change to synths
//                   this.changeToSynthBtn = inputs.get(540, 450, 'button_secondary').setInteractive().on('pointerdown', ()=>{
//                       this.changeToSynthBtn.setTint(0xff0000);
//                       button_changeToSynth = true; button_changeToOsc = false; button_changeToDrums = false;
//                   }).on('pointerup', ()=>{this.changeToSynthBtn.clearTint()}).on('pointerout', ()=>{this.changeToSynthBtn.clearTint()});
//                   this.changeToSynthBtn.body.setAllowGravity(false).setImmovable(true);
//                   this.add.text(550, 420, `SYNTHS`, {fontSize: '12px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//       //// change to oscillators
//                   this.changeToOscBtn = inputs.get(460, 450, 'button_secondary').setInteractive().on('pointerdown', ()=>{
//                       this.changeToOscBtn.setTint(0xff0000);
//                       button_changeToSynth = false; button_changeToOsc = true; button_changeToDrums = false;
//                       // if (button_changeToOsc === true)
//                       // {
//                       // 	osc.start(); osc1.start(); osc2.start(); osc3.start(); osc4.start(); osc5.start(); osc6.start(); osc7.start(); osc8.start();
//                       // 	osc.unmute = true; osc1.unmute = true; osc2.unmute = true; osc3.unmute = true; osc4.unmute = true; osc5.unmute = true;
//                       // 	osc6.unmute = true; osc7.unmute = true; osc8.unmute = true; 
//                       // }
//                       // else{
//                       // 	osc.stop(); osc1.stop(); osc2.stop(); osc3.stop(); osc4.stop(); osc5.stop(); osc6.stop(); osc7.stop(); osc8.stop();
//                       // 	osc.mute = true; osc1.mute = true; osc2.mute = true; osc3.mute = true; osc4.mute = true; osc5.mute = true;
//                       // 	osc6.mute = true; osc7.mute = true; osc8.mute = true; 
//                       // }
//                   }).on('pointerup', ()=>{this.changeToOscBtn.clearTint()}).on('pointerout', ()=>{this.changeToOscBtn.clearTint()});
//                   this.changeToOscBtn.body.setAllowGravity(false).setImmovable(true);
//                   this.add.text(470, 430, `OSC`, {fontSize: '15px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//       //// change to drums
//                   this.changeToDrumsBtn = inputs.get(500, 450, 'button_secondary').setInteractive().on('pointerdown', ()=>{
//                       this.changeToDrumsBtn.setTint(0xff0000);
//                       button_changeToSynth = false; button_changeToOsc = false; button_changeToDrums = true;
//                   }).on('pointerup', ()=>{this.changeToDrumsBtn.clearTint()}).on('pointerout', ()=>{this.changeToDrumsBtn.clearTint();});
//                   this.changeToDrumsBtn.body.setAllowGravity(false).setImmovable(true);
//                   this.add.text(510, 430, `DRUMS`, {fontSize: '12px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//       //// change octave
//                   currentOctave = '2';
      
//       // //// modes
//       // this.currentMode = ['', '', '', '', '', '', '', ''];
  
  
//   ////////// secondary buttons
//                   secondaryBtn1 = inputs.get(370, 520, 'button_secondary').setInteractive();
//                   secondaryBtn1.body.setAllowGravity(false).setImmovable(true);
//                   //
//                   secondaryBtn2 = inputs.get(370, 670, 'button_secondary').setInteractive();
//                   secondaryBtn2.body.setAllowGravity(false).setImmovable(true);
//                   //
//                   secondaryBtn3 = inputs.get(370, 820, 'button_secondary').setInteractive();
//                   secondaryBtn3.body.setAllowGravity(false).setImmovable(true);
//                   //
//                   secondaryBtn4 = inputs.get(370, 970, 'button_secondary').setInteractive();
//                   secondaryBtn4.body.setAllowGravity(false).setImmovable(true);
//                   //
  
//           ////set to osc by default
//                   this.secondaryBtn1 = this.add.image(370, 520, 'button_secondary').setAlpha(0.3).setInteractive().on('pointerdown', ()=>{	
//                       secondaryBtn1Toggle === true ? secondaryBtn1Toggle = false : secondaryBtn1Toggle = true;
//                       secondaryBtn2Toggle = false; secondaryBtn3Toggle = false; secondaryBtn4Toggle = false;
//                   });
//                   this.option1 = this.add.text(370, 510, ``, {fontSize: '12px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//                   this.secondaryBtn2 = this.add.image(370, 670, 'button_secondary').setAlpha(0.3).setInteractive().on('pointerdown', ()=>{	
//                       secondaryBtn2Toggle === true ? secondaryBtn2Toggle = false : secondaryBtn2Toggle = true;
//                       secondaryBtn1Toggle = false; secondaryBtn3Toggle = false; secondaryBtn4Toggle = false;
//                   });
//                   this.option2 = this.add.text(370, 650, ``, {fontSize: '12px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//                   this.secondaryBtn3 = this.add.image(370, 820, 'button_secondary').setAlpha(0.3).setInteractive().on('pointerdown', ()=>{	
//                       secondaryBtn3Toggle === true ? secondaryBtn3Toggle = false : secondaryBtn3Toggle = true;
//                       secondaryBtn1Toggle = false; secondaryBtn2Toggle = false; secondaryBtn4Toggle = false;
//                   });
//                   this.option3 = this.add.text(370, 810, ``, {fontSize: '12px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
//                   this.secondaryBtn4 = this.add.image(370, 970, 'button_secondary').setAlpha(0.3).setInteractive().on('pointerdown', ()=>{	
//                       secondaryBtn4Toggle === true ? secondaryBtn4Toggle = false : secondaryBtn4Toggle = true;
//                       secondaryBtn1Toggle = false; secondaryBtn2Toggle = false; secondaryBtn3Toggle = false
//                   });
//                   this.option4 = this.add.text(370, 950, ``, {fontSize: '12px',fontFamily: 'Digitizer', fill: '#000000'}).setAngle(90);
  
//   ///////// primary knobs / change volume and options (bpm, key, mode)
//               primaryKnob1 = this.matter.add.sprite(500, 100, 'knob_primary').setCircle(50).setInteractive().setAngle(90).setStatic(true);
//   //////// volume placeholder
//               primaryKnob2 = this.matter.add.sprite(500, 200, 'knob_primary').setCircle(50).setInteractive().setAngle(90).setStatic(true);
//       //		menuParameterPotentiometer(this, 500, 200, 50);	
//   ////// secondary parameter changing knobs	
//               this.secondaryKnob1 = inputs.create(460, 540, 'knob_secondary').setInteractive();
//               this.secondaryKnob1.body.setAllowGravity(false).setImmovable(true);
//               this.add.text(530, 510, `Freq.`, {fontSize: '18px',fontFamily: 'Digitizer', fill: '#ffffff'}).setAngle(90);
//               this.secondaryKnob2 = inputs.create(460, 690, 'knob_secondary').setInteractive();
//               this.secondaryKnob2.body.setAllowGravity(false).setImmovable(true);
//               this.add.text(530, 670, `Env.`, {fontSize: '18px',fontFamily: 'Digitizer', fill: '#ffffff'}).setAngle(90);
//               this.secondaryKnob3 = inputs.create(460, 840, 'knob_secondary').setInteractive();
//               this.secondaryKnob3.body.setAllowGravity(false).setImmovable(true);
//               this.secondaryKnob4 = inputs.create(460, 990, 'knob_secondary').setInteractive();
//               this.secondaryKnob4.body.setAllowGravity(false).setImmovable(true);	
//   ///////////pads
//               this.samplerUi_pad_1 = inputs.create(280, 520, 'sampler_ui_pad').setInteractive();
//               this.samplerUi_pad_1.body.setAllowGravity(false).setImmovable(true);
//               this.samplerUi_pad_2 = inputs.create(280, 670, 'sampler_ui_pad').setInteractive();
//               this.samplerUi_pad_2.body.setAllowGravity(false).setImmovable(true);
//               this.samplerUi_pad_3 = inputs.create(280, 820, 'sampler_ui_pad').setInteractive();
//               this.samplerUi_pad_3.body.setAllowGravity(false).setImmovable(true);
//               this.samplerUi_pad_4 = inputs.create(280, 970, 'sampler_ui_pad').setInteractive();
//               this.samplerUi_pad_4.body.setAllowGravity(false).setImmovable(true);
//               this.samplerUi_pad_5 = inputs.create(140, 520, 'sampler_ui_pad').setInteractive();
//               this.samplerUi_pad_5.body.setAllowGravity(false).setImmovable(true);
//               this.samplerUi_pad_6 = inputs.create(140, 670, 'sampler_ui_pad').setInteractive();
//               this.samplerUi_pad_6.body.setAllowGravity(false).setImmovable(true);
//               this.samplerUi_pad_7 = inputs.create(140, 820, 'sampler_ui_pad').setInteractive();
//               this.samplerUi_pad_7.body.setAllowGravity(false).setImmovable(true);
//               this.samplerUi_pad_8 = inputs.create(140, 970, 'sampler_ui_pad').setInteractive();
//               this.samplerUi_pad_8.body.setAllowGravity(false).setImmovable(true);
//   /////////////////////////////////////////////////////////////////////////////////////////////
//               this.cameras.main.centerOn(this.samplerUI.x, this.samplerUI.y).rotation = 4.72;
  
//   ////////////pad triggers
//                   this.pad1On = false;
//                   this.pad2On = false;
//                   this.pad3On = false;
//                   this.pad4On = false;
//                   this.pad5On = false;
//                   this.pad6On = false;
//                   this.pad7On = false;
//                   this.pad8On = false;
  
//       /// time button is pressed
//       this.buttonPressedTime = this.time.addEvent({
//           delay: 8000, repeat: -1
//       });
//       this.buttonPressedTime.paused = false;
//       //1									
//                   secondaryBtn1Toggle = true; 
//                   this.samplerUi_pad_1.on('pointerdown', ()=>{  this.buttonPressedTime.paused = false;
//                   this.samplerUi_pad_1.setTint(0xff0000);
//               ///add to sequence array
//               if (primaryBtn1Toggle === true) 
//               {
//                   if (this.currentKeySig === 'C') note = sequenceArray.add(counter, 'C' + currentOctave); 
//                   if (this.currentKeySig === 'Db') note = sequenceArray.add(counter, 'Db4' + currentOctave);
//                   if (this.currentKeySig === 'D') note = sequenceArray.add(counter, 'D4' + currentOctave);
//                   if (this.currentKeySig === 'E') note = sequenceArray.add(counter,'Eb4' + currentOctave);
//                   if (this.currentKeySig === 'Eb') note = sequenceArray.add(counter, 'E4' + currentOctave);
//                   if (this.currentKeySig === 'E') note = sequenceArray.add(counter, 'E4' + currentOctave);
//                   if (this.currentKeySig === 'F') note = sequenceArray.add(counter, 'F4' + currentOctave);
//                   if (this.currentKeySig === 'Gb') note = sequenceArray.add(counter, 'Gb4' + currentOctave);
//                   if (this.currentKeySig === 'G') note = sequenceArray.add(counter, 'G4' + currentOctave);
//                   if (this.currentKeySig === 'Ab') note = sequenceArray.add(counter, 'Ab4' + currentOctave);
//                   if (this.currentKeySig === 'A') note = sequenceArray.add(counter, 'A4' + currentOctave);
//                   if (this.currentKeySig === 'Bb') note = sequenceArray.add(counter, 'Bb4' + currentOctave);
//                   if (this.currentKeySig === 'B') note = sequenceArray.add(counter, 'B4' + currentOctave);
//               }
//                   this.pad1On = true;	
//                   if (this.pad1On === true)
//                       {
//                           switch (this.currentKeySig)
//                           {
//                               case 'C' :
//                               if (button_changeToOsc === true)  osc1.frequency.value = 'C'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave, '4n');console.log(Tone.Transport.getSecondsAtTime());
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C' + currentOctave, 0.1);
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                               break;
//                               case 'Db' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'Db'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Db'+ currentOctave, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Db'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Db'+ currentOctave, '4n');
//                               }
//                               break;
//                               case 'D' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'D'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('D'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('D'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('D'+ currentOctave, '4n');
//                               }
//                               break;
//                               case 'Eb' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'Eb'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                               }
//                               break;
//                               case 'E' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'E'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('E'+ currentOctave, '4n');
//                               }
//                               break;
//                               case 'F' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'F'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                               }	
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('F'+ currentOctave, '4n');
//                               }			
//                               break;
//                               case 'Gb' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'Gb'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Gb'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                               }
//                               break;
//                               case 'G' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'G'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('G'+ currentOctave, '4n');
//                               }
//                               break;
//                               case 'Ab' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'Ab'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                               }
//                               break;
//                               case 'A' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'A'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('A'+ currentOctave, '4n');
//                               }
//                               break;
//                               case 'Bb' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'Bb'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                               }	
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }		
//                               break;
//                               case 'B' :
//                               if (button_changeToOsc === true) note = osc.frequency.value = 'B'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('B'+ currentOctave, '4n');
//                               }
//                               break;
//                           }
//                       }
//               }).on('pointerup', ()=>{
//                   this.samplerUi_pad_1.clearTint();
//                   this.pad1On = false; 
//   //	osc.frequency.rampTo(0, 10);
//               }).on('pointerout', ()=>{
//                   this.samplerUi_pad_1.clearTint();
//                   this.pad1On = false;
//               });
//       //2
//               this.samplerUi_pad_2.on('pointerdown', ()=>{
//                   this.samplerUi_pad_2.setTint(0xff0000);
//                   if (this.currentKeySig === 'C') note = sequenceArray.add(counter, 'D' + currentOctave);
//                   if (this.currentKeySig === 'Db') note = sequenceArray.add(counter, 'Eb4' + currentOctave);
//                   if (this.currentKeySig === 'D') note = sequenceArray.add(counter, 'E4' + currentOctave);
//                   if (this.currentKeySig === 'E') note = sequenceArray.add(counter,'G#4' + currentOctave);
//                   if (this.currentKeySig === 'Eb') note = sequenceArray.add(counter, 'Gb4' + currentOctave);
//                   if (this.currentKeySig === 'E') note = sequenceArray.add(counter, 'E4' + currentOctave);
//                   if (this.currentKeySig === 'F') note = sequenceArray.add(counter, 'F4' + currentOctave);
//                   if (this.currentKeySig === 'Gb') note = sequenceArray.add(counter, 'Gb4' + currentOctave);
//                   if (this.currentKeySig === 'G') note = sequenceArray.add(counter, 'G4' + currentOctave);
//                   if (this.currentKeySig === 'Ab') note = sequenceArray.add(counter, 'Ab4' + currentOctave);
//                   if (this.currentKeySig === 'A') note = sequenceArray.add(counter, 'A4' + currentOctave);
//                   if (this.currentKeySig === 'Bb') note = sequenceArray.add(counter, 'Bb4' + currentOctave);
//                   if (this.currentKeySig === 'B') note = sequenceArray.add(counter, 'B4' + currentOctave);
//                   this.pad2On = true;
//                   //2
//                   if (this.pad2On === true)
//                       {
//                           switch(this.currentKeySig)
//                           {
//                               case 'C' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'Db'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Db'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Db'+ currentOctave, '4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'D'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('D'+ currentOctave, '4n');
//                                   }
//                               }
//                               break;
//                               case 'Db' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'D'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('D'+ currentOctave, '4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'Eb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                   }
//                               }
//                               break;
//                               case 'D' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'Eb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Eb'+ currentOctave, '4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'E'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   }
//                               }
//                               break;
//                               case 'Eb' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'E'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'F'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   }
//                               }
//                               break;
//                               case 'E' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'F'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'Gb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Gb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   }
//                               }
//                               break;
//                               case 'F' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'Gb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Gb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'G'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   }
//                               }
//                               break;
//                               case 'Gb' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'G'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'Ab'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   }
//                               }
//                               break;
//                               case 'G' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'Ab'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'A'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                               }
//                               break;
//                               case 'Ab' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'A'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'Bb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   }
//                               }
//                               break;
//                               case 'A' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'Bb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'B'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   }
//                               }
//                               break;
//                               case 'Bb' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'B'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease( '4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'C'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'B' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'C'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc2.frequency.value = 'C#'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                           }	
//                       }
//               }).on('pointerup', ()=>{
//                   this.samplerUi_pad_2.clearTint();
//                   this.pad2On = false; this.currentLoop = false;
//               }).on('pointerout', ()=>{
//                   this.samplerUi_pad_2.clearTint();
//                   this.pad2On = false; this.currentLoop = false;
//               });
//       //3
//               this.samplerUi_pad_3.on('pointerdown', ()=>{
//                    this.samplerUi_pad_3.setTint(0xff0000);
//                   this.pad3On = true;
//                   if (this.currentKeySig === 'C') note = sequenceArray.add(counter, 'E' + currentOctave); 
//                   //3
//                   if (this.pad3On === true)
//                       {
//                           switch(this.currentKeySig)
//                               {
//                               case 'C' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'E'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'Eb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Db' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'F'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'E'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'D' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'F#'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F#'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F#'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F#'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F#'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'F'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Eb' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'G'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'Gb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Gb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'E' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'G#'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G#'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G#'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G#'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G#'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'G'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'F' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'A'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'Ab'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Gb' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'Bb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'A'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'G' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'B'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'Bb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Ab' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'C'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'B'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'A' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'C#'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'C'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Bb' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'D'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'Db'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Db'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'B' : 
//                               if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN' || this.modeTextEval === 'MIXOLYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'D#'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D#'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc3.frequency.value = 'D'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                           }
//                       }
//                }).on('pointerup', ()=>{
//                   this.samplerUi_pad_3.clearTint();
//                   this.pad3On = false;
//               }).on('pointerout', ()=>{
//                    this.samplerUi_pad_3.clearTint();
//                    this.pad3On = false;
//                });
//       //4
//               this.samplerUi_pad_4.on('pointerdown', ()=>{
//                   this.samplerUi_pad_4.setTint(0xff0000);
//                   this.pad4On = true;
//                   if (this.currentKeySig === 'C') note = sequenceArray.add(counter, 'F' + currentOctave); 
//                   //4
//                   if (this.pad4On === true)
//                       {
//                           switch (this.currentKeySig)
//                           {
//                               case 'C' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'F#'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F#'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F#'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F#'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F#'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'F'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Db' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc44.frequency.value = 'G'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'Gb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Gb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'D' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'G#'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G#'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G#'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G#'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G#'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'G'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Eb' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'A'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'Ab'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'E' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'A#'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A#'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A#'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A#'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A#'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'A'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'F' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'B'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'Bb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Gb' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'C'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'Cb'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Cb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Cb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Cb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Cb'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Cb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'G' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'C#'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C#'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C#'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C#'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C#'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'C'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Ab' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'D'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'Db'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Db'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'A' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'D#'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D#'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D#'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D#'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D#'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'D'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Bb' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'E'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'Eb'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'B' : 
//                               if(this.modeTextEval === 'LYDIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'F'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc4.frequency.value = 'E'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                           }
//                       }
//               }).on('pointerup', ()=>{
//                   this.samplerUi_pad_4.clearTint();
//                   this.pad4On = false;
//               }).on('pointerout', ()=>{
//                   this.samplerUi_pad_4.clearTint();
//                   this.pad4On = false;
//               });
//       //5
//                this.samplerUi_pad_5.on('pointerdown', ()=>{
//                   this.samplerUi_pad_5.setTint(0xff0000);
//                   this.pad5On = true;
//                   if (this.currentKeySig === 'C') note = sequenceArray.add(counter, 'G' + currentOctave); 
//                   //5
//                   if (this.pad5On === true)
//                       {
//                           switch(this.currentKeySig)
//                           {
//                               case 'C' : 
//                                   if(this.modeTextEval === 'LOCRIAN')
//                                   {
//                                       if (button_changeToOsc === true) note = osc5.frequency.value = 'Gb'+ currentOctave; console.log(note);
//                                       if (button_changeToSynth === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                           if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                           if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                           if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Gb'+ currentOctave, '4n');
//                                       }
//                                       if (button_changeToDrums === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Gb'+ currentOctave, 0.1); 
//                                           if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                           if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                           if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                       }
//                                   }
//                                   else{
//                                       if (button_changeToOsc === true) note = osc5.frequency.value = 'G'+ currentOctave; console.log(note);
//                                       if (button_changeToSynth === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                           if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                           if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                           if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       }
//                                       if (button_changeToDrums === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                           if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                           if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                           if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                       }
//                                   }
//                               break;
//                               case 'Db' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'G'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'Ab'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'D' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'Ab'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'A'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Eb' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'A'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'Bb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'E' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'Bb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'B'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'F' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'B'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'C'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Gb' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'C'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'Db'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Db'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'G' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'Db'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Db'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'D'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Ab' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'D'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'Eb'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'A' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'Eb'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'E'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'Bb' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'E'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'F'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                               case 'B' : 
//                               if(this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'F'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc5.frequency.value = 'F#'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F#'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               break;
//                           }
//                       }
//               });
//               this.samplerUi_pad_5.on('pointerup', ()=>{
//                   this.samplerUi_pad_5.clearTint();
//                   this.pad5On = false;
//               }).on('pointerout', ()=>{
//                   this.samplerUi_pad_5.clearTint();
//                   this.pad5On = false;
//               }); 
//       //6
//               this.samplerUi_pad_6.on('pointerdown', ()=>{
//                  this.samplerUi_pad_6.setTint(0xff0000);
//                   this.pad6On = true;
//                   if (this.currentKeySig === 'C') note = sequenceArray.add(counter, 'A' + currentOctave); 
//                   //6
//                   if (this.pad6On === true)
//                   {
//                       switch (this.currentKeySig)
//                       {
//                           case 'C' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'Ab'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'A'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'Db' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'A'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'Bb'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'D' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc.frequency.value = 'Bb'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'B'+ currentOctave; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'Eb' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'B'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'C'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'E' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'C'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'C#'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'F' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'Db'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Db'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'D'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'Gb' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'D'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'Eb'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'G' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'Eb'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'E'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'Ab' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'E'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'F'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'A' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'F'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'F#'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F#'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F#'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F#'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'Bb' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'Gb'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Gb'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'G'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           case 'B' : 
//                               if(this.modeTextEval === 'PHRYGIAN' || this.modeTextEval === 'AEOLIAN' || this.modeTextEval === 'LOCRIAN')
//                               {
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'G'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                               else{
//                                   if (button_changeToOsc === true) note = osc6.frequency.value = 'Ab'+ currentOctave * 1.25; console.log(note);
//                                   if (button_changeToSynth === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                       if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                   }
//                                   if (button_changeToDrums === true) 
//                                   {   
//                                       if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                       if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                       if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                       if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                   }
//                               }
//                           break;
//                           }
//                       }
//               }).on('pointerup', ()=>{
//                    this.samplerUi_pad_6.clearTint();
//                    this.pad6On = false;
//               }).on('pointerout', ()=>{
//                    this.samplerUi_pad_6.clearTint();
//                    this.pad6On = false;
//               }); 
//       //7
//               this.samplerUi_pad_7.on('pointerdown', ()=>{
//               this.samplerUi_pad_7.setTint(0xff0000);
//                   this.pad7On = true;
//                   if (this.currentKeySig === 'C') note = sequenceArray.add(counter, 'B' + currentOctave); 
//                   //7
//                   if (this.pad7On === true)
//                   {
//                       switch (this.currentKeySig)
//                       {
//                       case 'C' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'B'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                           if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                           if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                           if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave, '4n');
//                                       }
//                                       if (button_changeToDrums === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                           if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                           if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                           if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                       }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'Bb'+ currentOctave; console.log(note);
//                               if (button_changeToSynth === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                           if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                           if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                           if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave, '4n');
//                                       }
//                                       if (button_changeToDrums === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                           if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                           if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                           if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                       }
//                           }
//                       break;
//                       case 'Db' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'C'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                           if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                           if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                           if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                       }
//                                       if (button_changeToDrums === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                           if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                           if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                           if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                       }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'B'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                           if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                           if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                           if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                       }
//                                       if (button_changeToDrums === true) 
//                                       {   
//                                           if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                           if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                           if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                           if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                       }
//                           }
//                       break;
//                       case 'D' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'C#'+ currentOctave * 1.25;  console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C#'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C#'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'B'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                       break;
//                       case 'Eb' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'D'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'Db'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Db'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                       break;
//                       case 'E' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'Eb'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'D'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                       break;
//                       case 'F' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'E'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'Eb'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                       break;
//                       case 'Gb' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'F'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'E'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                       break;
//                       case 'G' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'Gb'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Gb'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'F'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                       break;
//                       case 'Ab' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'G'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'Gb'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Gb'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                       break;
//                       case 'A' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'Ab'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'G'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                       break;
//                       case 'Bb' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'A'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'Ab'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                       break;
//                       case 'B' : 
//                           if(this.modeTextEval === 'IONIAN' || this.modeTextEval === 'LYDIAN')
//                           {
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'Bb'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                           else{
//                               if (button_changeToOsc === true) note = osc7.frequency.value = 'A'+ currentOctave * 1.25; console.log(note);
//                               if (button_changeToSynth === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                   if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                               }
//                               if (button_changeToDrums === true) 
//                               {   
//                                   if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                   if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                   if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                   if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                               }
//                           }
//                       break;
//                       }
//                   }
//               }).on('pointerup', ()=>{
//                    this.samplerUi_pad_7.clearTint();
//                    this.pad7On = false;
//               }).on('pointerout', ()=>{
//                    this.samplerUi_pad_7.clearTint();	
//                    this.pad7On = false;
//                });
//       //8(octave)
//               this.samplerUi_pad_8.on('pointerdown', ()=>{
//                   this.samplerUi_pad_8.setTint(0xff0000);
//                   this.pad8On = true;	
//                   if (this.currentKeySig === 'C') note = sequenceArray.add(counter, 'C' + currentOctave * 1.25); 
//                                   //8
//                                   if (this.pad8On === true)
//                                   {
//                                       switch (this.currentKeySig)
//                                       {
//                                           case 'C' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'C'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('C'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('C'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'Db' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'Db'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Db'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Db'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'D' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'D'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('D'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('D'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'Eb' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'Eb'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Eb'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Eb'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'E' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'E'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('E'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('E'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'F' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'F'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('F'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('F'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'Gb' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'Gb'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Gb'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Gb'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'G' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'G'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('G'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('G'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'Ab' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'Ab'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Ab'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Ab'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'A' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'A'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('A'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('A'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'Bb' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'Bb'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('Bb'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('Bb'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                           case 'B' :
//                                           if (button_changeToOsc === true) note = osc8.frequency.value = 'B'+ currentOctave * 1.25;
//                                           if (button_changeToSynth === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = amSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn2Toggle === true) note = fmSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn3Toggle === true) note = monoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                               if (secondaryBtn4Toggle === true) note = duoSynth.triggerAttackRelease('B'+ currentOctave * 1.25, '4n');
//                                           }
//                                           if (button_changeToDrums === true) 
//                                           {   
//                                               if (secondaryBtn1Toggle === true) note = kick.triggerAttackRelease('B'+ currentOctave, 0.1); 
//                                               if (secondaryBtn2Toggle === true) note = snare.triggerAttackRelease('4n');
//                                               if (secondaryBtn3Toggle === true) note = hh.triggerAttackRelease('4n');
//                                               if (secondaryBtn4Toggle === true) note = clap.triggerAttackRelease('4n');
//                                           }
//                                           break;
//                                       }
//                                   }
//               }).on('pointerup', ()=>{
//                   this.samplerUi_pad_8.clearTint();
//                   this.pad8On = false;
//               }).on('pointerout', ()=>{
//                   this.samplerUi_pad_8.clearTint();
//                   this.pad8On = false;
//               });
  
  
  
//                   // var kick = new Tone.Player({
//                   // 	url : "./audio/loop/kick.[mp3|ogg]",
//                   // 	loop : true
//                   // }).toMaster().sync().start(0);
  
//                   // var snare = new Tone.Player({
//                   // 	url : "./audio/loop/snare.[mp3|ogg]",
//                   // 	loop : true
//                   // }).toMaster().sync().start("2n");
  
//                   // var hh2 = new Tone.Player({
//                   // 	url : "./audio/loop/hh.[mp3|ogg]",
//                   // 	loop : true
//                   // }).toMaster().sync().start("3:3", "4n"); //start with an offset
  
//                   //bind the transport
                  
              
//                   //Tremolo - an amplitude modulation effect
//                   // var tremolo = new Tone.Tremolo({
//                   // 	"frequency" : 0.6,
//                   // 	"depth" : 0.7
//                   // }).toMaster().start();
  
  
//                   // let congaPart = new Tone.Sequence(function(time, pitch){
//                   // 	conga.triggerAttack(pitch, time, Math.random() * 0.5 + 0.5);
//                   // }, ["G3", "C4", "C4", "C4"], "4n").start(0);
  
//                   // let bellPart = new Tone.Sequence(function(time, freq){
//                   // 	hh.frequency.setValueAtTime(freq, time, Math.random()*0.5 + 0.5);
//                   // 	hh.triggerAttack(time);
//                   // }, [[300, null, 200], 
//                   // 	[null, 200, 200], 
//                   // 	[null, 200, null], 
//                   // 	[200, null, 200]
//                   // ], "4n").start(0);
  
//           //  congaPart.loop = true;
//           //  congaPart.loopEnd = "1m";
  
//           //   var x = 400, y = 300; 
//           //   createPotentiometer(this, x, y, 100);
//           //   createPotentiometer(this, x, y, 150); 
//           //   createPotentiometer(this, x, y, 200);
  
  
  
//           }//////////////////////////////////////////////////////
//           ////////////////////////////////////////////////////////////////////////////////////
//        update(time, delta)
//           {
  
//                   this.timeTxt.setText(timePosition).setDepth(4); 
  
//                       //// menu screen led emulator
//                           if (menu_bpm === true)
//                           {
//                               this.bpmText.setVisible(true); 
//                               this.bpmTextValue.setVisible(true); 
//                               this.modeText.setVisible(false); 
//                               this.modeTextValue.setVisible(false); 
//                               this.keyText.setVisible(false);
//                               this.keyTextValue.setVisible(false);
//                           }
//                           if (menu_mode === true)
//                           {
//                               this.bpmText.setVisible(false);
//                               this.bpmTextValue.setVisible(false); 
//                                this.modeText.setVisible(true); 
//                                this.modeTextValue.setVisible(true); 
//                                this.keyText.setVisible(false);
//                                this.keyTextValue.setVisible(false);
//                           }
//                           if (menu_key === true)
//                           {
//                               this.bpmText.setVisible(false); 
//                               this.bpmTextValue.setVisible(false); 
//                               this.modeText.setVisible(false); 
//                               this.modeTextValue.setVisible(false); 
//                               this.keyText.setVisible(true);
//                               this.keyTextValue.setVisible(true);
//                           }
  
//                   ////current key signature
//                           if (this.keySigTextEval === 'C') this.currentKeySig = 'C';
//                           if (this.keySigTextEval === 'Db') this.currentKeySig = 'Db'; 
//                           if (this.keySigTextEval === 'D') this.currentKeySig = 'D'; 
//                           if (this.keySigTextEval === 'Eb') this.currentKeySig = 'Eb'; 
//                           if (this.keySigTextEval === 'E') this.currentKeySig = 'E'; 
//                           if (this.keySigTextEval === 'F') this.currentKeySig = 'F'; 
//                           if (this.keySigTextEval === 'Gb') this.currentKeySig = 'Gb'; 
//                           if (this.keySigTextEval === 'G') this.currentKeySig = 'G'; 
//                           if (this.keySigTextEval === 'Ab') this.currentKeySig = 'Ab'; 
//                           if (this.keySigTextEval === 'A') this.currentKeySig = 'A'; 
//                           if (this.keySigTextEval === 'Bb') this.currentKeySig = 'Bb'; 
//                           if (this.keySigTextEval === 'B') this.currentKeySig = 'B';
//                   ////key signatures			
//                           if (keySigBoolCW === true) keySigValueNum++;
//                           if (keySigBoolCCW === true) keySigValueNum--;
//                           if (keySigValueNum <= 10) this.keySigTextEval = 'C';
//                           if (keySigValueNum === 15) this.keySigTextEval = 'Db'; 
//                           if (keySigValueNum === 20) this.keySigTextEval = 'D'; 
//                           if (keySigValueNum === 25) this.keySigTextEval = 'Eb'; 
//                           if (keySigValueNum === 30) this.keySigTextEval = 'E'; 
//                           if (keySigValueNum === 35) this.keySigTextEval = 'F'; 
//                           if (keySigValueNum === 40) this.keySigTextEval = 'Gb'; 
//                           if (keySigValueNum === 50) this.keySigTextEval = 'G'; 
//                           if (keySigValueNum === 55) this.keySigTextEval = 'Ab'; 
//                           if (keySigValueNum === 60) this.keySigTextEval = 'A'; 
//                           if (keySigValueNum === 65) this.keySigTextEval = 'Bb'; 
//                           if (keySigValueNum === 70) this.keySigTextEval = 'B'; 
//                           if (keySigValueNum >= 75) keySigValueNum = 1;
//                           this.keyTextValue.setText(this.keySigTextEval);
//                   ///modes
//                           if (modeTextBoolCW === true) this.modeTextValueNum++;
//                           if (modeTextBoolCCW === true) this.modeTextValueNum--;
//                           if (this.modeTextValueNum < 1) this.modeTextValueNum = 1;
//                           if (this.modeTextValueNum <= 10) this.modeTextEval = 'IONIAN';
//                           if (this.modeTextValueNum === 15) this.modeTextEval = 'DORIAN';
//                           if (this.modeTextValueNum === 20) this.modeTextEval = 'PHRYGIAN';
//                           if (this.modeTextValueNum === 25) this.modeTextEval = 'LYDIAN';
//                           if (this.modeTextValueNum === 30) this.modeTextEval = 'MIXOLYDIAN';
//                           if (this.modeTextValueNum === 35) this.modeTextEval = 'AEOLIAN';
//                           if (this.modeTextValueNum === 40) this.modeTextEval = 'LOCRIAN';
//                           // if (this.modeTextValueNum === 50) this.modeTextEval = 'HARMONIC MINOR';
//                           // if (this.modeTextValueNum === 55) this.modeTextEval = 'MAJOR PENTATONIC';
//                           // if (this.modeTextValueNum === 60) this.modeTextEval = 'MINOR PENTATONIC';
//                           if (this.modeTextValueNum >= 71) this.modeTextValueNum = 1;
//                           this.modeTextValue.setText(this.modeTextEval);
  
  
//                   ////bpm update
//                           this.bpmTextValue.setText(Math.floor(Tone.Transport.bpm.value));
//                   ////update bpm blinker
//                           this.bpmBlinkTime;
//                           this.bpmBlinkingTween;
//                           if (primaryBtn1Toggle === true || primaryBtn2Toggle === true) this.primaryBtn3TopLayer.setVisible(false);
//                           else this.primaryBtn3TopLayer.setVisible(true);
  
//                   ////change sounds
//                           if (button_changeToOsc === true) 
//                               {	
//                                   this.instrumentText.setText('Osc');						
//                                   this.option1.setText('SINE');
//                                   this.option2.setText('SQUARE');
//                                   this.option3.setText('SAW');
//                                   this.option4.setText('TRIANGLE');
//                               }
//                           if (button_changeToSynth === true)
//                           {
//                                   this.instrumentText.setText('Synths');	
//                                   this.option1.setText('AM');
//                                   this.option2.setText('FM');
//                                   this.option3.setText('MONO');
//                                   this.option4.setText('DUAL');
//                               }
//                           if (button_changeToDrums === true)
//                               {
//                                   this.instrumentText.setText('Drums');	
//                                   this.option1.setText('KICK');
//                                   this.option2.setText('SNARE');
//                                   this.option3.setText('HH');
//                                   this.option4.setText('CLAP');
//                               }	
                              
//                   //primary button toggle record, stop, pause/play
//                               primaryBtn1Toggle === true ? this.primaryBtn1.setTint(0xff0000) : this.primaryBtn1.clearTint();
//                               primaryBtn2Toggle === true ? this.primaryBtn2.setTint(0xff0000) : this.primaryBtn2.clearTint();	
//                               primaryBtn3Toggle === true ? this.primaryBtn3.setTint(0xff0000) : this.primaryBtn3.clearTint();
  
//                   //secondary button toggle
//                               secondaryBtn1Toggle === true ? this.secondaryBtn1.setTint(0xffff00) : this.secondaryBtn1.clearTint();
//                               secondaryBtn2Toggle === true ? this.secondaryBtn2.setTint(0xffff00) : this.secondaryBtn2.clearTint();
//                               secondaryBtn3Toggle === true ? this.secondaryBtn3.setTint(0xffff00) : this.secondaryBtn3.clearTint();
//                               secondaryBtn4Toggle === true ? this.secondaryBtn4.setTint(0xffff00) : this.secondaryBtn4.clearTint();
              
                   
//                       //color sequence
//                           if (counter === 16) {counter = 0; secondaryBtn1Bool = true; }
//                           else if (counter === 12) {secondaryBtn4Bool = true; secondaryBtn3Bool = false;} 
//                           else if (counter === 8) {secondaryBtn3Bool = true; secondaryBtn2Bool = false;}
//                           else if (counter === 4) {secondaryBtn2Bool = true;  secondaryBtn1Bool = false;}
//                           else if (counter === 1) secondaryBtn1Bool = true;
//                           if (counter === 0) secondaryBtn1Bool = true;
              
//                       ////secondary button booleans
//                           if (secondaryBtn1Bool === true) 
//                           {
//                               secondaryBtn1.setTint(0xff0000);
//                               secondaryBtn2.clearTint();
//                               secondaryBtn3.clearTint();
//                               secondaryBtn4.clearTint();
//                               secondaryBtn2Bool = false;
//                               secondaryBtn3Bool = false;
//                               secondaryBtn4Bool = false;
//                            }
//                            if (secondaryBtn2Bool === true) 
//                            {
//                                secondaryBtn2.setTint(0xff0000);
//                                secondaryBtn1.clearTint();
//                                secondaryBtn3.clearTint();
//                                secondaryBtn4.clearTint();
//                                secondaryBtn1Bool = false;
//                                secondaryBtn3Bool = false;
//                                secondaryBtn4Bool = false;
//                             }
//                             if (secondaryBtn3Bool === true) 
//                             {
//                                 secondaryBtn3.setTint(0xff0000);
//                                 secondaryBtn1.clearTint();
//                                 secondaryBtn2.clearTint();
//                                 secondaryBtn4.clearTint();
//                                 secondaryBtn2Bool = false;
//                                 secondaryBtn1Bool = false;
//                                 secondaryBtn4Bool = false;
//                              }
//                              if (secondaryBtn4Bool === true) 
//                              {
//                                  secondaryBtn4.setTint(0xff0000);
//                                  secondaryBtn1.clearTint();
//                                  secondaryBtn2.clearTint();
//                                  secondaryBtn3.clearTint();
//                                  secondaryBtn2Bool = false;
//                                  secondaryBtn3Bool = false;
//                                  secondaryBtn1Bool = false;
//                               }
  
  
//                   ////change oscillator types 
//                       switch(button_changeToOsc === true)	
//                       {
//                           case secondaryBtn1Toggle === true : 
//                           osc1.type = 'sine6'; 
//                           osc2.type = 'sine6';
//                           osc3.type = 'sine6';
//                           osc4.type = 'sine6';
//                           osc5.type = 'sine6';
//                           osc6.type = 'sine6';
//                           osc7.type = 'sine6';
//                           osc8.type = 'sine6';
//                           break;
//                           case secondaryBtn2Toggle === true : 
//                           osc1.type = 'square6';
//                           osc2.type = 'square6';
//                           osc3.type = 'square6';
//                           osc4.type = 'square6';
//                           osc5.type = 'square6';
//                           osc6.type = 'square6';
//                           osc7.type = 'square6';
//                           osc8.type = 'square6';
//                           break;
//                           case secondaryBtn3Toggle === true : 
//                           osc1.type = 'sawtooth6';
//                           osc2.type = 'sawtooth6';
//                           osc3.type = 'sawtooth6';
//                           osc4.type = 'sawtooth6';
//                           osc5.type = 'sawtooth6';
//                           osc6.type = 'sawtooth6';
//                           osc7.type = 'sawtooth6';
//                           osc8.type = 'sawtooth6';
//                           break;
//                           case secondaryBtn4Toggle === true : 
//                           osc1.type = 'triangle6';
//                           osc2.type = 'triangle6';
//                           osc3.type = 'triangle6';
//                           osc4.type = 'triangle6';
//                           osc5.type = 'triangle6';
//                           osc6.type = 'triangle6';
//                           osc7.type = 'triangle6';
//                           osc8.type = 'triangle6';
//                           break;
//                       } 
  
              
//                   //pads
//                       if (this.pad1On === true || this.pad2On === true || this.pad3On === true || this.pad4On === true
//                           || this.pad5On === true || this.pad6On === true || this.pad7On === true || this.pad8On){
//                           this.time.delayedCall(10, ()=>{
//                               if (button_changeToDrums === true)
//                               {
//                                   this.pad1On = false; this.pad2On = false; this.pad3On = false;
//                                   this.pad4On = false; this.pad5On = false; this.pad6On = false;
//                                   this.pad7On = false; this.pad8On = false;
//                               }
//                           });
//                       }
               
//                        if (this.pad1On === false)
//                        {
//                           osc1.frequency.value = 0;
//                        }
//                        if (this.pad2On === false)
//                        {
//                           osc2.frequency.value = 0;
//                        }
//                        if (this.pad3On === false)
//                        {
//                           osc3.frequency.value = 0;
//                        }
//                        if (this.pad4On === false)
//                        {
//                           osc4.frequency.value = 0;
//                        }
//                        if (this.pad5On === false)
//                        {
//                           osc5.frequency.value = 0;
//                        }
//                        if (this.pad6On === false)
//                        {
//                           osc6.frequency.value = 0;
//                        }
//                        if (this.pad7On === false)
//                        {
//                           osc7.frequency.value = 0;
//                        }
//                        if (this.pad8On === false)
//                        {
//                           osc8.frequency.value = 0;
//                        }
//            }
//           ////
//       }
//       ////end class
//   ////////////////////////////////////////////////////////////
  
  
//   //volume potentiometer
//   // var createPotentiometer = function (scene, x, y, radius) { 
//   //     var config = { x: x, y: y, maxRadius: radius, minRadius: radius - 100 }; 
//   //     var lineWidth = 3; 
//   //     var x = config.maxRadius + lineWidth, y = x, width = x * 2, height = width; 
//   //     var buttonGraphics = scene.add.graphics().lineStyle(lineWidth, 0xffffff, 1).strokeCircle(x, y, config.minRadius + lineWidth).strokeCircle(x, y, config.maxRadius).lineBetween(x + config.minRadius, y, x + config.maxRadius, y);
//   //      var button = scene.add.renderTexture(config.x, config.y, width, height).draw(buttonGraphics).setOrigin(0.5) .setTint(0xff0000);
//   //       buttonGraphics.destroy(); 
//   //       scene.plugins.get('rexdragrotateplugin').add(scene, config).on('drag', function (dragRotate) {
//   // 		//   button.rotation += dragRotate.deltaRotation;
//   // 		    primaryKnob2.rotation += dragRotate.deltaRotation;
//   //            var color = (dragRotate.cw) ? 0xff0000 : 0xffff00; primaryKnob2.setTint(color);
//   //          }).on('dragend', ()=>{
//   // 			primaryKnob2.clearTint();
//   //          });
//   //               return button;
//   //     }
  
  
  
//   //menu parameter potentiometer
// //   var menuParameterPotentiometer = function (scene, x, y, radius) { 
// //       this.config = { 
// //           x: x, y: y, maxRadius: radius, minRadius: radius - 100 
// //       }; 
// //       var lineWidth = 3; 
// //       var x = config.maxRadius + lineWidth, y = x, width = x * 2, height = width; 
// //       var buttonGraphics = scene.add.graphics().lineStyle(lineWidth, 0xffffff, 1).strokeCircle(x, y, config.minRadius + lineWidth).strokeCircle(x, y, config.maxRadius);
// //       var potentiometerLine = buttonGraphics.lineBetween(x + config.minRadius, y, x + config.maxRadius, y);
// //        var button = scene.add.renderTexture(config.x, config.y, width, height).draw(buttonGraphics).setOrigin(0.5) .setTint(0xff0000);
// //         buttonGraphics.destroy(); 
// //         scene.plugins.get('rexdragrotateplugin').add(scene, this.config).on('drag', function (dragRotate) {
// //           this.value = Tone.Transport.bpm.value;
// //             this.tint = (dragRotate.cw) ? 0xff0000 : 0xffff00; primaryKnob2.setTint(this.tint);
// //            if (dragRotate.cw === true )
// //            {
// //                primaryKnob2.rotation += dragRotate.deltaRotation / 2;
// //                if (primaryKnob2.angle <= 90)
// //                {
// //                   primaryKnob2.rotation += 0;
// //                }
// //               //bpm
// //                    if (menu_bpm === true)
// //                    {
// //                       Tone.Transport.bpm.rampTo(this.value + 1, 0.1);
// //                       if (Tone.Transport.bpm.value >= 200) Tone.Transport.bpm.value = 0;
// //                    }
// //                //key sig
// //                   if (menu_key === true)
// //                   {
// //                       keySigBoolCW = true;
// //                       keySigBoolCCW = false;
// //                   }
// //                //mode
// //                   if (menu_mode === true)
// //                   {
// //                       modeTextBoolCW = true;
// //                       modeTextBoolCCW = false;
// //                   }
// //             }
// //            else{
// //                   primaryKnob2.rotation += dragRotate.deltaRotation / 2;
// //               //bpm
// //                   if (menu_bpm === true)
// //                   {
// //                   Tone.Transport.bpm.rampTo(this.value - 1, 0.1);
// //                   if (Tone.Transport.bpm.value <= 0) Tone.Transport.bpm.value = 200;
// //                   }
// //               //key sig
// //                   if (menu_key === true)
// //                   {
// //                       keySigBoolCCW = true;
// //                       keySigBoolCW = false;
// //                   }
// //               //mode
// //                   if (menu_mode === true)
// //                   {
// //                       modeTextBoolCW = false;
// //                       modeTextBoolCCW = true;
// //                   }
// //             }
// //            }).on('dragend', ()=>{
// //               primaryKnob2.clearTint();
// //               if (menu_key === true)
// //               {
// //                   keySigBoolCW = false;
// //                   keySigBoolCCW = false;
// //               }
// //               if (menu_key === true)
// //               {
// //                   keySigBoolCCW = false;
// //                   keySigBoolCW = false;
// //               }
// //               if (menu_mode === true)
// //               {
// //                   modeTextBoolCW = false;
// //                   modeTextBoolCCW = false;
// //               }
// //            });
// //       } 
//   ////////////////////////////////////////////////////////	
  
  


   