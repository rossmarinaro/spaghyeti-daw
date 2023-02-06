
export class InstrumentManager {
    public static currentInstrument: string = 'Piano';
}

export function InstrumentUI(instrument: { instrument: string })
{
    return (
        <div id="main-menu">
            <div id="current-instrument" className="bordered options">
                <p>Instrument: {`${instrument.instrument}`}</p>
            </div>
        </div>
    );
}