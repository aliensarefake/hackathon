import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import './Notepage.css'; //import the CSS File

//THIS IS FOR ECONS - MICRO - NOTE PAGE

const Notepage = () => {

    return (
        <div className="container">
          <h1 className="heading">Microeconomics for GCE Advanced Level</h1>
          <div className="content">
            <h2>Microeconomics Overview</h2>
            <p>
              Microeconomics is a branch of economics that focuses on the behavior of individual economic agents such as consumers, firms, and markets. 
              It examines how these agents make decisions regarding the allocation of limited resources and how their interactions shape the functioning of the overall economy. 
              In the context of GCE Advanced Level, the study of microeconomics provides a foundation for understanding the principles and theories that govern the behavior of individual economic units.
            </p>
            <h2>Key Concepts</h2>
            <ul>

              <li>Demand and Supply</li>
                <p
                    >Microeconomics analyzes the interaction between buyers (demand) and sellers (supply) in markets. 
                    It explores the factors influencing consumer demand and producer supply, such as price, income, preferences, and technology. 
                    The concept of market equilibrium, where demand equals supply, is central to understanding price determination.
                </p>

              <li>Elasticity</li>
                <p>
                    Elasticity measures the responsiveness of demand or supply to changes in various factors. 
                    Price elasticity of demand and supply (PED and PES), income elasticity (YED), and cross-price elasticity (XED) are important measures used to assess 
                    how sensitive quantity demanded or supplied is to changes in price, income, or the price of related goods.
                </p>
              
              <li>Consumer Behavior</li>
                <p>
                    Microeconomics studies how individuals make choices and allocate their limited resources to satisfy their wants and needs. 
                    Concepts such as utility, budget constraints, scarcity and consumer choice theory help explain how consumers maximize their satisfaction and make decisions regarding the consumption of goods and services.
                </p>

              <li>Production and Costs</li>
                <p>
                    Microeconomics examines how firms produce goods and services and the costs associated with production. 
                    Concepts like production functions, total cost, average cost, and marginal cost are used to analyze the relationship between inputs and outputs and how firms minimize costs and maximize profits.
                </p>

              <li>Market Structures</li>
                <p>
                    Microeconomics explores different market structures, including perfect competition, monopoly, monopolistic competition, and oligopoly. 
                    Each structure has unique characteristics and impacts the behavior of firms, pricing strategies, and market outcomes. 
                    Certain scenarios also warrant government intervention to control the market and economy. 
                </p>

              <li>Market Failures</li>
                <p>
                    Microeconomics examines situations where markets fail to efficiently allocate resources. 
                    It covers topics such as externalities (e.g., pollution), public goods, market power, and information asymmetry, 
                    highlighting instances where intervention may be needed to correct market failures.
                </p>
            </ul>
            <h3>Why Study Microeconomics?</h3>
            <p>
                1. Understanding Economic Decision-Making: Microeconomics helps students comprehend how individuals, households, and firms make decisions regarding the allocation of limited resources. 
                It explores concepts such as consumer behavior, production, costs, and pricing strategies, enabling students to analyze and predict the choices made by economic agents.
            </p>
            <p>
                2. Analyzing Market Dynamics: Microeconomics delves into the interaction between buyers and sellers in various market structures. 
                By studying demand and supply, market equilibrium, elasticity, and market failures, students gain insights into how markets operate, how prices are determined, and the impact of factors such as competition and market power.
            </p>
            <p>
                3. Developing Analytical and Critical Thinking Skills: Microeconomics promotes the development of analytical and critical thinking skills. Students learn to apply economic concepts, models, and theories to real-world scenarios, evaluate trade-offs, and make reasoned judgments about economic issues. They enhance their ability to analyze data, interpret graphs and charts, and think logically.
            </p>
            <p>
                Examining Resource Allocation and Efficiency: Microeconomics helps students understand the efficiency of resource allocation in markets. By studying concepts like market failures, externalities, and public goods, students gain an appreciation for the limitations of market mechanisms and the potential role of government intervention to correct market failures and promote social welfare.
            </p>

          </div>
        </div>
      );

}

export default Notepage;