import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import { Notas } from "./components/Notas";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <div className="App">
    
   <BrowserRouter> 
   <Routes>
    <Route path="/" element={<Notas />} />
   </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;
