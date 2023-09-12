import React, {useState} from 'react';
import Input from './todocompotent/Input';
import Map from './todocompotent/Map';

function TodoList() {
    const [todos, setTodos] = useState([]); // 투두 아이템을 저장하는 상태 변수
    const [newTodo, setNewTodo] = useState(''); // 새로운 투두 아이템 입력을 위한 상태 변수

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return; // 빈 문자열은 추가하지 않음
        setTodos([newTodo, ...todos]) // 새로운 투두 아이템 추가 맨위로
        setNewTodo(''); // 입력 필드 초기화
    };
    const handleRemoveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1); // 선택한 투두 아이템 제거
    setTodos(updatedTodos);
    };

return (
    <div className='todo_list'>
        <h1>Todo List</h1>
        <Map setNewTodo={setNewTodo}  newTodo={newTodo} handleAddTodo={handleAddTodo}/>
        <Input handleRemoveTodo={handleRemoveTodo} todos={todos}/>
    </div>
);
}

export default TodoList;