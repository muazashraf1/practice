import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ProductPage() {

    const [data, setData] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((res) => setData(res))

    }, [])

    return (
        <div>

            <h1>Product List</h1>

            {
                data?.map((pro) => (

                    <div
                        key={pro.id}
                        style={{
                            border: "1px solid black",
                            padding: "10px",
                            margin: "10px",
                            width: "300px"
                        }}
                    >

                        <img
                            src={pro.image}
                            alt=""
                            style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "contain"
                            }}
                        />

                        <h3>{pro.title}</h3>

                        <p>Price: ${pro.price}</p>

                        <Link to={`/products/${pro.id}`}>
                            View Details
                        </Link>

                    </div>

                ))
            }

        </div>
    )
}

export default ProductPage