import React from 'react'
import Slideshow from "../../Components/Slideshow/SlideShow"
import { Box,Flex,Image,Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div >
        <Slideshow/>
        <Box textStyle="deals">Deals Worth Grabbing</Box>
        <Flex textStyle="flex1" >
            <Image src='https://www.reliancedigital.in/medias/iPhone-12-55900-Major-Price-Drops-Banner.jpg?context=bWFzdGVyfGltYWdlc3wzNTU2M3xpbWFnZS9qcGVnfGltYWdlcy9oYmQvaGVmLzk4NjM5NDA5NjQzODIuanBnfGJjYzJiMDQ2NDI1NTNkMmY0ZDIyZTc3YzVhMjBmOTgzM2IwYjVkYWEzNTc1MjViZjUzYWYzMjRmZTAyNDgzYjU' alt=''/>
            <Image src='https://www.reliancedigital.in/medias/Lenovo-IdeaPad-Slim-3-Laptop-Major-Price-Drops-Banner.jpg?context=bWFzdGVyfGltYWdlc3w1NTY1NnxpbWFnZS9qcGVnfGltYWdlcy9oYmUvaDZhLzk4NjQ0NzA3MjQ2MzguanBnfGU0MGEwNWUwOWZlODM1NTM3ZmFhNWU1ZTM0MmVjOGY1MzgzYTZlMzA2NTVjNjFlZDVkOGIwYjJkMjkyOTZlYzU' alt=''/>
            <Image src='https://www.reliancedigital.in/medias/Boat-Neckband-Major-Price-Drops-Banner.jpg?context=bWFzdGVyfGltYWdlc3wzNzI2MXxpbWFnZS9qcGVnfGltYWdlcy9oYzUvaGZlLzk4NjQ0NzA4NTU3MTAuanBnfDVlMWQxYTZmMjA3ZjM2OTdlNmRjODFmMmY4Y2IyYTk2NWEzZGUxZmVjZDgwZmY4NjVkMzI0NjE3YjZkMjExM2E' alt=''/>
            <Image src='https://www.reliancedigital.in/medias/BPL-Beard-Trimmer-Major-Price-Drops-Banner.jpg?context=bWFzdGVyfGltYWdlc3w0NTIwMHxpbWFnZS9qcGVnfGltYWdlcy9oOWMvaDI4Lzk4NjQ0NzA5MjEyNDYuanBnfDgxZTljZmRlN2VlMDA2MTJhZDEwZDdkNmU0YWE3MTQ0M2YxZGRjNzlhMjdlZGJkYmQ0OWFhNDQwNmU3MWY2MmE' alt=''/>
        </Flex>
        <Flex>
            <Box textStyle="deals1">NEW DEALS EVERY 3 HOURS</Box>
            <Text textStyle="veiw"><Link to="/mobiles">ViewAll</Link></Text>
        </Flex>
        <Flex textStyle="flex2">
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/Moto-G31-Smartphone-492849083-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTk1MnxpbWFnZS9qcGVnfGltYWdlcy9oMTkvaDQ0Lzk4MTM2Mzg5NzE0MjIuanBnfDdmYjAxMGRhMjk5NWVlZDJjOWJlY2E4NDY5YzFmOThiNTFjODllNjMxYzRlNmJhYzBlZGU3NmZkYjkwZmI0ZDg' alt='' />
                <Text textStyle="name">Motorola G31 64 GB, 4 GB RAM, Baby Blue, Mobile Phone</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹10,499.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹14,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 30% (₹4,500)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            {/* 2nd Box */}
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/Redmi-9A-Sport-Smartphone-491998274-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjQ3M3xpbWFnZS9qcGVnfGltYWdlcy9oNDMvaGM3Lzk2NTQxODA0NDYyMzguanBnfDk2Y2VkOGYwYjIwMDE5OTkzMzYwNDA0MWE3Yzk2Y2IzMDgyOTVhYzdiZmExMDkwYjU1MGNiZDhlYjA1ZTRmZmE' alt='' />
                <Text textStyle="name">Redmi 9A Sport 32 GB 3 GB RAM, Coral Green, Mobile Phone</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹7,999.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹9,499.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 16% (₹1,500)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            {/* 3rd box */}
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/Redmi-Note-11T-Smartphone-492574112-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDkwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGMvaDQ4Lzk3NzQ0NzczNzc1NjYuanBnfDA0MTBmZTgzNTM2YmIwYTA3YTk1YTNjMWEwYjUwZTMzYTAyOTQ2OTM5Yzk1MGIzMTQ1ZGZiODg2OTI0ZjdhMjA' alt='' />
                <Text textStyle="name">Redmi Note 11T 5G 128 GB, 8 GB RAM, Aquamarine Blue, Mobile Phone</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹17,999.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹22,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 22% (₹5,000)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/Redmi-9A-Sport-Smartphone-491998274-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjQ3M3xpbWFnZS9qcGVnfGltYWdlcy9oNDMvaGM3Lzk2NTQxODA0NDYyMzguanBnfDk2Y2VkOGYwYjIwMDE5OTkzMzYwNDA0MWE3Yzk2Y2IzMDgyOTVhYzdiZmExMDkwYjU1MGNiZDhlYjA1ZTRmZmE' alt='' />
                <Text textStyle="name">Redmi 9A Sport 32 GB 3 GB RAM, Coral Green, Mobile Phone</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹7,999.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹9,499.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 16% (₹1,500)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/Redmi-Note-11-Pro-Plus-5G-Smartphones-492849641-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODg4MHxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDFkLzk4MzI0NDU0MTEzNTguanBnfDE2Y2MyOGIwNWQ1NDkwY2JlNzZmYTI5OThmNDY0M2Q0MGQ4MWZkN2JmNGI2ZGUwMzUxOThkZWE4N2U2N2EzYTc' alt='' />
                <Text textStyle="name">Redmi Note 11 Pro Plus 5G 128 GB, 6 GB RAM, Phantom White, Mobile Phone</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹18,999.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹24,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 24% (₹6,000)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
        </Flex>


        {/* Television */}

        <Flex>
            <Box textStyle="deals1">INSTANT DISCOUNT ON ONEPLUS TELEVISIONS</Box>
            <Text textStyle="veiw"><Link to="/television">ViewAll</Link></Text>
        </Flex>

        <Flex textStyle="flex2">
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjIzMXxpbWFnZS9qcGVnfGltYWdlcy9oNjkvaDE0Lzk4MTAwNTg5MDM1ODIuanBnfGFiZjk3NDA1MzY1ODQwYjc2OTZkMzY4OTI1Y2RmOWM3OTI4NTE1MTlkMDFlOTUwYmZkM2U5MTVlYmIyZGFlYzg' alt='' />
                <Text textStyle="name">ONEPLUS 81.28 cm (32 inch) HD Smart  LED TV, 32Y1</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹13,999.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹19,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 30% (₹6,000)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            {/* 2nd Box */}
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/ONEPLUS-32Y1S-EDGE-SMART-LED-TV-492796556-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MzIyMHxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaGRmLzk3Nzg1NjI5OTAxMTAuanBnfGViZTM4YWU1NzgyNDZmZTg1NmZhY2U5MWU1MTMxMjVhZmFmMzJmYjg1YzhkNzY2MTg3Y2E5MDMzZmM3M2U0NmE' alt='' />
                <Text textStyle="name">OnePlus 81.28 cm (32 inch) HD Ready Android Smart LED TV with Dolby Audio Surround Sound Technology, 32Y1S Edge</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹15,999.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹23,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 33% (₹8,000)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            {/* 3rd box */}
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/OnePlus-40Y1-Television-492338486-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NjEzOHxpbWFnZS9qcGVnfGltYWdlcy9oMDYvaGE1Lzk1NTc0NDMwODQzMTguanBnfDRhYTQ4MWM4MjNkODNiYmY4YThlZGQ2YjBkMTc3NGY1OTE4MTAzODE5MGZhMzI4NzM2Mzc2MTkzYzQwMzY4OGI' alt='' />
                <Text textStyle="name">OnePlus 100 cm (40 inch) Full HD LED Smart TV, Y Series 40Y1</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹21,499.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹29,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 23% (₹6,500)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9qcGVnfGltYWdlcy9oOGQvaDZmLzk4MTAwNTg1NzU5MDIuanBnfDRlNjk2MTc0MjNiODNmYmZkNmVjNWQwMjM1N2QxMzExOWFkNzcyOTNiY2M3ODU0ZmUyN2Y5OWEyNjExNzFkYTY' alt='' />
                <Text textStyle="name">ONEPLUS 108 cm (43 inch) Full HD Smart LED TV, 43Y1</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹22,999.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹29,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 23% (₹7,000)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/OnePlus-50U1S-Television-492338513-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NTk0MHxpbWFnZS9qcGVnfGltYWdlcy9oMjcvaDhiLzk1Njg0MDI2Njk1OTguanBnfDI0ZGI1NzU2NzhmMzJhYmUzZTFlODM5Yjg1NjNjOTlmMDlmYTAyNjU2NDI1OGY0MDZhOGIyYzdjYzRkMTVmMDY' alt='' />
                <Text textStyle="name">OnePlus 138.7 cm (55 inch) Ultra HD (4K) LED Smart TV, U Series 55U1S</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹42,999.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹59,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 28% (₹17,000)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
        </Flex>


        <Flex>
            <Box textStyle="deals1">INSTANT DISCOUNT ON WATCHES</Box>
            <Text textStyle="veiw"><Link to="/earphone">ViewAll</Link></Text>
        </Flex>

        <Flex textStyle="flex2">
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/pTron-Basspods-P181-Bluetooth-Earphones-492796966-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzOTM5N3xpbWFnZS9qcGVnfGltYWdlcy9oMjQvaDAzLzk4MjU4OTQ0OTgzMzQuanBnfDkwMjBmNjNiMTMzNmNiZThjMGE2YWEyOGVmM2RkNmVjYmM2N2MyNDJhZTI2MDZmZGQxZGM5ZDBhZWQyZWM5ZTk' alt='' />
                <Text textStyle="name">pTron Basspods P181 Bluetooth 5.1 Wireless Headphones,Type-C Fast Charging & IPX4 (White)</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹599.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹2,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 80% (₹2,400)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            {/* 2nd Box */}
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/Boat-Airdopes-138-Earbuds-491973384-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2ODEwfGltYWdlL2pwZWd8aW1hZ2VzL2hlMC9oOWIvOTc2NTI2NDYyMTU5OC5qcGd8ZmFjZGQwZGU3YWM5MTljMjE4YmU1MzdlOTBlNTE1ODk4ZjRiNGU1ZTgyMWY5OGQ4NTllYTgwYWMyNzdhMjUzZA' alt='' />
                <Text textStyle="name">boAt Airdopes 138 Twin Wireless Earbuds with IWP Technology, Instant Voice Assistant and Type-C Charging</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹1,099.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹2,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 65% (₹1,941)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            {/* 3rd box */}
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/Boat-Airdopes-138-Earbuds-491973383-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NDQ5fGltYWdlL2pwZWd8aW1hZ2VzL2gxOC9oNTAvOTc2NTI3MDE5MjE1OC5qcGd8YTM4YTE3OWUyZjcxYjc5ZGRmOGFiZWZjOTdkMjIzMDUwYWFmNWViM2IyZjgxMDdmNTM1MWM0OTkxMWIyZDgzMg' alt='' />
                <Text textStyle="name">boAt Airdopes 138 TWS Earbuds with Upto 12 Hours Playback Time, Steel Blue</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹1,099.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹2,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 65% (₹1,941)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/boAt-Airdopes148-TrueWireless-492579514-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzYzNnxpbWFnZS9qcGVnfGltYWdlcy9oOGQvaDk2Lzk4MTY0MDc0MDg2NzAuanBnfDI5MGFkODhhODBhYTc2ZWUxYmM4MmZhNzg0ODI4YzJlMjI0MzkyY2MzOGVlYjM4ZTM2NDczNDJlZWE4NmMwMjk' alt='' />
                <Text textStyle="name">boAt Airdopes 148 True Wireless Airdopes, Cyan Cider</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹1,099.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹2,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 65% (₹1,941)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
            <Box textStyle="bbox">
                <Image textStyle="img" src='https://www.reliancedigital.in/medias/Portronics-POR-1348-True-Wireless-492796932-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTE4OXxpbWFnZS9qcGVnfGltYWdlcy9oNGUvaDFlLzk4MzU3NjAzODYwNzguanBnfDY4Nzk3YmE2OWMwOWUxYWE1NTljODQ4M2ZhODY0YmFkZTJkMTA2OGZjOWM3YTEwZjBiYjNmYjhlYjI2MGVhOTM' alt='' />
                <Text textStyle="name">Portronics Harmonics Twins S2 Wireless True Wireless Earbud With Smart Touch Control Cream</Text>
                <Flex>
                    <Text textStyle="name1">Deal Price:</Text>
                    <Text textStyle="name2">₹1,099.00</Text>
                </Flex>
                <Flex>
                    <Text textStyle="name1">M.R.P:</Text>
                    <Text as='s' textStyle="name1">₹2,999.00</Text>
                </Flex>
                <Text textStyle="name1">You Save: 65% (₹1,941)</Text>
                <Text textStyle="offer">OFFERS AVAILABLE</Text>
            </Box>
        </Flex>


    </div>
  )
}

export default Home