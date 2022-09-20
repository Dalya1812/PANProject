import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Doctor from "./Doctor";
import DoctorTips from "./components/results/DoctorTips";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Doctor />} />
        <Route path="/DoctorTips" element={<DoctorTips />} />
      </Routes>
    </Router>
  );
};

export default App;
