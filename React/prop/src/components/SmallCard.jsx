import React from 'react'

function SmallCard({ obj }) {
    return (
        <div style={{ display: "flex", gap: "5px", margin: "12px" }}>
            <img style={{ height: "100px", width: "200px", }} src={obj.img} alt="" />

            <div>
                <h4>{obj.heading}</h4>
                <p style={{ fontSize: "12px" }}>{obj.paragraph}</p>
            </div>
        </div>
    )
}

export default SmallCard