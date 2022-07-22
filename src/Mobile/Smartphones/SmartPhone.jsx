import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from '@chakra-ui/react'
// import ReactPaginate from 'react-paginate';
import { useEffect,useState } from 'react';
import styles from "../../Mobile/Smartphones/Smartphone.module.css"
// https://amolthakare.github.io/mobile-json-Reliance-Clone/db.json
const SmartPhone = () => {

    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch(`https://amolthakare.github.io/mobile-json-Reliance-Clone/db.json`)
        .then((res) => res.json())
        .then((res) => {
            setData(res);
        });

    },[]);

    return (
        <>
        <div className={styles.top}>
                <i class="fa-solid fa-house-chimney"></i>
                <p>></p>
                <p>search</p>
            </div>
        <div className={styles.main}>
            

            <div className={styles.left}>
                <p className={styles.filt}>FILTERS</p>
                <h4 className={styles.pri}>Price</h4>
                <Slider aria-label='slider-ex-1' defaultValue={30}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <div className={styles.pr}>
                    <p>₹12999</p>
                    <p>₹147999</p>
                </div>
                <div className={styles.pp}>
                    <p className={styles.qq}>₹12999</p>
                    <p>to</p>
                    <p className={styles.qq}>₹14799</p>
                    <button className={styles.rr}>GO</button>
                </div>
                <h4 className={styles.pri}>Availability</h4>
                <div className={styles.cate}>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">
                            Exclude out of Stock
                    </label>
                </div>
                <h4 className={styles.pri}>Category</h4>
                <div className={styles.cate}>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">
                            Smartphone
                    </label>
                </div>
                <div className={styles.brand}>
                    <h4 className={styles.pri}>Brand  </h4>
                    <p className={styles.br}><i class="fa-solid fa-magnifying-glass"></i></p>
                </div>
                <input type="checkbox" id="cat"/>
                <label for="cat">OPPO</label>
                <br/>
                <input type="checkbox" id="cat"/>
                <label for="cat">RealMe</label>
                <br/>
                <input type="checkbox" id="cat"/>
                    <label for="cat">Samsung</label>
                    <br/>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">Vivo</label>
                    <br/>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">Mi</label>
                    <br/>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">Apple</label>
                    <br/>
                    <input type="checkbox" id="cat"/>
                    <label for="cat">Lava</label>

            </div>

            <div className={styles.right}>
                <div className={styles.container}>
                    {data.map((product) => (
                        <div>
                        <div className={styles.prodiv}>
                            <img src={product.image} alt="" />
                            <p className={styles.name}>{product.name}</p>
                            <div className={styles.pricediv}>
                                <h4 className={styles.price}>₹{product.price}.00</h4>
                                <s className={styles.strike }>{product.strike}</s>
                                <p className={styles.discount}>{product.discount}</p>
                            </div>     
                            <p className={styles.offer}>{product.offers}</p>

                        </div>
                        <div className={styles.div1}>
                                <div className={styles.div2}>
                                    <input type="checkbox" />
                                    <p className={styles.comp}>Compare</p>
                                </div>
                                <p className={styles.wish}><i class="fa-regular fa-heart"></i>  Wishlist</p>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>

        </div>
        </>
    )
}

export default SmartPhone