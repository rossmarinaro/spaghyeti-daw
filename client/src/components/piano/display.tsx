import React from 'react';
import Phaser from 'phaser';
import { Sequencer } from './sequencer';


const VISUALIZATION = { init: false}

export class Display extends React.Component
{
    private initialized: boolean = false;

    componentDidMount()
    {
        if (this.initialized)
            return;

        this.initialized = true;

        class Main extends Phaser.Scene{
            constructor(){
                super('Main');
            }
            preload()
            {

            }
            create()
            {
                        
                
            }
            update(time: number, delta: number): void
            {
                this.cameras.main.setBackgroundColor(VISUALIZATION.init ? 0xff0000 : 0x000000);
            }
        }
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
            scene: [Main],
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