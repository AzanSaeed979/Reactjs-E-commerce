import React, { useState } from "react";
import styles from "./SignUpCode.module.css";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const SignUpCode = () => {
  const [signdata, setSignData] = useState(initialState);
  const [submitdata, setSubmitData] = useState([]);
  const [validation, setValidation] = useState(null);
  const [del, setDel] = useState([]);

  function handleSignData(e) {
    const { name, value } = e.target;

    
    setSignData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleValidation() {
    const { username, email, password } = signdata;
    if (!username && !email && !password) {
      return (
        <h1 style={{ color: "white" }}>
          Please enter Username, Email, and Password.
        </h1>
      );
    } else if (!username && !email) {
      return (
        <h1 style={{ color: "white" }}>Please enter Username and Email.</h1>
      );
    } else if (!email && !password) {
      return (
        <h1 style={{ color: "white" }}>Please enter Email and Password.</h1>
      );
    } else if (!username) {
      return <h1 style={{ color: "white" }}>Please enter UserName.</h1>;
    } else if (!email) {
      return <h1 style={{ color: "white" }}>Please enter Email.</h1>;
    } else if (!password) {
      return <h1 style={{ color: "white" }}>Please enter Password.</h1>;
    }
  
    return null;
  }

  function handleDelete(id) {
    setSubmitData((prevData) => prevData.filter((_, index) => index !== id));
  }
  

  function handleSubmit(e) {
    e.preventDefault();

    const validError = handleValidation();
    if (validError) {
      setValidation(validError);
    } else {
      setValidation(null); 
      setSubmitData((prevData) => [...prevData, signdata]);

      setSignData(initialState);
    }
  }

  return (
    <center>
      <div className={styles.wrapper}>
        <div className={styles.header_title}>
          <h1>SignUp Page</h1>
        </div>

        {/* Show validation messages */}
        <div>
          {validation && <div className={styles.valida}>{validation}</div>}
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className={styles.label}>
              UserName:
            </label>
            <input
              className={styles.input}
              name="username"
              type="text"
              placeholder="Enter Your UserName..."
              value={signdata.username}
              onChange={handleSignData}
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              className={styles.input}
              name="email"
              type="email"
              placeholder="Enter Your Email..."
              value={signdata.email}
              onChange={handleSignData}
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="password">
              Password:
            </label>
            <input
              className={styles.input}
              name="password"
              type="password"
              placeholder="Enter Your Password..."
              value={signdata.password}
              onChange={handleSignData}
            />
          </div>
          <div>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </div>
        </form>

        {/* Display submitted data */}
        <div>
          {submitdata.length > 0 ? (
            submitdata.map((item, index) => (
              <div key={index}>
                <h1 style={{ color: "white" }}>UserName: {item.username}</h1>
                <h1 style={{ color: "white" }}>Email: {item.email}</h1>
                <h1 style={{ color: "white" }}>Password: {item.password}</h1>
                <button onClick={() => handleDelete(index)} className={styles.button}>Delete</button>

              </div>
            ))
          ) : (
            <h1 style={{ color: "white" }}>No Data Available</h1>
          )}
        </div>
      </div>
    </center>
  );
};

export default SignUpCode;
