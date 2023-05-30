import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import './Notepage.css'; //import the CSS File

//THIS IS FOR ECONS - MACRO - NOTE PAGE

const Notepage = () => {

    return (
        <div className="container">
          <h1 className="heading">Macroeconomics for GCE Advanced Level</h1>
          <div className="content">
            <h2>Macroeconomics Overview</h2>
            <p>
              Macroeconomics is a branch of economics that focuses on the study of the economy as a whole. 
              It examines aggregate economic phenomena, such as national income, employment, inflation, economic growth, and the interactions between different sectors of the economy. 
              In the context of GCE A Level, the study of macroeconomics provides an understanding of the broader economic issues and policies that shape the overall performance of an economy.</p>
            
            <h2>Key Concepts</h2>
            <ul>

              <li>National Income and Output</li>
                <p>
                  Macroeconomics examines the measurement and determinants of national income and output. 
                  Concepts such as gross domestic product (GDP), gross national product (GNP), aggregate demand (AD), and aggregate supply (AS) are studied 
                  to understand the overall economic activity of a country.
                </p>

              <li>Unemployment</li>
                <p>
                  Macroeconomics explores the causes and consequences of unemployment. 
                  It analyzes different types of unemployment (e.g., frictional, structural, cyclical) and investigates the labor market dynamics, 
                  including labor force participation rates, unemployment rates, and the natural rate of unemployment.
                </p>
              
              <li>Inflation</li>
                <p>
                  Macroeconomics studies the causes and effects of inflation, which refers to a sustained increase in the general level of prices over time. 
                  It examines various inflation measures, such as the consumer price index (CPI) and the producer price index (PPI), 
                  and analyzes the impact of inflation on different economic agents and the overall economy.
                </p>

              <li>Fiscal Policy</li>
                <p>
                  Macroeconomics investigates government spending, taxation, and borrowing policies, collectively known as fiscal policy. 
                  It explores how changes in fiscal policy affect aggregate demand, economic growth, and inflation. 
                  Key concepts include government budgeting, fiscal deficits, and the use of fiscal tools to stabilize the economy.
                </p>

              <li>Monetary Policy</li>
                <p>
                  Macroeconomics examines the role of central banks and monetary policy in controlling the money supply, interest rates, and credit conditions. 
                  It explores the impact of monetary policy on inflation, employment, and economic growth. Students learn about tools 
                  such as open market operations, reserve requirements, and discount rates used by central banks. 
                  We would also understand the comparison between Monetary Policiy and Fiscal Policy in terms of effectiveness and eficiency in different contexts of an economy.
                </p>

              <li>Economic Growth and Development</li>
                <p>
                  Macroeconomics analyzes the factors that contribute to long-term economic growth and development.
                  It explores theories of economic growth, factors affecting productivity, investment, technological progress, 
                  and the role of institutions and policies in promoting sustainable economic development.
                </p>
              <li>International Tradde and Exchange Rates</li>
                <p>
                  Macroeconomics studies international trade, balance of payments, and exchange rates. 
                  It explores the benefits of trade, trade policies, and their impact on domestic and global economies. 
                  Students learn about exchange rate regimes, foreign exchange markets, and how exchange rates affect international trade and capital flows.
                </p>
            </ul>
            <h3>Why Study Macroeconomics?</h3>
            <p>
              By studying macroeconomics, students gain a comprehensive understanding of the aggregate behavior of an economy and the factors influencing its performance. 
            </p>
            <p>
              They develop analytical skills to analyze macroeconomic data, evaluate economic policies, and make informed judgments about the overall state of the economy. 
            </p>
            <p>
              It provides a foundation for further studies in economics, business, finance, or public policy at the undergraduate level and beyond.
            </p>

          </div>
        </div>
      );

}

export default Notepage;