import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>This is a person named {props.name}!!</p>
            <input type="text" onChange={props.changeName}></input>
        </div>
    );
};

export default person;