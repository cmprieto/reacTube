import logo from './logo.svg';
import './App.css';

import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Youtube} from "./utils/youtube.js"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="primary">Test</Button>
        <Youtube/>
      </header>
    </div>
  );
}

export default App;
