import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import './Quizpage.css'; //import the CSS File

//THIS IS FOR ECONS - MACRO - QUIZ PAGE

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
          Wrong! Try again.
        </span>
      );
    }
  };

  // Define the array of options
  const options_q1 = [
    { value: 'option1', label: 'Consumption' },
    { value: 'option2', label: 'Investment' },
    { value: 'option3', label: 'Government Expenditure' },
    { value: 'option4', label: 'Net Exports'}
  ];

  const options_q2 = [
    { value: 'option1', label: 'Cyclical' },
    { value: 'option2', label: 'Frictional' },
    { value: 'option3', label: 'Structural' },
  ];

  return (
    <div className="quiz-page">
      <h2 style={{paddingBottom: 30}}>Economics - Macroeconomics - Quiz Page</h2>

      <div className="questions">
        <div className="question">
          <p>Question 1: Which of the following is the largest contributor to GDP for small and open economy like Singapore? [1]</p>
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
          {answers.length > 0 && checkAnswer(0, options_q1[3].value)}
          {/* Remember to change 'correctOption1' to the actual correct description */}
        </div>
        

        {/* Add more questions */}
        <div className="question">
          <p>Question 2: There is a major skill mismatch happening recently due to the Covid-19 pandemic. 
             Many people are unemployed because they lack the skills demanded by the industry. 
             What type of unemployment is this? [1]</p>
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
          {answers.length > 1 && checkAnswer(1, options_q2[2].value)}
        </div>
        
      </div>
    </div>
  );
};

export default Quizpage;