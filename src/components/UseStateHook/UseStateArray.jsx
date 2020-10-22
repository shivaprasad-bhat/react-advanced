import React, { useState } from 'react';
import { data } from '../../data';
const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    console.log(people);
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };
    return (
        <React.Fragment>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button className="btn" onClick={() => removeItem(id)}>
                            Remove
                        </button>
                    </div>
                );
            })}
            <button className="btn" onClick={() => setPeople([])}>
                Delete All
            </button>
            <button className="btn" onClick={() => setPeople(data)}>
                Add All Back
            </button>
        </React.Fragment>
    );
};

export default UseStateArray;
