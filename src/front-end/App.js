import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from '/Users/guotianfu/Desktop/hackaton/src/front-end/NavigationBar/Navbar.js';
import HomePage from '/Users/guotianfu/Desktop/hackaton/src/front-end/HomePage/HomePage.js';
import LoginPage from './LoginPage/LoginPage';
import Profile from './UserProfilePage/Profile';
import Subjects from '/Users/guotianfu/Desktop/hackaton/src/front-end/Subjects/Subjects.js';
import SubjectPage from './Subjects/SubjectPage';
import Algebra from '/Users/guotianfu/Desktop/hackaton/src/front-end/Subjects/Mathematics/Algebra/Notepage.js'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/subjects" element={<Subjects/>}/>
          <Route path="juniorCollege/subjects/Mathematics" element={<SubjectPage/>}/>
          <Route path="/juniorCollege/subjects/Mathematics/algebra" element={<Algebra/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </React.Fragment>  
  )
}

export default App;