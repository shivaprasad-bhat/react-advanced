import React, { useState } from 'react'; // useState is a function
/**
 * To use 'use..' hooks, Component names must be in uppercase
 * To invoke hook, it need to be in function body itself.
 * You can't call hook conditionally
 * Can call the function set.. conditionally, but not the entire hook
 */
const UseStateBasics = () => {
    const [text, setText] = useState('Not Handled');
    const handleClick = () => {
        switch (text) {
            case 'Not Handled':
                setText('Handled');
                break;
            case 'Handled':
                setText('Not Handled');
                break;
            default:
                break;
        }
    };
    return (
        <React.Fragment>
            <h2>{text}</h2>
            <button type="button" className="btn" onClick={handleClick}>
                Change Title
            </button>
        </React.Fragment>
    );
};

export default UseStateBasics;
