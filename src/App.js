import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ZonnepanelenPage from './ZonnepanelenPage'

import Autoladers from './Autoladers'

import Thuisbatterij from './Thuisbatterij'
import WetZonnepanelenPage from './WetZonnepanelenPage';
import WatiseengoedmerkzonnepanelenPage from './WatiseengoedmerkzonnepanelenPage';
import Watiseengoedeomvormer from './Watiseengoedeomvormer';
import Watzinopimizer from './Watzinopimizer';
import WatZijnsMicroomrover from './WatZijnsMicroomrover';
import Watsengoedomvermers from './Watsengoedomvermers';
import ZoneEnerge from './ZoneEnerge';
import Verminderan from './Verminderan';
import ZonalpannelIntalle from './ZonalpannelIntalle';



function App() {
  return (
    <Router>
      <div>    
        {/* NavBar should be present on all pages */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/zonnepanelen" element={<ZonnepanelenPage />} />
          <Route path="/ZonalpannelIntalle" element={<ZonalpannelIntalle />} />
          <Route path="/ZoneEnerge" element={<ZoneEnerge />} />
          <Route path="/Verminderan" element={<Verminderan />} />
          <Route path="/Watzinopimizer" element={<Watzinopimizer />} />
          <Route path="/Watsengoedomvermers" element={<Watsengoedomvermers />} />
          <Route path="/WatZijnsMicroomrover" element={<WatZijnsMicroomrover />} />
          <Route path="/WetZonnepanelenPage" element={<WetZonnepanelenPage />} />
          <Route path="/WatiseengoedmerkzonnepanelenPage" element={<WatiseengoedmerkzonnepanelenPage />} />
          <Route path="/Watiseengoedeomvormer" element={<Watiseengoedeomvormer />} />
          <Route path="/Autoladers" element={<Autoladers />} />
          <Route path="/Thuisbatterij" element={<Thuisbatterij />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
