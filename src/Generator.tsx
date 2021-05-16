import React, { useEffect, useState } from 'react';
import questions from './questions';

import { Typography, Button } from '@material-ui/core';
import { Visibility, ArrowForward } from '@material-ui/icons';

enum State {
  Hidden,
  Displayed
}

const Generator = () => {
  const [question, setQuestion] = useState({
    number: 0,
    question: '',
    answer: ''
  });

  const [state, setState] = useState(State.Hidden);

  const selectRandom = () => {
    setQuestion(questions[Math.floor(Math.random() * questions.length)])
  }

  useEffect(() => {
    selectRandom()
  }, []);

  const showAnswer = () => {
    setState(State.Displayed)
  }

  const nextQuestion = () => {
    setState(State.Hidden)
    selectRandom()
  }

  return <div>
    <Typography display="inline" variant="h6" style={{ color: '#424242'}}>{question.number}. </Typography>
    <Typography variant="h5" display="inline">{question.question}</Typography>
    <div>
    { state === State.Hidden ?
      <Button startIcon={<Visibility/>} variant="contained" color="primary" onClick={showAnswer}>Ukázat odpověď</Button> :
      <Button startIcon={<ArrowForward/>} variant="contained" color="primary" onClick={nextQuestion}>Další otázka</Button>
    }
    </div>
    <Typography variant="h6" style={{ marginTop: 20 }}>{ state === State.Displayed ? <div>{question.answer}</div> : '' }</Typography>
  </div>
};

export default Generator;
