import { useState } from 'react'
import './App.css'
import Navbar from './Shared/Navbar'
import Home from './pages/Home'
import Footer from './Shared/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './pages/ProtectedRoute'

import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import Profile from './pages/Profile'
import AddProduct from './pages/seller/AddProduct'
import ViewCart from './pages/ViewCart'
import Success from './pages/Success'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
    <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/addproduct' element={<ProtectedRoute><AddProduct/></ProtectedRoute>}/>
    <Route path='/products' element={<ProtectedRoute><Products/></ProtectedRoute>}/>
    <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
    <Route path='/products/:id' element={<ProtectedRoute><ProductPage/></ProtectedRoute>}/>
    <Route path='/viewcart' element={<ProtectedRoute><ViewCart/></ProtectedRoute>}/>
    <Route path='/success' element={<ProtectedRoute><Success/></ProtectedRoute>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
