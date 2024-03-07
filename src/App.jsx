import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Sidebar from "./pages/Sidebar";
import Option1 from "./pages/Option1";
import Option2 from "./pages/Option2";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import WindowSizeList from "./Hooks/useEffect";
import ClickIncrease from "./components/ClickIncrease";
import HoverIncrease from "./components/HoverIncrease";

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
        <WindowSizeList />
        <ClickIncrease />
        <HoverIncrease />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
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
