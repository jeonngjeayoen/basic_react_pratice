import React, {Component} from 'react';

const Input = (props) => {

    return(
        <div>
            <ul>
                {props.todos.map((todo, index) => (
                <li key={index}>
                    {todo}{' '}
                    <button onClick={()=>props.handleRemoveTodo(index)}>삭제</button>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Input;
