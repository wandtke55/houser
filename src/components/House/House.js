import React from 'react';


export default function House(props){
    return(
        <div>
            <h1>House</h1>
            <p>{props.house.name}</p>
            <p>{props.house.address}</p>
            <p>{props.house.city}</p>
            <p>{props.house.state}</p>
            <p>{props.house.zip}</p>

            <button onClick={()=> props.delete(props.house.id)}>Delete</button>
        </div>
    )
}