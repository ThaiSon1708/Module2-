// src/App.js

import React from 'react';
import SignInForm from './SignInForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Quan trọng: Import CSS Bootstrap

function App() {
  return (
    <div className="App">
      <SignInForm />
    </div>
  );
}

export default App;