import React from "react";
import './ToDoButton.css'

function ToDoButton () {
    const doSomethingOnClick = (msg) => alert(msg)

    return (
        <button className='createToDoButton' onClick={() => doSomethingOnClick('hice click')} >+</button>
    );
};




export default ToDoButton;