import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from '/Users/guotianfu/Desktop/hackaton/src/front-end/NavigationBar/Navbar.js';
import HomePage from '/Users/guotianfu/Desktop/hackaton/src/front-end/HomePage/HomePage.js';
import Subjects from '/Users/guotianfu/Desktop/hackaton/src/front-end/Subjects/Subjects.js';
import LoginPage from './LoginPage/LoginPage';


function App() {
  return (
    <React.Fragment>
        <Router>
          <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/subjects" element={<Subjects/>}/>
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
        </Router>
    </React.Fragment>
      
  )
}

export default App;