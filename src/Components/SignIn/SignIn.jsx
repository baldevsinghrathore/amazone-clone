
import React, { useContext, useState } from 'react';
import { auth } from '../../Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { MyContext } from '../../context/data/MyContext';
import '../../App.css';  // Import the CSS file
import { useNavigate,Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { accessToken, setAccessTocken } = useContext(MyContext);
  const navigate=useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      alert('Signed in successfully');
      setAccessTocken(result.user.accessToken);
      navigate("/ProductList")
    } catch (error) {
      setError(error.message);
    }
  };
  function handleExitform(){
    navigate('/ProductList')
  }

  return (
    <div className="signInContainer">
      <h2>Sign In</h2>
      {error && <p className="signInError">{error}</p>}
      <form className="signInForm" onSubmit={handleSignIn}>
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
        <button type="submit">Sign In</button>
      </form>
      <Link to="/SignUp" className='createNewaccountLink'>Create new Account</Link>
      <button onClick={()=>handleExitform()} className='exitFormsignUp'>X</button>
    </div>
  );
};

export default SignIn;
