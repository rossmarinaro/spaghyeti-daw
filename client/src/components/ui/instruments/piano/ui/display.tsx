import React from 'react';
import Phaser from 'phaser';
import { Sequencer } from './sequencer/sequencer';
import { SynthManager } from './synthBank';

const VISUALIZATION = { init: false};

export class WaveformDisplay extends Phaser.Scene {
    
    private color: Phaser.Display.Color
    private graphics: Phaser.GameObjects.Graphics | null = null
    private ellipses: Phaser.Geom.Ellipse[] | null = null

    constructor() {
        super('WaveformDisplay');

        this.color = new Phaser.Display.Color();
    }

    preload()
    {

    }

    create()
    {
        this.graphics = this.add.graphics({ lineStyle: { color: 0x00ff1a } });

        let ellipse: any = new Phaser.Geom.Ellipse(this.scale.width / 2, this.scale.height / 2, 0, 0);
    
        this.ellipses = [ellipse];
    
        for(var i = 0; i < 100; i++)
        {
            ellipse = Phaser.Geom.Ellipse.Clone(ellipse);
            ellipse.width += 1.5;
            ellipse.height += 0.7;
    
            Phaser.Geom.Ellipse.CircumferencePoint(ellipse, i / 20 * Phaser.Math.PI2, ellipse);
    
            this.ellipses.push(ellipse);
        }
    }

    update(time: number, delta: number): void
    {
        if (!this.graphics)
            return;

        this.cameras.main.setBackgroundColor(VISUALIZATION.init ? 0x2d007b : 0x000000);

        this.graphics.clear();

        if (this.ellipses)

            for(var i = 0; i < this.ellipses.length; i++)
            {
                const partialX = SynthManager.options.oscillator.partialCount * 0.1 + 1,
                      partialY = SynthManager.options.oscillator.partialCount * 0.1 + 1 / 2;

                this.ellipses[i].width += partialX;
                this.ellipses[i].height += partialY;
        
                if(this.ellipses[i].width > 200)
                {
                    this.ellipses[i].width = 0;
                    this.ellipses[i].height = 0;
                }
        
                this.graphics.strokeEllipseShape(this.ellipses[i]);
            }
    }
}


//----------------------------- display ui


export class Display extends React.Component
{
    private initialized: boolean = false;

    componentDidMount()
    {
        if (this.initialized)
            return;

        this.initialized = true;

     
        const config = {
            type: Phaser.AUTO,
            backgroundColor: '#ccc',
            scale: {
              mode: Phaser.Scale.FIT,
              autoCenter: Phaser.Scale.CENTER_BOTH,
              width: 200,
              height: 150
            },
            parent: 'display',
              dom: {
                  createContainer: true
            },
            scene: [WaveformDisplay],
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
    render()
    {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '50%' }}>
                    <img id="staff" style={{ width: '100%', height: '62%'}} src="assets/Grand_staff.svg" />
                    <Sequencer />
                </div>
                <div id="display" style={{ width: '50%' }}></div>
            </div>
        );
    }
 
}


export default VISUALIZATION;