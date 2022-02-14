import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (data.password.length < 5) {
      alert("Provide valid password");
    }
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label style={{ color: "blue", fontFamily: "Tahoma" }}>E-Mail:</label>
          <input type="email" name="email" onChange={changeHandler} /> <br />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={changeHandler}
          ></input>{" "}
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      </center>
    </div>
  );
};

export default App;
