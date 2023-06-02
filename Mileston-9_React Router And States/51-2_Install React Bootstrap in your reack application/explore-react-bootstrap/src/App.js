import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <button>HTML Button</button>
      <Button variant='danger'>React Button</Button>
      <br />
      <Spinner animation="grow" variant="danger" />

    </div>
  );
}

export default App;
