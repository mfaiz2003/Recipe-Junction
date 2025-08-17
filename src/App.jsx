import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Nonveg from "./pages/nonveg";
import Veg from "./pages/veg";
import Dessert from "./pages/dessert";
import Favorite from "./pages/favorite";



function App() {

  return (


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Nonveg" element={<Nonveg />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    
  );
}

export default App;
