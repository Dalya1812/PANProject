import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbarComp";
import Survey from "./components/survey/Survey";
import Header from "./components/header/Header";
import QR from "./components/QrCode/qr";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
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
