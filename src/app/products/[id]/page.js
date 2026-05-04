import React from 'react'

async function productDetails(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return (
        <div>
            <img src={data.image} alt={data.name} width={200} />
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p>Price: ${data.price}</p>
        </div>
    )
}

export default productDetails