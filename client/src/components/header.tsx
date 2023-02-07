import { InstrumentManager } from './instruments/instrumentManager';


async function readFile(event: any) 
{
    event.preventDefault();
   
   let file = event.target.files[0];

   if (!file) 
     return;
    
    const reader = new FileReader();

    reader.onload = function(e: any) 
    {
        if (!e)
            return;

        return e.target.result;
    };
    
    reader.readAsDataURL(file);
}


//---------------------- header UI


export function Header()
{

    return (
        
        <header id="App-header">

            <form id="file-bar" onSubmit={(event) => readFile(event)}> 

                <input className="form-input" type="button" value={ `Instrument: ${ InstrumentManager.currentInstrument }`} name="current-instrument" />
                <input className="form-input" type="button" value="NO DEVICE" name="current-midi-device" />
                <input className="form-input" type="button" value="SELECT MIDI" name="select-midi-device" />
                <input className="form-input" type="button" value="CLEAR MIDI" name="clear-midi-device" />
                {/* <input id="file-open" className="form-input" type="file" name="openButton" /> */}
                {/*<input id="file-save" className="form-input" type="submit" value="Save" name="saveButton"/> */}

            </form>

        </header>

    );
}