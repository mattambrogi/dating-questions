import './App.css';
import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';



function App() {

  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);
  const [level, setLevel] = useState(null);
  const [isLoading, setLoading] = useState(true);



  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        setQuestions(res.data);
        setQuestion(res.data[1]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  //setQuestion(questions[1])


  function getQuestion() {
    if (level) {
      const filteredQuestions = questions.filter(question => question.level === parseInt(level));
      setQuestion(filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)])
    }
    else {

      setQuestion(questions[Math.floor(Math.random() * questions.length)])
    }
  }

  const handleClick = (e) => {
    setLevel(e.target.id)
  }

  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Date Questions</h1>
          <p className="lead">Three levels of questions to ask your parnter.</p>
        </div>
      </div>
      <div id="card" className="row mt-5">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="card h-100 bg-light mb-3">
            <div className="card-body">
              <p className="card-text">{question.body}</p>
              <div className="card-footer bg-transparent border-success">Level: {question.level}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <button className="btn btn-light" onClick={getQuestion}>New Question</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <button id='1' onClick={handleClick} className="btn btn-outline-light btn-sm active">Level 1</button>
        </div>
        <div className="col">
          <button id='2' onClick={handleClick} className="btn btn-outline-light btn-sm active">Level 2</button>
        </div>
        <div className="col">
          <button id='3' onClick={handleClick} className="btn btn-outline-light btn-sm active">Level 3</button>
        </div>
      </div>
    </div>
  );
}

export default App;
