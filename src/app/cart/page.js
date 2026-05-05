'use client'
import { useEffect, useState } from "react"
import styles from "./cart.module.css"

function cart() {
    const [cartItems, setCartItems] = useState([])
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("cart")) || []
        setCartItems(data)
    }, [])

    const increase = (id) => {
                        setCartItems((prevItems) =>
                            prevItems.map((item) =>
                                item.id === id ? { ...item, quantity: Math.min(10, item.quantity + 1) } : item
                            )
                        );
                    }
                    const decrease = (id) => {
                        setCartItems((prevItems) =>
                            prevItems.map((item) =>
                                item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
                            )
                        );
                    }
    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Shopping Cart</h1>

            <div className={styles.cartContainer}>
                <div className={styles.cartItems}>
                    {cartItems.map((item) => (
                        <div className={styles.cartItem} key={item.id}>

                            <div className={styles.productInfo}>
                                <img src={item.image} alt={item.title} width={150}/>
                                <div>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>

                            <div className={styles.quantity}>
                                <button onClick={() => decrease(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increase(item.id)}>+</button>
                            </div>

                            <div className={styles.price}>
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>

                        </div>
                    ))}
                </div>


                <div className={styles.summary}>
                    <h3>Order Summary</h3>

                    <p>
                        Subtotal: $
                        {cartItems
                            .reduce((acc, item) => acc + item.price * item.quantity, 0)
                            .toFixed(2)}
                    </p>

                    <button className={styles.buyBtn}>BUY</button>
                </div>

            </div>
        </div>
    );
}

export default cart