import Phaser from 'phaser';
import { SynthManager } from '../synthBank';
import { PianoManager } from '../keyboard';
import VISUALIZATION from '../display';

export class PianoUIDisplay extends Phaser.Scene {
    
    private graphicsA: Phaser.GameObjects.Graphics | null = null
    private graphicsB: Phaser.GameObjects.Graphics | null = null
    private graphicsC: Phaser.GameObjects.Graphics | null = null
    private ellipses: Phaser.Geom.Ellipse[] | null = null
    private rectangles: Phaser.Geom.Rectangle[] | null = null
    private triangles: Phaser.Geom.Triangle[] | null = null
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
        this.graphicsC = this.add.graphics({ lineStyle: { width: 2, color: 0x17cdee, alpha: 0.5 } });

        
        this.textA = this.add.text(10, 10, '', { font: "1rem Arial"}).setColor('#ffffff').setStroke('#ff0000', 0.7);

        //ellipses

        let ellipse: any = new Phaser.Geom.Ellipse(this.scale.width / 2, this.scale.height / 2, 0, 0),
            rect: any = new Phaser.Geom.Rectangle(this.scale.width / 2 - 20, this.scale.height / 2 - 10, 10, 10),
            triangle: any = Phaser.Geom.Triangle.BuildEquilateral(this.scale.width / 2 - 20, this.scale.height / 2 - 10, 200);
    

        this.ellipses = [ellipse];
        this.rectangles = [rect];
        this.triangles = [triangle];
    
        for(var i = 0; i < 100; i++)
        {

            ellipse = Phaser.Geom.Ellipse.Clone(ellipse);
            rect = Phaser.Geom.Ellipse.Clone(rect);
            triangle = Phaser.Geom.Ellipse.Clone(triangle);

            ellipse.width += 1.5;
            ellipse.height += 0.7;

            rect.width += 0.7;
            rect.height += 0.5;

            triangle.width += 0.7;
            triangle.height += 0.5;
    
            Phaser.Geom.Ellipse.CircumferencePoint(ellipse, i / 20 * Phaser.Math.PI2, ellipse);
            Phaser.Geom.Ellipse.CircumferencePoint(rect, i / 50 * Phaser.Math.PI2, rect);
            Phaser.Geom.Ellipse.CircumferencePoint(triangle, i / 50 * Phaser.Math.PI2, triangle);

            this.ellipses.push(ellipse);
            this.rectangles.push(rect);
            this.triangles.push(triangle);

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
        this.graphicsC?.clear();

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
                //this.graphicsA?.lineStyle(2, 0x0000aa);
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

        if (this.triangles)
        
            for (let i = 0; i < this.triangles.length; i++)
            {
                const partialX = SynthManager.options.envelope.attack * (PianoManager.noteFreq / 2),
                      partialY = SynthManager.options.envelope.attack * (PianoManager.noteFreq / 2);

                this.triangles[i].left += PianoManager.noteFreq > 0 ? partialX : 1.5;
                this.triangles[i].right += PianoManager.noteFreq > 0 ? partialY : 1.5;

                if(this.triangles[i].left > this.scale.width)
                {
                    this.triangles[i].left = 0;
                    this.triangles[i].right = 0;
                }

                this.graphicsC?.strokeTriangleShape(this.triangles[i]);
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



//circumference
/* 
var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);
var angle;

function create ()
{
    var graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

    var ellipse = new Phaser.Geom.Ellipse(400, 300, 250, 150);

    var circumferencePoint  = new Phaser.Geom.Point(275, 300);
    var centerPoint = new Phaser.Geom.Point(400, 300);

    var line = new Phaser.Geom.Line(400, 300, 275, 300);

    var text1  = this.add.text(20, 50, 'Circumference Point:');
    var text2 = this.add.text(20, 75, 'Angle:')

    this.input.on('pointermove', function (pointer) {

        angle = Phaser.Math.Angle.Between(400, 300, pointer.x, pointer.y);

        circumferencePoint = Phaser.Geom.Ellipse.CircumferencePoint(ellipse, angle);

        line.x2 = circumferencePoint.x;
        line.y2 = circumferencePoint.y;

        text1.setText("Circumference Point: (" + circumferencePoint.x +", " + circumferencePoint.y + ")");
        text2.setText("Angle: " + angle);

        graphics.fillPointShape(circumferencePoint, 20);

        draw();
    });

    draw();

    function draw()
    {
        graphics.clear();
        graphics.lineStyle(2, 0x00aaaa);
        graphics.strokeEllipseShape(ellipse);
        graphics.strokeLineShape(line);
        graphics.fillPointShape(centerPoint, 10);
        graphics.fillPointShape(circumferencePoint, 20);
    }
}
*/