import React from "react";
import { useState } from "react";
import { Validation } from "./utils/Validation";
import "../styles/App.css";

const App = () => {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    password: "",
    contactNo: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    contactNo: "",
  });

  const [flag, setFlag] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    const validationResult = Validation(details);
    if (Object.keys(validationResult).length > 0) {
      setError({...error, ...validationResult});
      console.log(error)
      setDetails({
        username: "",
        email: "",
        password: "",
        contactNo: "",
      });
      return;
    } else {
      setFlag(true);
      setDetails({
        username: "",
        email: "",
        password: "",
        contactNo: "",
      });
      setError({
        username: "",
        email: "",
        password: "",
        contactNo: "",
      });
    }
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div id="main">
      {flag ? <h3 className="success-alert">Registered Successfullly</h3> : ""}
      <form onSubmit={formSubmit}>
        <h1>Registeration Form</h1>
        <section>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={details.username}
            onChange={handleChange}
          />
          {error.username.length > 0 ? (
            <p className="username-error">{error.username.length}</p>
          ) : (
            ""
          )}
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={details.email}
            onChange={handleChange}
          />
          {error.email.length > 0 ? (
            <p className="email-error">{error.email}</p>
          ) : (
            ""
          )}
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={details.password}
            onChange={handleChange}
          />
          {error.password.length > 0 ? (
            <p className="password-error">{error.password}</p>
          ) : (
            ""
          )}
          <label>Contact Number</label>
          <input
            type="number"
            name="contactNo"
            value={details.contactNo}
            onChange={handleChange}
          />
          {error.contactNo.length > 0 ? (
            <p className="contactNo-error">{error.contactNo}</p>
          ) : (
            ""
          )}
          <button type="submit">Submit</button>
        </section>
      </form>
    </div>
  );
};

export default App;
