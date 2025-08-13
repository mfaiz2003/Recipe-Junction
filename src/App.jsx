import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Nonveg from "./pages/nonveg";



function App() {

  return (

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Nonveg" element={<Nonveg />} />
      </Routes>
    
  );
}

export default App;
