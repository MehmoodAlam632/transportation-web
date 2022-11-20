import React, { useState } from 'react';
import InputField from './InputField';
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleLogIn = async () => {
    try{
        const user = await signInWithEmailAndPassword(auth, email, password);
        navigate('/HomeScreen')
    console.log("clicked", user);
    }catch(error) {
        console.log();
    }
}

  return (
    <div className="signupContainer">
        <h3>Log In</h3>
        <div>
          <InputField
            placeholder="User Name..."
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            placeholder="User Password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleLogIn}
          >
            Login
          </button>
        </div>
      </div>
  )
}

export default Login
