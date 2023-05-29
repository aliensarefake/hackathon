import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import './Quizpage.css'; //import the CSS File

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
    { value: 'a = 6, b = -3, c = 2', label: 'Option 1' },
    { value: 'a = -3, b = 2, c = 6', label: 'Option 2' },
    { value: 'a = 2, b = -3, c = 6', label: 'Option 3' },
  ];

  const options_q2 = [
    { value: 'y < 4 - 2√10 and y > 4 + 2√10', label: 'Option 1' },
    { value: '4 - 2√10 < y < 4 + 2√10', label: 'Option 2' },
    { value: '-4 - 2√10 < y < 2√10 - 4', label: 'Option 3' },
  ];

  return (
    <div className="quiz-page">
      <h2>Mathematics - Algebra - Quiz Page</h2>
      <div className="question-image">
        {/* Example of displaying a PDF file */}
        {/* <Document file="/path/to/quiz.pdf">
          <Page pageNumber={1} />
        </Document> */}
        //<img src="/path/to/question-image.jpg" alt="Question" />

      </div>

      <div className="questions">
        <div className="question">
          <p>Question 1: What are the values of a, b, and c?</p>
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
          <p>Question 2: What is the range of values that y cannot take?</p>
          <ul>
            {options.map((option, index) => (
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

