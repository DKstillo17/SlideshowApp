import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Aqui creamos la constante Diaposisitvas la que almacenará los titulos y textos, que previamente se llamará en diapositivas.js

const DIAPOSITIVAS = [
  {title: "Today's workout plan", text: "We're gonna do 3 fundamental exercises.",},
  {title: "First, 10 push-ups",text: "Do 10 reps. Remember about full range of motion. Don't rush.",},
  {title: "Next, 20 squats",text: "Squats are important. Remember to keep your back straight.",},
  {title: "Finally, 15 sit-ups",text: "Slightly bend your knees. Remember about full range of motion.",},
  {title: "Great job!",text: "You made it, have a nice day and see you next time!",},
];

ReactDOM.render(<App diapositivas={DIAPOSITIVAS} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
