import './App.css';
import {TestAPI} from "./components/TestAPI";
import 'fontsource-roboto';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<TestAPI></TestAPI>*/}
          <Header/>

      </header>
    </div>
  );
}

export default App;
