import React from 'react'
import { Box,Text ,Image,Input} from '@chakra-ui/react'
// import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
        <Box>
            <Box background="#e42529" >
                <Box padding="4px 16px" justifyContent="flex-end" display="flex" color="white">
                    <Text fontSize="14px" fontWeight="600" borderRight="1px solid white" padding="0px 8px"><i class="fa-solid fa-location-dot"></i>    Find a Store</Text>
                    <Text fontSize="14px" fontWeight="600" borderRight="1px solid white" padding="0px 8px">Buying Guides</Text>
                    <Text fontSize="14px" fontWeight="600" padding="0px 8px">Contact us</Text>
                </Box>
                <Box display="flex" justifyContent="space-between" marginLeft="auto" marginRight="auto" padding="0px 16px 15px 48px" color="white" alignItems="flex-end">
                    <Image src='https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg' width="150px" height="50px"></Image>
                    <Input placeholder='Find your favorite product'
                        fontSize="14px" height="36px"  borderRadius="2rem" background="white" width="35%"
                    ></Input>
                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                    <Box display="flex" padding="8px 16px" justifyContent="flex-end" color="white">
                        <Text fontSize="14px" fontWeight="600" borderRight="1px solid white" padding="0px 8px">Select Your Location</Text>
                        <Text fontSize="14px" fontWeight="600" borderRight="1px solid white" padding="0px 8px"><i class="fa-solid fa-cart-shopping"></i>    Cart</Text>
                        <Text fontSize="14px" fontWeight="600" padding="0px 8px"><i class="fa-solid fa-user"></i>    Login</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    </div>
  )
}

export default Navbar