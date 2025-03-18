import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(data);
  function handleChange(event) {
    setData({ ...data,[event.target.name]: event.target.value });
  }

  function handleSubmit(event){
    event.preventDefault()
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Name</label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="enter your name"
        />
        <br />
        <label /> 
        Email
        <br />
        <input  onChange={handleChange} type="email" name="email" placeholder="enter your email" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={handleChange}
        />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value={"Register"} />
      </form>
    </div>
  );
};

export default Register;
