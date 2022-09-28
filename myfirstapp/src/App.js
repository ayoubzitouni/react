import {Button,Form} from 'react-bootstrap'






import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <Form.Label>First Name</Form.Label>
          <Form.Control type='text' placeholder='Your Name'></Form.Control>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type='text'placeholder='Last Name'></Form.Control>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type=''></Form.Control>
        </form>
        
      </header>
    </div>
  );
}

export default App;
