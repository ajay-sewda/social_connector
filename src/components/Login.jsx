import React, { useState } from "react";

const Login = ({ login }) => {
  const [data, setData] = useState({ email: "abc@g.com", psw: "123" });
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(data);
        }}
      >
        <label htmlFor="Email">
          <span>Email</span>
          <input type="email" required placeholder="Email" value={data.email} name="email" onChange={onChange} />
        </label>
        <label htmlFor="psw">
          <span>Password</span>

          <input type="password" required placeholder="Password" value={data.psw} name="psw" onChange={onChange} />
        </label>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};

export default Login;
