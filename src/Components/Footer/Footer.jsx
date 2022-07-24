import React from 'react'
import { Box,Heading,Text ,Image} from '@chakra-ui/react'

const Footer = () => {
  return (
    <div>
        <Box bg='#1f4985' w='100%'>

            <Box w='100%' p={4} color='white' display='flex' justifyContent='space-evenly'>

            {/* 1st Box product categories */}
            <Box width='20%'>
                <Heading as='h3' size='sm' margin='16px 0px 4px'>
                    PRODUCT CATEGORIES
                </Heading>
                <Text marginTop="10px">SmartPhones</Text>
                <Text marginTop="6px">Laptops</Text>
                <Text marginTop="6px">DSLR Cameras</Text>
                <Text marginTop="6px">Television</Text>
                <Text marginTop="6px">Air Conditioner</Text>
                <Text marginTop="6px">Refregirators</Text>
                <Text marginTop="6px">Kitchen Appliances</Text>
                <Text marginTop="6px">Accessories</Text>
                <Text marginTop="6px">Personal Care & Grooming</Text>
            </Box>

            {/* 2nd Box Site Info */}
            <Box width='20%'>
                <Heading as='h3' size='sm' margin='16px 0px 4px'>
                    SITE INFO
                </Heading>
                <Text marginTop="10px">About Reliance Digital</Text>
                <Text marginTop="6px">resQ Services</Text>
                <Text marginTop="6px">Site Map</Text>
                <Text marginTop="6px">Gift Cart</Text>
                <Text marginTop="6px">Corporate Enquires</Text>
                <Text marginTop="6px">Contact Us</Text>
            </Box>

            {/* 3rd */}
            <Box width='20%'>
                <Heading as='h3' size='sm' margin='16px 0px 4px'>
                    RESOURCE CENTER
                </Heading>
                <Text marginTop="10px">Product Reviews</Text>
                <Text marginTop="6px">Buying Guides</Text>
                <Text marginTop="6px">How Tos</Text>
                <Text marginTop="6px">Featured Stories</Text>
                <Text marginTop="6px">Events & Happenings</Text>
            </Box>

            {/* 4*/}
            <Box width='20%'>
                <Heading as='h3' size='sm' margin='16px 0px 4px'>
                    POLICIES
                </Heading>
                <Text marginTop="10px">Terms of use</Text>
                <Text marginTop="6px">FAQs</Text>
                <Text marginTop="6px">Cancellation & Return Policies</Text>
                <Text marginTop="6px">Pricing and Payment Policies</Text>
                <Text marginTop="6px">Privacy Policies</Text>
                <Text marginTop="6px">E-waste Policies</Text>
                <Text marginTop="6px">EMI and Additional Cashback T&C</Text>
                <Text marginTop="6px">RelianceOne Loyalty Program T&C</Text>
            </Box>

            </Box>

            <Box w='50%' p={4} color='white' display='flex' justifyContent='space-around'>
                <Box>
                    <Heading as='h3' size='sm' margin='16px 0px 4px'>
                        FOLLOW US
                    </Heading>
                    <Box gap="10px" display="flex">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </Box>
                </Box>
                <Box>
                    <Heading as='h3' size='sm' margin='16px 0px 4px'>
                        EXPERIENCE RELIANCE DIGITAL APP ON MOBILE
                    </Heading>
                    <Box display="flex" gap="10px" marginTop="10px">
                        <Image src='https://www.reliancedigital.in/build/client/images/google_play_store.png' width="122px" height="42"></Image>
                        <Image src='https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png' width="122px" height="42"></Image>
                    </Box>
                </Box>
            </Box>
            {/* first div end */}


            <Box bg='#0a244a' w='100%' p={2} color='white' textAlign='center'>
                <Text fontSize='14px' fontWeight='bolder' as='u'>Disclaimer</Text>
                <Text fontSize='14px'>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</Text>
                <br/>
            </Box>

            <Box bg='#0a244a' w='100%' p={2} color='white' textAlign='center' marginTop='1px'>
                <Text fontSize='14px'>© 2022 Reliance Digital. All Rights Reserved.</Text>
                <br/>
            </Box>
        </Box>
    </div>
  )
}

export default Footer