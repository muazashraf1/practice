import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const { id } = useParams()

    const [Product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))

    }, [])
    return (

         <div
                style={{
                    border: "1px solid black",
                    padding: "20px",
                    width: "400px"
                }}
            >

                <img
                    src={Product.image}
                    alt=""
                    style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "contain"
                    }}
                />

                <h2>{Product.title}</h2>

                <p>{Product.description}</p>

                <h3>Price: ${Product.price}</h3>

            </div>
    )
}

export default SingleProduct