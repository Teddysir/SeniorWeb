import React from 'react';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/memos" element={<Home />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;


