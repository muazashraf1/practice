import React from 'react'
import BigCard from './BigCard'
import SmallCard from './SmallCard'

function Layout1({ heading, data }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
            <div>
                <h1>{heading}</h1>
                <BigCard obj={data[0]} />
            </div>

            <div>
                <SmallCard obj={data[1]} />
                <SmallCard obj={data[2]} />
                <SmallCard obj={data[3]} />
                <SmallCard obj={data[4]} />
            </div>
        </div>
    )
}

export default Layout1