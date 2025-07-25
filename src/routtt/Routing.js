import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Rhome from './Rhome';
import Rabout from './Rabout';
import Rcontact from './Rcontact';

export default function Routing() {
  return (
    <div>
      <Router>
        <nav>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Rabout">About</Link></li>
            <li><Link to="/Rcontact">Contact</Link></li>


          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Rhome/>}/>
          <Route path='/Rabout' element={<Rabout/>}/>
          <Route path='/Rcontact' element={<Rcontact/>}/>
        </Routes>
      </Router>
    </div>
  );
}
