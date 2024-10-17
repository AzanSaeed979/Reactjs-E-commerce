import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const LoginCode = () => {
  const [logincredientals, setLogincredientals] = useState(initialState);
  const [submitdata, setSubmitData] = useState([]);
  const [validation, setValidation] = useState("");

  function handleLoginData(e) {
    const { name, value } = e.target;
    setLogincredientals((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  }

  function handleValidation() {
    const { email, password } = logincredientals;

    if (email === "" && password === "") {
      return <h1><span style={{color : 'white'}}>Please enter your Email && password.</span></h1>
    } else if (email === "") {
      return <h1><span style={{color : 'white'}}>Please enter your Email!</span></h1>
    } else if(password === "") {
      return <h1><span style={{color : 'white'}}>Plz Enter Password</span></h1>
    } else {
      return "";
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationError = handleValidation();

    if (validationError) {
      setValidation(validationError);
    } else {
      setSubmitData((prevData) => [...prevData, logincredientals]);
      setLogincredientals(initialState);
      setValidation("");
    }
  }

  return (
    <>
      <div style={{ background: "blue", width: "40%", margin: "0 auto" }}>
        <center>
          <h1 style={{ color: "white" }}>Login Page</h1>
          <div style={{ marginTop: "10px" }}>
            <label style={{ color: "white" }} htmlFor="email">
              Email:{" "}
            </label>
            <input
              value={logincredientals.email}
              onChange={handleLoginData}
              style={{ borderRadius: "2px" }}
              type="email"
              placeholder="Enter Your Email"
              name="email"
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label style={{ color: "white" }} htmlFor="password">
              Password:{" "}
            </label>
            <input
              value={logincredientals.password}
              onChange={handleLoginData}
              style={{ borderRadius: "2px" }}
              type="password"
              placeholder="Enter Your Password"
              name="password"
            />
          </div>
          {validation && (
            <div style={{ color: "red", marginTop: "10px" }}>{validation}</div>
          )}
          <button
            onClick={handleSubmit}
            style={{
              marginTop: "10px",
              backgroundColor: "black",
              color: "white",
              padding: "6px",
              borderRadius: "4px",
            }}
            type="submit"
          >
            Submit
          </button>
          <div>
            {submitdata && submitdata.length > 0
              ? submitdata.map((data, index) => (
                  <div key={index}>
                    <h1 style={{ color: "white" }}>Email: {data.email}</h1>
                    <h1 style={{ color: "white" }}>
                      Password: {data.password}
                    </h1>
                  </div>
                ))
              : <h1 style={{color : 'white'}}>No Data Available</h1>}
          </div>
        </center>
      </div>
    </>
  );
};

export default LoginCode;
