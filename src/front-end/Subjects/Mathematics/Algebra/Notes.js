import React from 'react';
import { Link } from 'react-router-dom';
import "./Notes.css"
import screenshot from "/Users/guotianfu/Desktop/hackaton/src/front-end/Subjects/Mathematics/Screenshot 2023-05-30 at 11.06.07 AM.png"

const NotesCard = (props) => {

    return (
      <div className="notes-container">
          <div className='notes-header-color' style={{ background: 'linear-gradient(45deg, rgb(234, 234, 234), rgb(186, 222, 252), rgb(255, 192, 203))' }}></div>
          <div>
              <img className='notes-image' src={screenshot}></img>
          </div>
        
          <div className='notes-description'>
                Click To View
          </div>
      </div>
    );
};

export default NotesCard;
