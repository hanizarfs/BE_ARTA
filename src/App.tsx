import './App.css'
import Drive from './pages/Drive'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Firestore from './pages/Firestore'
import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/drive' element={<Drive/>} />
      <Route path='/firebase' element={<Firestore/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
