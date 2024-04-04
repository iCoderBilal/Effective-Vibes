import "./App.css";
import FurtherNotes from "./FurtherNotes";
import InternetEnlight from "./InternetEnlightenment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";




function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<InternetEnlight />} />
          <Route path="/notes" element={<FurtherNotes />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
