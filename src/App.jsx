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
import Temperature from "./components/Temp";
import React, { useState } from 'react'
import Modal from './Modal'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px'
}
function App() {
  const [isOpen, setIsOpen] = useState(false)
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
        <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
        <WindowSizeList />
        <ClickIncrease />
        <HoverIncrease />
        <Temperature />
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
