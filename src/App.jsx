import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Nonveg from "./pages/nonveg";



function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Nonveg" element={<Nonveg />} />
      </Routes>
    </Router>
    
  );
}

export default App;
