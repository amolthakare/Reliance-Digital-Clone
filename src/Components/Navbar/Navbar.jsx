import React from 'react'
import { Box,Text ,Image,Input, Flex} from '@chakra-ui/react';
import {Link} from "react-router-dom";


// import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
        <Box>
            <Box background="#e42529" >
                <Box textStyle="box">
                    <Text textStyle="navFont"><i class="fa-solid fa-location-dot"></i>    Find a Store</Text>
                    <Text textStyle="navFont">Buying Guides</Text>
                    <Text textStyle="navFont1"><Link to="/contact" > Contact us</Link></Text>
                </Box>
                <Box textStyle="box1">
                    <Link to="/"><Image src='https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg' textStyle="logo"></Image></Link>


                    <Input textStyle="input" placeholder='Find your favorite product' borderRadius="2rem"/>
                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                    <Box textStyle="box2">
                        <Text textStyle="navFont2">Select Your Location</Text>
                        <Text textStyle="navFont2"><i class="fa-solid fa-cart-shopping"></i> <Link to="/cart">   Cart</Link></Text>
                        <Text textStyle="navFont3"><i class="fa-solid fa-user"></i>   <Link to="/login">    Login</Link>    </Text>
                    </Box>
                </Box>
            </Box>

            
            <Flex textStyle="flex">
                <Box><Link to="/mobiles">MOBILES & TABLETS</Link></Box>
                <Box><Link to="/television"> TELEVISIONS</Link></Box>
                <Box><Link to="/earphone"> HEADPHONES & SPEAKERS</Link></Box>
                <Box><Link to="/watch"> WATCHES</Link></Box>
                <Box><Link to="/laptop">COMPUTERS</Link></Box>
                <Box>CAMERAS</Box>
                <Box><Link to="appliances">APPLIANCES </Link></Box>
                <Box>PERSONAL CARE</Box>
                <Box>ACCESSORIES</Box>
            </Flex>
        </Box>
    </div>
  )
}

export default Navbar