import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quizpage.css'; 
import Q1 from "/Users/guotianfu/Desktop/hackaton/src/front-end/Subjects/Mathematics/Algebra/AlgebraQ1.jpg"
import Q2 from "/Users/guotianfu/Desktop/hackaton/src/front-end/Subjects/Mathematics/Algebra/AlgebraQ2.jpg"

const Quizpage = () => {
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (questionIndex, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const checkAnswer = (questionIndex, correctAnswer) => {
    const selectedAnswer = answers[questionIndex];
    if (selectedAnswer === correctAnswer) {
      return <span className="feedback correct">Correct!</span>;
    } else {
      return (
        <span className="feedback wrong">
          Wrong! Try again. Hint: <em>Provide a hint here</em>
        </span>
      );
    }
  };

  // Define the array of options
  const options_q1 = [
    { value: 'option1', label: 'a = 6, b = -3, c = 2' },
    { value: 'option2', label: 'a = -3, b = 2, c = 6' },
    { value: 'option3', label: 'a = 2, b = -3, c = 6' },
  ];

  const options_q2 = [
    { value: 'option1', label: 'y < 4 - 2√10 and y > 4 + 2√10' },
    { value: 'option2', label: '4 - 2√10 < y < 4 + 2√10' },
    { value: 'option3', label: '-4 - 2√10 < y < 2√10 - 4' },
  ];

  return (
    <div className='wholeQuiz'>
    <div className="quiz-page">
      <h2 style={{paddingBottom: 30}}>Mathematics - Algebra - Quiz Page</h2>
      <div className="question-image">
        <img src={Q1} className='algebra' alt="Question 1" />

      </div>

      <div className="questions">
        <div className="question">
          <p>Question 1: What are the values of a, b, and c? [3]</p>
          <ul>
            {options_q1.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={option.value}
                    checked={answers[0] === option.value}
                    onChange={() => handleAnswerSelect(0, option.value)}
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
          {answers.length > 0 && checkAnswer(0, options_q1[0].value)}
          {/* Remember to change 'correctOption1' to the actual correct description */}
        </div>
      </div>
        
      
      <div className="question-image">
      <img src={Q2} className='algebra' alt="Question 2" />

      </div>
      
      <div className="questions">
        <div className="question">
          <p>Question 2: What is the range of values that y cannot take? [3]</p>
          <ul>
            {options_q2.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={option.value}
                    checked={answers[1] === option.value}
                    onChange={() => handleAnswerSelect(1, option.value)}
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
          {answers.length > 1 && checkAnswer(1, options_q2[1].value)}
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Quizpage;

