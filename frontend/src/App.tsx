import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Listing from 'pages/Listing'
import Form from 'pages/Form'
import Register from 'pages/Register'
import Navbar from 'components/Navbar'
import List from 'pages/List'
import FormEd from 'pages/FormEd'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/register" element={<Register />}/> 
        <Route path="/list" element={<List movie={{
          id: 0,
          title: '',
          score: 0,
          count: 0,
          image: ''
        }} />}/> 
        <Route path="/form">
          <Route path=":movieId" element={<Form movie={{
            id: 0,
            title: '',
            score: 0,
            count: 0,
            image: ''
          }} />} />
        </Route>
        <Route path="/formed">
          <Route path=":movieId" element={<FormEd movie={{
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
