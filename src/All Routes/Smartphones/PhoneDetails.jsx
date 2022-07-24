import React from 'react'
import {useEffect,useState} from "react";
import { useParams } from 'react-router-dom';
// import styles from "./Smartphone.module.css"
import styles from "./Deatails.module.css";

const PhoneDetails = () => {
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://amolthakare.github.io/mobile-json-Reliance-Clone/db.json/${params.mobile_id}`)
        .then((res) => res.json())
        .then((res) => {
            setData(res);
            console.log(res);
        });
    },[params]);

  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <img src={data.image} alt="" />
            <p className={styles.name}>{data.name}</p>
            <div className={styles.pricediv}>
                <h4 className={styles.price}>₹{data.price}.00</h4>
                <s className={styles.strike }>{data.strike}</s>
                <p className={styles.discount}>{data.discount}</p>
            </div>     
            <p className={styles.offer}>{data.offers}</p>

        </div>
        <div className={styles.right}>
            <div className={styles.box}>
                <div className={styles.box1}>
                    <p>Gain more with offers (5)</p>
                </div>
                <div className={styles.box2}>
                    <h1>12d</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PhoneDetails