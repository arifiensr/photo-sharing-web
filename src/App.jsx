import { Route, Routes } from 'react-router-dom'

import './App.scss'
import Home from './pages/Home'
import ApiTest from './pages/ApiTest'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ApiTest />} />
    </Routes>
  )
}
