import React from "react";
import {Routes, Route} from "react-router-dom"
import Start from "./pages/Start";
import Level from "./pages/Level";
import Game from "./pages/Game";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/level' element={<Level />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;