import logo from './logo.svg';
import './App.css';
import CarouselComp from './carousel/Carousel';
import RanAway from './investigationResult/RanAway';
import { Routes, Route } from "react-router-dom";
import Caught from './investigationResult/Caught';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Routes>
    <Route>
      <Route path="/" element={<Home/>} />
      <Route path="/ranaway" element={<RanAway/>} />
      <Route path="/caught" element={<Caught/>} />
    </Route>
  </Routes>
    </div>
  );
}

export default App;
