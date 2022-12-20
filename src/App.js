import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Counter from "./components/Counter";
import CarsList from "./components/CarsList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from "./components/productsList";
import { useState } from "react";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import styled from "styled-components";
// import { menuListCSS } from "react-select/dist/declarations/src/components/Menu";



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

  const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  padding: 30px 10px;
  min-height: 100vh;
  border-right: 1px solid #cccccc;
  `;


const LISTS = [
    {
      name: "carslist",
      title: "Cars List",
     // component: (key) => <CarsList key={key} />,
      path: "/cars",
    },
    {
      name: "productslist",
      title: "Products List",
     // component: (key) => <ProductList key={key} />,
      path: "/productlist",
    },
    {
      name: "counter",
      title: "Counter",
     // component: (key) => <Counter key={key} />,
      path: "/counter",
    },
    {
      name: "incomelist",
      title: "Income List",
    //  component: (key) => <h1 key={key}>Income List namuna </h1>,
      path: "/income",
    },
  ];

  const [selectedList, setSelectedList] = useState("")
  return (
  
   <div className="App">
    
    {/* <button className= {selectedList === 'carslist' ? 'selected' : ''} onClick={() => setSelectedList("carslist")}>Cars List</button>&nbsp;
    <button className={selectedList === 'productslist' ? 'selected' : ''} onClick={() => setSelectedList("productslist")}>Products List</button> */}
      <ToastContainer />
      <div className={"container"}>
    <div className= {"sidebar"}>
       {LISTS.map((list) => (
        <NavLink
        key = {list.name}
        className = {"link"}
        to = {list.path}
        >
          {list.title}
          </NavLink>
      ))}
    </div>

        <div style={{width : "100%"}}>
      <Routes>
        <Route path = "/" element = {<CarsList />} />
        <Route path = "cars" element = {<CarsList />} />
        <Route path = "productlist" element = {<ProductList />} />
        <Route path = "counter" element = {<Counter />} />
        <Route path = "*" element = {<div><h1>404 NOT FOUND</h1></div>} />
      </Routes>
      </div>
      {/* {selectedList === "carslist" && <CarsList/>}
      {selectedList === "productslist" && <ProductList/>}
    */}
      {/* <header className="App-header">
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
      </header> */}
    
      {/* <FirstComponent name={"Sugam"} message={"how are you?"} />
      {persons.map((p) => (<FirstComponent key = {p.name} name = {p.name} message = {p.message}/>))}
      <p>
        {person.name} is {person.age} years old and is{" "}
        {person.married ? "marrried" : "unmarried"}
      </p>
      {scores.map((a) => (
        <h1 style={{ color: "red" }}>{a}</h1>
      ))} */}
       </div>
    </div>
      
  );
}

export default App;
