import React, { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); 

  const value = {
      isLoggedIn,
      setIsLoggedIn,
      user, 
      setUser
  }

  return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider>
  );
}
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsLoggedIn, setUser } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { 
      username: email, 
      password: password 
    }

    
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    console.log(responseData)

    if(response.status === 400) {
        console.log("error")
        setErrorMessage(responseData.message);
    } else {
        setIsLoggedIn(true);
        setUser(responseData.user); 
        navigate(`/profile/${responseData.user.username}`);
    }
  }

  return (
      <div className="login-page">
        <div className="login-container">
          <h2 className='loginh2'>Sign In</h2>
          <p className='loginP'>Stay tuned to updates.</p>

          {errorMessage && <p>{errorMessage}</p>}
          
          <form onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email or Phone" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <input className="submit-button" type="submit" value="Sign in" />
          </form>
        
          <a href="/" className="forgot-password">Forgot password?</a>
        
          <div className="divider">
            <hr />
            <p>New to StudyLAH!</p>
            <hr />
          </div>
          <div className="join-now-container">
            <button className="join-now">Join Now</button>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;

