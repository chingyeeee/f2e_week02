import "./App.css";
import { Home } from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Member } from "./component/Member";
import { SignByMyself } from "./component/SignDocs/Own/SignByMyself";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/member" element={<Member />} />
        <Route path="/sign-by-myself" element={<SignByMyself />} />
      </Routes>
    </Router>
  );
}

export default App;
