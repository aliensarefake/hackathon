import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Notepage.css'; 
import NotesCard from './Notes';
import Quizpage from './Quizpage';

//THIS IS FOR MATH -ALGEBRA - NOTE PAGE

const Notepage = () => {

    return (
        <div className="algebra-container">
          <h1 className="algebra-heading">H2 Mathematics for GCE Advanced Level</h1>
          <div className='algebra-cards'>
            <NotesCard/>
            <NotesCard/>
          </div>
          <div className="algebra-content">
            <h2 className='algebra'>Pure Mathematics: Algebra Overview</h2>
            
            <h2 className='algebra'>Key Concepts</h2>
            <ul className='algebra'>

              <li>Equations and Inequalities</li>
                <p className='algebra'>
                    Students learn to solve various types of equations and inequalities, including linear equations, quadratic equations, simultaneous equations, and inequalities involving polynomial and rational expressions. 
                    They explore techniques such as Factoring, Completing the Square, and using the Quadratic Formula.
                </p>

              <li>Functions and Graphs</li>
                <p className='algebra'>
                    The concept of a function is central to algebra. Students study different types of functions, including linear, quadratic, exponential, logarithmic, and trigonometric functions. 
                    They learn to analyze and sketch graphs of functions, identify key features such as Domain and Range, Function Composition, and understand Transformations and Translations of graphs.
                </p>
              
              <li>Polynomial and Rational Functions</li>
                <p className='algebra'>
                    Students study polynomial and rational functions in detail. 
                    They explore the behavior of polynomial functions, including degree, leading coefficient, and end behavior. 
                    They also learn to analyze and graph rational functions, including identifying asymptotes, domain, and range.
                </p>

              <li>Sequences and Series</li>
                <p className='algebra'>
                    Students delve into the study of sequences and series, including arithmetic and geometric sequences and series. 
                    They learn to find the nth term of a sequence, sum formulas, and explore the convergence and divergence of series.
                    Techniques like Method of Difference and Partial Fractions are relevant in this topic.
                </p>

              <li> Complex Numbers</li>
                <p className='algebra'>
                    Students are introduced to complex numbers, which extend the concept of real numbers. 
                    They learn about complex arithmetic, the complex plane, and how to solve equations involving complex numbers. 
                    Complex numbers can be written in Cartesian form, Polar form, and Exponential form.
                    Complex numbers have applications in areas such as engineering, physics, and computer science.
                </p>

            </ul>
          </div>
          <Quizpage/>
        </div>
      );

}

export default Notepage;