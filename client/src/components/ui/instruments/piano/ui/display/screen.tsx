import Phaser from 'phaser';
import { SynthManager } from '../synthBank';
import { PianoManager } from '../Keyboard';
import VISUALIZATION from '../display';

export class PianoUIDisplay extends Phaser.Scene {
    
    private graphicsA: Phaser.GameObjects.Graphics | null = null
    private graphicsB: Phaser.GameObjects.Graphics | null = null
    private ellipses: Phaser.Geom.Ellipse[] | null = null
    private rectangles: Phaser.Geom.Rectangle[] | null = null
    private textA: Phaser.GameObjects.Text | null = null

    constructor() {
        super('PianoUIDisplay');
     
    }

    private init(): void
    {
    }

    private preload(): void
    {
    }

    //----------------------- draw elements to screen

    private create(): void
    {

        this.graphicsA = this.add.graphics({ lineStyle: { color: 0x00ff1a, alpha: 0.5 } });
        this.graphicsB = this.add.graphics({ lineStyle: { color: 0xffff00, alpha: 0.5 } });
        
        this.textA = this.add.text(10, 10, '', { font: "1rem Arial"}).setColor('#ffffff').setStroke('#ff0000', 0.7);

        //ellipses

        let ellipse: any = new Phaser.Geom.Ellipse(this.scale.width / 2, this.scale.height / 2, 0, 0),
            rect: any = new Phaser.Geom.Rectangle(this.scale.width / 2 - 20, this.scale.height / 2 - 10, 10, 10);
    

        this.ellipses = [ellipse];
        this.rectangles = [rect];
    
    
        for(var i = 0; i < 100; i++)
        {

            ellipse = Phaser.Geom.Ellipse.Clone(ellipse);
            rect = Phaser.Geom.Ellipse.Clone(rect);

            ellipse.width += 1.5;
            ellipse.height += 0.7;

            rect.width += 0.7;
            rect.height += 0.5;
    
            Phaser.Geom.Ellipse.CircumferencePoint(ellipse, i / 20 * Phaser.Math.PI2, ellipse);
            Phaser.Geom.Ellipse.CircumferencePoint(rect, i / 50 * Phaser.Math.PI2, rect);

            this.ellipses.push(ellipse);
            this.rectangles.push(rect);

        }
       

    }

    //------------------------------ update

    public update(time: number, delta: number): void
    {
        let backgroundColor;

        switch (PianoManager.noteType)
        {
            case 'natural': backgroundColor = 0x2d007b; break;
            case 'flat': backgroundColor = 0x861818; break;
            default: backgroundColor = 0x000000; break;
        }

        this.cameras.main.setBackgroundColor(VISUALIZATION.init ? backgroundColor : 0x000000);

        this.graphicsA?.clear();
        this.graphicsB?.clear();

        if (this.textA)
            this.textA.setText(`NOTES PLAYING: ${PianoManager.notesPlaying}`);

        if (this.ellipses)

            for (let i = 0; i < this.ellipses.length; i++)
            {
                const partialX =  (SynthManager.options.oscillator.partialCount * 0.001) * (PianoManager.noteFreq / 2),
                      partialY = (SynthManager.options.oscillator.partialCount * 0.001) * (PianoManager.noteFreq / 2);

                this.ellipses[i].width += PianoManager.noteFreq > 0 ? partialX : 1.5;
                this.ellipses[i].height += PianoManager.noteFreq > 0 ? partialY : 0.7;
        
                if(this.ellipses[i].width > 200)
                {
                    this.ellipses[i].width = 0;
                    this.ellipses[i].height = 0;
                }
        
                this.graphicsA?.strokeEllipseShape(this.ellipses[i]);
            }

        if (this.rectangles)
        
            for (let i = 0; i < this.rectangles.length; i++)
            {
                const partialX = (SynthManager.options.detune * 0.001) * (PianoManager.noteFreq / 2),
                      partialY = (SynthManager.options.detune * 0.001) * (PianoManager.noteFreq / 2);

                this.rectangles[i].width += PianoManager.noteFreq > 0 ? (Math.random() * 10) * partialX : 1.5;
                this.rectangles[i].height += PianoManager.noteFreq > 0 ? (Math.random() * 10) * partialY : 1.5;
        
                if(this.rectangles[i].width > this.scale.width)
                {
                    this.rectangles[i].width = 0;
                    this.rectangles[i].height = 0;
                }
        
                this.graphicsB?.strokeRectShape(this.rectangles[i]);
            }
    }

    //----------------------------- create main window

    public static createWindow (): void
    {
        const config = {
            type: Phaser.AUTO,
            backgroundColor: '#ccc',
            scale: {
              mode: Phaser.Scale.FIT,
              autoCenter: Phaser.Scale.CENTER_BOTH,
              width: 400,
              height: 300
            },
            parent: 'display',
              dom: {
                createContainer: true
            },
            scene: [PianoUIDisplay],
            //pipeline: [HueRotatePostFX],
            physics: {
              default: 'arcade',
              arcade: {
                debug: false,
                gravity: { y: 300 }
              }
            },
          }
          new Phaser.Game(config);
    }
}

//------------------------- screen ui

export function Screen ()
{
    return (<div id="display" style={{ width: '50%' }}></div>)
}