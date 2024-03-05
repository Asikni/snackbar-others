import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


function App() {
  return (
    // link is anchor tag underneath, href k badle to
    <div>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route />
        </Routes>
      </>
      
    </div>
  );
}

export default App;
