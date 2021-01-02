import './App.css';
import {TestAPI} from "./components/TestAPI";
import {TestDatabase} from "./components/TestDatabase";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestAPI></TestAPI>
        <TestDatabase></TestDatabase>

      </header>
    </div>
  );
}

export default App;
