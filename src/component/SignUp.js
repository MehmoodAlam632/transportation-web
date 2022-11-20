import React, { useState } from "react";
import InputField from "./InputField";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// import './style.css'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log('email :>> ', email);
  //   console.log('password :>> ', password);

  const navigate = useNavigate();

  const handleSignup = async() => {
    try {
      const user = await createUserWithEmailAndPassword(auth,email, password);
      console.log("user :>> ", user);
      navigate('/Login')
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="signupContainer">
        <h3>Sign Up</h3>
        <div>
          <InputField
            placeholder="User Name..."
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            placeholder="User Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSignup}
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};
export default SignUp;
