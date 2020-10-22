import React, { useState } from 'react';
import { data } from '../../data'; // Array
const UseStateArrayFinal = () => {
    const [people, setPeople] = useState(data);
    const removeItem = (id) => {
        setPeople((old) => {
            let newPeople = old.filter((person) => person.id !== id);
            return newPeople;
        });
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

export default UseStateArrayFinal;
