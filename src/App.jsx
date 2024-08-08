import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Form'; 
import Display from './Display';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
