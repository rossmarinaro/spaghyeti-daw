import { useEffect, useState } from "react";


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

//---------------------- file UI

export function FileManagerUI()
{

    return(
        <form id="file-bar" onSubmit={(event) => readFile(event)}> 
            <input id="file-open" className="form-input" type="file" name="openButton" />
{/*             <input id="file-save" className="form-input" type="submit" value="Save" name="saveButton"/> */}
        </form>
    );
}