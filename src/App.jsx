import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Sidebar from "./pages/Sidebar";
import Option1 from "./pages/Option1";
import Option2 from "./pages/Option2";


function App() {
  return (
    // link is anchor tag underneath, href k badle to
    <div>
      <>
        {/* <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Sidebar/Option1" element={<Option1 />} />
          <Route path="/Sidebar/Option2" element={<Option2 />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
