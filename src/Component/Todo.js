import React, { useState } from 'react';
import './Todo.css';


const Todo = () => {

    const [text, setText] = useState();

    return (
        <div id="todo">
            <input placeholder='To Do List'  />
            <button>입력</button>
        </div>
    );
};

export default Todo;