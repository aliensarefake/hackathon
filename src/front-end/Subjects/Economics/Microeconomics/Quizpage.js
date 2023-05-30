import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import './Quizpage.css'; //import the CSS File

//THIS IS FOR ECONS - MICRO - QUIZ PAGE

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
    { value: 'option1', label: 'Increase and be indeterminant respectively' },
    { value: 'option2', label: 'Increase and Decrease respectively' },
    { value: 'option3', label: 'Increase and Increase respectively' },
    { value: 'option4', label: 'Decrease and indeterminant respectively'}
  ];

  const options_q2 = [
    { value: 'option1', label: 'High Barriers to Entry' },
    { value: 'option2', label: 'Constantly earning Supernormal profit' },
    { value: 'option3', label: 'Imperfect Information for consumers' },
  ];

  return (
    <div className="quiz-page">
      <h2 style={{paddingBottom: 30}}>Economics - Microeconomics - Quiz Page</h2>
      <div className="question-image">
        {/* Example of displaying a PDF file */}
        {/* <Document file="/path/to/quiz.pdf">
          <Page pageNumber={1} />
        </Document> */}

      </div>

      <div className="questions">
        <div className="question">
          <p>Question 1: If there is a increse in demand and fall in supply of a good, 
            then its Price and Quantity demanded will... [1]</p>
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
        

        {/* Add more questions */}
        <div className="question">
          <p>Question 2: Which of the following is not a characteristic of a market with a Monopoly? [1]</p>
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
  );
};

export default Quizpage;