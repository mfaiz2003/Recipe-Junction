import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Nonveg from "./pages/nonveg";
import Veg from "./pages/veg";



function App() {

  return (

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Nonveg" element={<Nonveg />} />
         <Route path="/veg" element={<Veg />} />
      </Routes>
    
  );
}

export default App;
