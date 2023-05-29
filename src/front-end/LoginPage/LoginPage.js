import React, { useState, createContext, useContext } from 'react';
import './LoginPage.css';

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const value = {
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { 
      username: email, 
      password: password 
    }

    console.log(data)
    
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();

    if(response.status === 400) {
        // User does not exist or password is incorrect
        setErrorMessage(responseData.message);
    } else {
        // User is authenticated, set login state to true
        setIsLoggedIn(true);
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

