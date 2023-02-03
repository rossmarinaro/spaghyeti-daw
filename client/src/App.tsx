
import './css/App.css';

import { MainMenu } from './components/ui/menus/main';
import { AudioPlayer } from './components/workspace/audioPlayer';

import { PIANO } from './components/ui/instruments/piano/main';
import { TRACK } from './components/workspace/track/main'; 

const currentInstrument = 'Piano';

function App() {
  
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
                  {/* ... */}
            </form>

          </div>

          <div className="container">

            <form id="tools">
                  {/* ... */}
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