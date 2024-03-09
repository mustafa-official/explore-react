import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Todo 
      no="1" 
      task="Learn react" 
      isDone={true}></Todo>
      <Todo 
      no="2" 
      task="Learn Vue" 
      isDone={false}></Todo>
      <Todo 
      no="3" 
      task="Learn Angular" 
      isDone={false}></Todo>
      <Device name="Laptop" price="2100"></Device>
      <Device name="Mobile" price="52600"></Device>
      <Device name="Tablet" price="23200"></Device>

      <div className="info">
        <Info></Info>
        <Info></Info>
      </div>
      <Developer></Developer>
      <Student roll="2" grade="A+"></Student>
      <Student roll="3" grade="B-"></Student>
      <Student roll="4" grade="A"></Student>
      <Student></Student>
    </>
  );
}

const Student = ({ roll = 0, grade = 0 }) => {
  return (
    <p>
      Your Roll is: {roll}, You Got: {grade}{" "}
    </p>
  );
};

const Device = (props) => {
  // console.log(props)
  return (
    <p>
      This is: {props.name}, price only {props.price}
    </p>
  );
};

const Info = () => {
  const age = 22;
  const info = {
    name: "omuk",
    boyos: 52,
    color: ["red", "black"],
  };
  return (
    <div>
      <h3>Hello react!! {info.color[1]}</h3>
    </div>
  );
};

const Developer = () => {
  const developerStyle = {
    color: "blueviolet",
    border: "2px solid purple",
    borderRadius: "10px",
    marginTop: "10px",
  };
  return (
    <div style={developerStyle}>
      <h2>Hello future developer</h2>
    </div>
  );
};

export default App;
