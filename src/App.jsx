
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

