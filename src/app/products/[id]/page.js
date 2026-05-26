'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";

function details() {
    const { id } = useParams()
    const [product, setProduct] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            setProduct(data)
        }

        fetchProduct()
    }, [id])
    
    const increase = () => {
  setQuantity((prev) => Math.min(10, prev + 1))
}

const decrease = () => {
  setQuantity((prev) => Math.max(1, prev - 1))
}

const addToCartHandler = () => {
  dispatch(addToCart({ ...product, quantity }))
}

    if (!product) {
        return <div>Loading...</div>
    }

    return (
  <div>
    <img src={product.image} alt={product.title} width="200" />

    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <p>${product.price}</p>

    <div>
      <button onClick={decrease}>-</button>
      <span>{quantity}</span>
      <button onClick={increase}>+</button>
    </div>

    <button onClick={addToCartHandler}>
      Add to cart
    </button>
  </div>
)
}

export default details