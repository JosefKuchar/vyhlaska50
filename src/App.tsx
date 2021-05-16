import React from 'react';
import logo from './logo.svg';
import './App.css';
import Generator from './Generator';
import { Typography, Container } from '@material-ui/core';

function App() {
  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: 20, textAlign: 'center' }}>⚡ Vyhláška 50/78 Sb. § 5</Typography>
      <Typography variant="subtitle2" style={{ marginBottom: 20, textAlign: 'center' }}>Vytvořil Josef Kuchař</Typography>
      <Generator />
    </Container>
  );
}

export default App;
