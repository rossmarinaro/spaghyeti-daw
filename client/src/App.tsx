
import './css/App.css';

import { PIANO } from './components/instruments/piano/main';
import { TRACK } from './components/workspace/track/main'; 
import { Header } from './components/header';


function App() {
  
  return (

      <div id="App" >

      <Header />

        <div id="main-container">
          
          <div id="piano-rack" className="container" ><PIANO /></div>  
          
          <div id="workspace">   
            <div className="container"><TRACK /></div>
            <div className="container"></div>
            <div className="container"></div>
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