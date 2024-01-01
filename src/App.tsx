import React from "react";
import {Routes, Route} from "react-router-dom"
import Start from "./pages/Start";
import Level from "./pages/Level";
import GameBeginner from "./pages/GameBeginner";
import GameIntermediate from "./pages/GameIntermediate";
import GameExpert from "./pages/GameExpert";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/level' element={<Level />} />
        <Route path='/gamebeginner' element={<GameBeginner />} />
        <Route path='/gameintermediate' element={<GameIntermediate />} />
        <Route path='/gameexpert' element={<GameExpert />} />
      </Routes>
    </div>
  );
};

export default App;