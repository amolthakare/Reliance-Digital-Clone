import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from "../Slideshow/Slide.module.css";

const Slideshow = () => {
    const images = [
        "https://www.reliancedigital.in/medias/Electronics-Fest-CLP-D-18.07.jpg?context=bWFzdGVyfGltYWdlc3wxMjE2ODB8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2hmOS85ODYyNDMxNDA4MTU4LmpwZ3w1Mzk1MzMzMmI3MDg0OTc1ZWFiODkwNTk2ZTEwNDhhZGZhZTBmYWU3MDNhNjNmOGVkNWJkODk2OWFkZTFjNjhm",
        "https://www.reliancedigital.in/medias/Umbrella-HDFC-Offer-Carousel-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MzEyM3xpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDQ1Lzk4NjA3MzU4NjA3NjYuanBnfGQ5MTIzMjUyNmEwNGI4MGZkZTRhOTkxYTUyZjNmMzFkOGYxYWU2MjZhOGJkMWMxM2NhODg2ZjlkNzViMWM4YjM",
        "https://www.reliancedigital.in/medias/RD-TV-DIGI-BIG-SCREEN-CLP-BANNER-HDFC-OFFER-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjI4MHxpbWFnZS9qcGVnfGltYWdlcy9oZDIvaDBiLzk4NjA3MzU1OTg2MjIuanBnfDIzMjNkNmI3N2UxOTgwOWU5ZTM3MjBjNDE4NzhjYzhlOWFlMjAzNGNkNzQ0MWMyYTI1NWM1NTQxNmI0Y2ZiMDA",
    ];

    return (
        <>

        <img src='https://www.reliancedigital.in/medias/Boot-Up-ICICI-Offer-Carousel-Banner-14-07-2022.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ0MDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDgxL2hmNS85ODYxNDY0NjIxMDg2LmpwZ3xmYzQzYzE3MTg1YTk5MjE5OWU4ZTE3ODYzNjU1ZmIxYzg1Mjc0YThjZmMyYWYxNGE2NjRmZjM2OTNkMTI5NDMx' alt=''/>
        <Slide height="200px">
            <div className={styles.slide}>
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className={styles.slide}>
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className={styles.slide}>
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>

        </>
    );
};

export default Slideshow;