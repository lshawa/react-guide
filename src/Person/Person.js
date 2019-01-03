import React from 'react'; 

//component is a function returning some jsx
const person = (props) => { 
    return <p>I am {props.name} and I am {props.age} years old!</p>
}

export default person; 