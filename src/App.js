import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authorize from "./pages/Authorize";
import Redirect from "./pages/Redirect";
import Athlete from "./pages/Athlete";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Authorize />} />
        <Route exact path="/redirect" element={<Redirect />} />
        <Route exact path="/athlete" element={<Athlete />} />
      </Routes>
    </Router>
  );
}

export default App;
