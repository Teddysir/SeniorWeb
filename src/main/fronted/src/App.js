import React from 'react';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Join from "./Pages/Join";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/memos" element={<Home />} />
                  <Route path="/joinProc" element={<Join />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;


