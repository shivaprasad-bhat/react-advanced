import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Peter',
        age: 24,
        message: 'Welcome to world',
    });

    const changeMsg = () => {
        setPerson({ ...person, message: 'Welcome to changed world' });
    };

    return (
        <>
            <h2>{person.name}</h2>
            <h3>{person.age}</h3>
            <h4>{person.message}</h4>
            <button className="btn" onClick={changeMsg}>
                Change Name
            </button>
        </>
    );
};

export default UseStateObject;
