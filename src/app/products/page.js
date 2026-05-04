'use client'

import { useEffect, useState } from "react"
import Link from "next/link"

import React from 'react'

function page() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>something went wrong!</div>

  return (
  <div>

    <div className="products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <Link href={`/products/details/${product.id}`}>
            <img src={product.image} alt={product.title} width={200}/>

            <h3>{product.title}</h3>

            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  </div>
);
}

export default page