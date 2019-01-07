import React from 'react'; 

//component is a function returning some jsx
const person = (props) => { 
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
            <p> {props.children} </p>
            {/* Whenever we type something here we want to use that as a new new name  */}
            <input type="text" onChange={props.changed}/>

        </div>
    )
}

export default person; 