import { useState } from 'react';
import { getMessage } from './api.js';
import './App.css';

function App() {
  const [message, setMessage] = useState(null);

  function callBackend() {
    getMessage()
      .then((data) => setMessage(data.message))
      .catch((err) => alert(err.message));
  }

  return (
    <main className="app">
      <h1>Frontend</h1>
      <p>Ce frontend tourne dans son propre conteneur et appelle l'API du backend.</p>
      <button onClick={callBackend}>Appeler le backend</button>
      {message && <p className="message">{message}</p>}
    </main>
  );
}

export default App;