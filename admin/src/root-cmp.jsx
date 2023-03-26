import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './cmps/private-route'
import Homepage from "./pages/homepage"
import Login from "./pages/login"
import Updates from './pages/updates'
import ForgotPassword from './cmps/forgot-password'

import "./App.css"

export function App() {
  return (

    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path={'/'} element={<Homepage />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/forgot-password'} element={<ForgotPassword />} />
            <Route path={'/updates'} element={
              <PrivateRoute>
                <Updates />
              </PrivateRoute>} />
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  )
}

