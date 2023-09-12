import React, { Component } from 'react';

function Map(props) {

    return(
        <div>
            <input
            type="text"
            value={props.newTodo}
            placeholder="할일을 입력해주세요" onChange={(e)=>props.setNewTodo(e.target.value)}/>
            <button onClick={props.handleAddTodo}>추가</button>
        </div>
    );
};

export default Map;
