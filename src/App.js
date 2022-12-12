import "./App.css";
import { Home } from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Member } from "./component/Member";
import { SignByMyself } from "./component/SignDocs/Own/SignByMyself";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/login" element={<Home />} />
        <Route path="/" element={<Member />} />
        <Route path="/sign-by-myself" element={<SignByMyself />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
