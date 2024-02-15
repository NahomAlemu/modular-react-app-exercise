import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB';
import { Button } from './components/SharedComponents'; 

function App() {
  return (
    <div>
      <Header />
      <ContentA />
      <ContentB />
      <Button>Button in App</Button>
      <Footer />
    </div>
  );
}

export default App;
