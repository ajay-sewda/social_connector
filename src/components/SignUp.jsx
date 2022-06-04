import React, { useState } from "react";

const SignUp = ({ signup }) => {
  const [data, setData] = useState({ email: "abc@g.com", psw: "123", confirmPsw: "123" });
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
          signup(data);
        }}
      >
        <input type="email" required placeholder="Email" value={data.email} name="email" onChange={onChange} />
        <input type="password" required placeholder="Password" value={data.psw} name="psw" onChange={onChange} />
        <input
          type="password"
          required
          placeholder="Password"
          value={data.confirmPsw}
          name="confirmPsw"
          onChange={onChange}
        />
        <input type="submit" value="SignUp"></input>
      </form>
    </div>
  );
};

export default SignUp;
