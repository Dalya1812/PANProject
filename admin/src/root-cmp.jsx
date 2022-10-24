import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginPage } from "./pages/login-page"
import { UpdatesPage } from './pages/updates-page';
import "./App.css"


export function App() {
  return (


    <div className="App">
      <Router>
        <Routes>
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/update'} element={<UpdatesPage />} />
        </Routes>
      </Router>

      {/* <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Survey />} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter>  */}
    </div>
  );
}

