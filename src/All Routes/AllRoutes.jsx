import React from 'react'
import {Routes ,Route} from "react-router-dom"
import SmartPhone from './Smartphones/SmartPhone'
import PhoneDetails from './Smartphones/PhoneDetails'
import Navbar from "../Components/Navbar/Navbar"
import Footer from '../Components/Footer/Footer'
import Home from "../All Routes/Home/Home"
import Television from './Televisions/Television'
import Watches from './Watches/Watches'
import Appliances from './Appliances/Appliances'
import Earphone from './Earphone/Earphone'
import Laptop from './Laptop/Laptop'
import Cart from '../Cart/Cart'
import Contact from './ContactUs/ContactUs'
import Signup from './SignUp/SignUp'
import PrivateRoute from '../Components/PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={ <PrivateRoute>  <Home /> </PrivateRoute>} />
            <Route path="/mobiles" element={<SmartPhone/>} />
            <Route path="/mobiles/:mobile_id" element={<PhoneDetails/>} />
            <Route path="/television" element={<Television/>} />
            <Route path="/watch" element={<Watches/>} />
            <Route path="/appliances" element={<Appliances/>} />
            <Route path="/earphone" element={<Earphone/>} />
            <Route path="/laptop" element={<Laptop/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Signup/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes