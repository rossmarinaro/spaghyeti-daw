


export function MainMenu(instrument: {instrument: string})
{
    return (
        <div id="main-menu">
            <div id="current-instrument" className="bordered options">
                <p>Instrument: {`${instrument.instrument}`}</p>
            </div>
        </div>
    );
}