// let res =  await axios.get("https://api.pujakaitem.com/api/products");
//https://api.pujakaitem.com/api/products?id=thapaserialnoh
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import Products from "./Components/Products"
import Contact from "./Components/Contact"
import Cart from "./Components/Cart"
import Error from "./Components/Error"
import Footer from './Components/Footer'
import SingleProduct from './Components/SingleProduct'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" exact  element={<Home/>}/>
      <Route path="/about" exact element={<About/>}/>
      <Route path="/products" exact element={<Products/>}/>
      <Route path="/contact" exact  element={<Contact/>}/>
      <Route path="/cart" exact element={<Cart/>}/>
      <Route path="/singleproduct/:id" exact element={<SingleProduct/>}/>
      <Route path="*" exact  element={<Error/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App