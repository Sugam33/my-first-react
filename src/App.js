import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Counter from "./components/Counter";
import CarsList from "./components/CarsList";

function App() {
  
  const person = {
    name: "Sugam",
    age: 23,
    married: true,
  };
  const scores = [10, 12, 12, 20];
  const persons = [
    { name: "Sugam Dai", message: "Hello" },
    { name: "Aditi", message: "Hi" },
    { name: "Suyog", message: "Bye" },
  ];
  
  return (
    
    <div className="App">
       <Counter/>
      <CarsList />
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
    
      <FirstComponent name={"Sugam"} message={"how are you?"} />
      {persons.map((p) => (<FirstComponent key = {p.name} name = {p.name} message = {p.message}/>))}
      <p>
        {person.name} is {person.age} years old and is{" "}
        {person.married ? "marrried" : "unmarried"}
      </p>
      {scores.map((a) => (
        <h1 style={{ color: "red" }}>{a}</h1>
      ))}
       
    </div>
  );
}

export default App;
