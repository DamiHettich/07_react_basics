import React from "react";


function ToDoList (props) {
    return (
        <div className='ToDoList'>
            {props.children}
        </div>
    );
};

export default ToDoList;