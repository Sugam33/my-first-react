import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  const person = {
    name : "Sugam",
    age : 23,
    married : true
  }
  const scores = [10, 12, 12, 20]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {person.name}
        </a>
      </header>
      <FirstComponent/>
      <p>{person.name} is {person.age} years old and is {person.married ? 'marrried' : 'unmarried'}</p>
      {scores.map((a) => (<h1 style={{color : 'red'}}>{a}</h1>))}
    </div>
  );
}

export default App;
