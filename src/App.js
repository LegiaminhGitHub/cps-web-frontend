import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './main_style.css';
import Authencation_page from './pages/auth_page'
import Main_page from './pages/main_page';
function App(){
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Authencation_page/>}></Route>
      <Route path="/auth" element={<Authencation_page/>}></Route>
      <Route path="/play" element={<Main_page/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;