import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ZonnepanelenPage from './ZonnepanelenPage'





function App() {
  return (
    <Router>
      <div>    
        {/* NavBar should be present on all pages */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/zonnepanelen" element={<ZonnepanelenPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
