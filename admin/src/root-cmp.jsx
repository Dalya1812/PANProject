import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {LoginPage} from "./pages/login-page"

// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui'
import "./App.css"
// import 'firebaseui/dist/firebaseui.css'


export function App() {
  return (

    
    <div className="App">
    {/* <p>Hello from root cmp</p> */}
    <Router>
        <Routes>
          <Route path={'login'} element={<LoginPage />} />
        </Routes>
      </Router>
      {/* <GoogleAuthProvider /> */}
      
      {/* <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Survey />} /> */}
        {/* </Routes> */}
      {/* </BrowserRouter>  */}
    </div>
  );
}

