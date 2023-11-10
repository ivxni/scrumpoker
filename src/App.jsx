import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Home from "./pages/home/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="*" element={<NotFound />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
