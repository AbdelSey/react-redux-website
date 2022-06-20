import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Routes/Home";



function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
