import React from "react";
//import App from "./App";

const Test = (props) => {
  return (
    <div>
      <center>
        <h3> Functional Test Component</h3>
        <h3>
          Name: {props.name} and Age: {props.age}
        </h3>
      </center>
    </div>
  );
};

export default Test;
