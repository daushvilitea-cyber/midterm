'use client'

import styles from "./cart.module.css"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
    increaseQuantity,
    decreaseQuantity,
   removeFromCart,}
  from "@/lib/slices/cartSlice"


function Cart() {
    const dispatch = useAppDispatch()
    const cartItems = useAppSelector((state) => state.cart.cartItems)
    return (

    <div className={styles.cart}>

      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.cartContainer}>

        <div className={styles.cartItems}>

          {cartItems.map((item) => (

            <div className={styles.cartItem} key={item.id}>

              <div className={styles.productInfo}>

                <img

                  src={item.image}

                  alt={item.title}

                  width={150}

                />

                <div>

                  <h3>{item.title}</h3>

                </div>

              </div>

              <div className={styles.quantity}>

                <button

                  onClick={() =>

                    dispatch(decreaseQuantity(item.id))

                  }

                >

                  -

                </button>

                <span>{item.quantity}</span>

                <button

                  onClick={() =>

                    dispatch(increaseQuantity(item.id))

                  }

                >

                  +

                </button>

              </div>

              <div className={styles.price}>

                ${(item.price * item.quantity).toFixed(2)}

              </div>

              <button

                onClick={() =>

                  dispatch(removeFromCart(item.id))

                }

              >

                Remove

              </button>

            </div>

          ))}

        </div>

        <div className={styles.summary}>

          <h3>Order Summary</h3>

          <p>

            Total: $

            {cartItems

              .reduce(

                (acc, item) =>

                  acc + item.price * item.quantity,

                0

              )

              .toFixed(2)}

          </p>

          <p>

            Total Items:

            {cartItems.reduce(

              (acc, item) => acc + item.quantity,

              0

            )}

          </p>

          <button className={styles.buyBtn}>

            BUY

          </button>

        </div>

      </div>

    </div>

  );

}

export default Cart;
        


