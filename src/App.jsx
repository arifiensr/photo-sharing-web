import { Route, Routes } from 'react-router-dom'

import './App.scss'
import Home from './pages/Home'
import ApiTest from './pages/ApiTest'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ApiTest />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
