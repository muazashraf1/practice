import React from 'react'

function BigCard({ obj }) {
    return (
        <div>
            <img style={{ height: "300px", width: "600px", }} src={obj.img} alt="" />

            <h1>{obj.heading}</h1>
            <p>{obj.paragraph}</p>
        </div>
    )
}

export default BigCard