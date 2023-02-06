
import './css/App.css';

import { Midi } from './components/instruments/piano/ui/midi';
import { FileManagerUI } from './components/workspace/file';
import { PIANO } from './components/instruments/piano/main';
import { TRACK } from './components/workspace/track/main'; 


function App() {
  
  return (

    <>
    
      <header className="App-header">
        <FileManagerUI />
        <Midi />
      </header>

      <div className="App" >

      <div id="main-container">
        
        <div id="piano-rack" className="container" ><PIANO /></div>  
        

        <div id="workspace">   

          <div className="container"><TRACK /></div>
          <div className="container"></div>
          <div className="container"></div>


        </div>

      </div>


      </div>
    </>
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