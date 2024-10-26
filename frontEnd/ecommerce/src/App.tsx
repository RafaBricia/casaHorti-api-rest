
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Login from './Login/Login'
import ForgotPassword from './Login/ForgotPassword/ForgotPassword'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="forgotPassword" element={<ForgotPassword/>}></Route>
        <Route path="*" element={<Navigate to="/"/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
