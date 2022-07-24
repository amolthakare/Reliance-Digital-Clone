import React from "react";
import styles from "../Cart/Left.module.css";

export const LeftCart = (props) => {

    const {
        image,
        name,
        id,
        strike,price,discount
    }=props.data;

    const [count, setCount] = React.useState(1);
  

    const Increment=()=>{
    setCount(count+1)
    props.setTotal(props.total+price)
  
    }

    const Decrement=()=>{
        if(count<=1){setCount(1)}else{
            setCount(count-1)
            props.setTotal(props.total-price)
        }
  
    }

    return (
        <>
            <div className={styles.left}>
                <div>
                    <img className={styles.img} src={image} alt=""/>
                    <div className={styles.button}>
                        <button className={styles.btn}  onClick={Decrement}>-</button>
                        <p style={{ margin: "25px 0" }}>{count}</p>
                        <button className={styles.btn} onClick={Increment}>+</button>
                    </div>
                    <button onClick={()=>{props.filter(id)}}>Remove</button>
                </div>
                <div className={styles.namediv}>
                    <p className={styles.name}>{name}</p>
                </div>
                <div className={styles.pricediv}>
                    <p className={styles.price}>{"₹ " + price}</p>
                    <p className={styles.strike}>{"₹ "+strike + "  Inclusive of all taxes"}</p>
                    <p className={styles.strike}>{"You Save: "+discount}</p>
                    <p className={styles.free}>Free Shipping</p>
                    <p className={styles.deli}>*Delivery assurance is subject to our delivery locations</p>
                    <p className={styles.deli}>staying open as per govt. regulations</p>
                </div>
            </div>

        </>
    )
}
