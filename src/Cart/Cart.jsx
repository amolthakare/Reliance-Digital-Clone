import React from "react";
import {LeftCart} from "../Cart/LeftCart";
import { RightCart } from "./Right";
import styles from "../Cart/Right.module.css"

const Cart=() => {
    const bsk = JSON.parse(localStorage.getItem('cartItem'))||[]
    // console.log(bsk)
  
    const [data, setdata] = React.useState(bsk);

    return (
        <>
        <h2>My Cart</h2>
        <div className={styles.cart}>
            
            <div>
                {
                    data.map((item) => {
                        return (
                            <LeftCart
                                data={item}
                                key={Math.random().toString()}
                                setData={setdata}
                            />
                        )
                    })
                }
            </div>
            <div>
                <RightCart/>
            </div>
        </div>
        </>
    )
}
export default Cart