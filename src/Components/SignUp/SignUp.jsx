// src/components/SignUp.jsx
import React, { useState } from "react";
import { auth } from "../../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 const navigation =useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signed up successfully");
    } catch (error) {
      setError(error.message);
    }
  };
 const handleExitSignUP =()=>{
  console.log("anuj")
  navigation('/');
 }
  return (
    <div className="signUpContainer">
      <h2>Sign Up</h2>
      <div>
        {error && <p className="signUpError">{error}</p>}
        <form className="signUpForm" onSubmit={handleSignUp}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        
      </div>
      <button onClick={()=>handleExitSignUP() } className="exitSignUpform">X</button>
    </div>
  );
};

export default SignUp;
