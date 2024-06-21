// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import { register } from "../../redux/thunk/authThank/authThunk";

export const SignUp = () => {
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   dispatch(register({ username, password }));
  // }
  return (
    <SignUpStyle>
      <div className="auth" id="test">
        <h1>Sign up</h1>
        <p>Create your account</p>
        <form>
          <p>
            <input type="email" placeholder="Enter email" name="email" />
          </p>
          <p>
            <input
              type="password"
              placeholder="Enater password"
              name="password"
            />
          </p>
          <p>
            <input type="name" placeholder="Enter name" name="name" 
            // value={username} 
            />
          </p>
          <p>
            <input type="text" placeholder="Save avatar" name="avatar" />
          </p>
          <p>
            <input type="submit"  value={"Create an account"} />
          </p>
        </form>
      </div>
    </SignUpStyle>
  );
};

export const SignUpStyle = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 55;
  .auth {
    width: 420px;
    right: 0;
    position: fixed;
    height: 100vh;
    background-color: #fff;
    padding: 24px;
    text-align: center;
  }
  input {
    padding: 12px 24px;
    width: 100%;
    outline: none;
    border-radius: 4px;
    border: 1px solid var(--gray-400, #d7dadd);
    background: var(--white, #fff);
    margin: 5px;
  }
  input::placeholder {
    color: #9a9ca5;
  }
  input[type="submit"] {
    background-color: #17696a;
    color: #fff;
  }
`;
