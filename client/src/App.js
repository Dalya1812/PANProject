import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Survey from "./components/survey/Survey";
import Header from "./components/header/Header";
import QR from "./components/QrCode/qr";
import NavbarComp from "./components/navbar/navbarComp";
function App() {
  return (
    <div className="App">
      <NavbarComp />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Survey style={Survey.showSurvey ? {} : { display: "none" }} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
