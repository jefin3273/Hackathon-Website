import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hackathon Registration</h1>
      </header>
      <main>
        <RegistrationForm />
      </main>
    </div>
  );
}

export default App;

