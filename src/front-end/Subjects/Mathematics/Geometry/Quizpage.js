import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import './Quizpage.css'; //import the CSS File

//THIS IS MATH - GEOMETRY - QUIZ PAGE

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
    { value: 'option1', label: 'when y = 0, x = e' },
    { value: 'option2', label: 'as u -> -∞, x -> 0' },
    { value: 'option3', label: 'as u -> -∞, y -> ∞'},
  ];

  const options_q2 = [
    { value: 'option1', label: 'Tangent: y = x/p - a/p^2 + a ln(p)' },
    { value: 'option2', label: 'Normal: y = x/p - a/p^2 + a ln(p)' },
    { value: 'option3', label: 'Tangent: y = px + a + a ln(p)' },
  ];

  return (
    <div className="quiz-page">
      <h2 style={{paddingBottom: 30}}>Mathematics - Geometry - Quiz Page</h2>
      <div className="question-image">
        {/* Example of displaying a PDF file */}
        {/* <Document file="/path/to/quiz.pdf">
          <Page pageNumber={1} />
        </Document> */}
        //<img src="/path/to/question-image.jpg" alt="Question 1" />

      </div>

      <div className="questions">
        <div className="question">
          <p>Question 1: Which of the following is NOT TRUE from the given graph C? [2]</p>
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
          <p>Question 2: What are the Equations of Tangent or Normal? [3]</p>
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

