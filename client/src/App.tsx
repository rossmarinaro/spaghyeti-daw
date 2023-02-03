
import './css/App.css';

import { MainMenu } from './components/ui/menus/main';
import { AudioPlayer } from './components/workspace/audioPlayer';

import { PIANO } from './components/ui/instruments/piano/main';
import { TRACK } from './components/workspace/track/main'; 


function App() {

  const currentInstrument = 'Piano';
  
  return (

    <div className="App container" >

      <header className="App-header">
        <MainMenu instrument={currentInstrument}/>
      </header>


      <div id="main-container">
      <div className="container" id="piano-rack">
        <PIANO />
      </div>  
        
    
        <div id="workspace">   

          <div className="container" >
            <AudioPlayer />
            <br></br>
            <form >
              <input id="game-width-bar" className="form-input" type="text" placeholder="width" name="username" minLength={2} maxLength={10} />
              <input id="game-height-bar" className="form-input" type="text" placeholder="height" name="username" minLength={2} maxLength={10} />
              <input className="form-input" id="make-canvas" type="submit" value="Apply" name="submitButton"/>
              <input className="form-input" id="reset-canvas" type="submit" value="Reset" name="resetButton"/>
            </form>
          </div>
          <div className="container">
            <h1>Tools</h1>
            <form id="tools">
              <input className="form-input" id="add-square" type="submit" value="Add Square" name="toolButton"/>
              <input id="sq-pos-x" className="form-input" type="number" placeholder="X" name="square-pos-x" />
              <input id="sq-pos-y" className="form-input" type="number" placeholder="Y" name="square-pos-y" />
            </form>
          </div>
          <div className="container"><TRACK /></div>

        </div>

      </div>


    </div>
  );
}

export default App;


       /* 
       const useCallbackRef = (callback) => {
  const callbackRef = React.useRef(callback);
  React.useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  return callbackRef;
};

export function useFetch({ url, onSuccess }) {
  const [data, setData] = useState({});

  const savedOnSuccess = useCallbackRef(onSuccess);

  useEffect(() => {
    const fun = async () => {
      const getData = await fetch(url),
        parsed = await getData.json();
      savedOnSuccess.current();
      setData(parsed);
    };
    fun();
  }, [url, savedOnSuccess]);

  return data;
}
       
       */