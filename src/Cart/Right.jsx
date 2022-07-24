import React from "react";
import styles from "../Cart/Right.module.css"

export const RightCart = (props) => {
    var cart = JSON.parse(localStorage.getItem("cartItem")) || [];
    let totalMrp = cart.map((item) => item.price).reduce((prev, curr) => prev + curr, 0)

    return(
        <div className={styles.right}>
            <button className={styles.checkout}>CHECKOUT</button>

            <div>
                <p className={styles.det}>PRICE DETAILS</p>
                <div className={styles.pri}>
                    <p className={styles.price}>Price :</p>
                    <p className={styles.pric}>{"₹ "+totalMrp}</p>
                </div>
                <div className={styles.pri}>
                    <p className={styles.price}>Delivery Charges :</p>
                    <p className={styles.fr}>FREE</p>
                </div>
                <div className={styles.pri}>
                    <p className={styles.pe}>AMOUNT PAYABLE</p>
                    <p className={styles.a}>{"₹ "+totalMrp}</p>
                </div>
                
            </div>

        </div>
    )
}