import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About";
import { Works } from "./pages/Works";
import { Resume } from "./pages/Resume/Resume";
import { NotFound } from "./pages/NotFound";
import { Navigation } from "./components/Navigation/Navigation";

import "./App.css";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="works" element={<Works />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);
