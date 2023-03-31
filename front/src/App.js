import React from "react"
import Auth from "./components/Auth"
import Nav from "./components/Nav"
import Paral from "./components/Paral"

import './assets/css/style.css'

function App() {
  return (
    <div className="App">
      <Auth/>
      <Nav/>
      <Paral/>
    </div>
  );
}

export default App
