import React from 'react'; 

//component is a function returning some jsx
const person = (props) => { 
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
            <p> {props.children} </p>

        </div>
    )
}

export default person; 