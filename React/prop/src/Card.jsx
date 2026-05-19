import React from 'react'

function Card(props) {
    console.log(props);
    
    return (
        <div style={{
            border: "2px solid black",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
            width: "250px"
        }}>

            <h2>Name : {props.name}</h2>
            <h3>Age : {props.age}</h3>
            <h>Course : {props.course}</h>

        </div>
    )
}

export default Card