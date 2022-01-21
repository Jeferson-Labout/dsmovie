import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Listing from 'pages/Listing'
import Form from 'pages/Form'
import Register from 'pages/Register'
import Navbar from 'components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/register" element={<Register />}/> 
        <Route path="/form">
          <Route path=":movieId" element={<Form movie={{
            id: 0,
            title: '',
            score: 0,
            count: 0,
            image: ''
          }} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
