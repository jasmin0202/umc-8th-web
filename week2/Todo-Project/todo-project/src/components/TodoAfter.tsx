import { useState, FormEvent, useContext } from 'react';
import { TTodo } from '../types/todo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodoContext } from '../context/Todocontext';


const TodoAfter = () : React.ReactElement => {

        const [input, setInput] = useState<string>('');
        const context = useContext(TodoContext);

        const handleSubmit = (e?: FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            const text = input.trim();
            if (text) {
                context?.addTodo(text);
                setInput(''); // 입력 필드 초기화
            }
        }    
        

    return (
        <div className = "bigcontainer">
            <div className = "container">
                <div className = "inputcontainer">
                    <h1 className = "title">GYK TODO</h1>
                    <TodoForm input={input} setInput = {setInput} handleSubmit = {handleSubmit}/>
                </div>
                <TodoList 
                    title = "할 일"
                    titleClass="todo_text"
                    listClass="list"
                    todos={context?.todos}
                    buttonLabel='완료'
                    buttonClass='greenbutton'
                    onClick={context?.completeTodo}
                    />
                <TodoList
                    title="완료"
                    titleClass="done_text"
                    listClass="list"
                    todos={context?.doneTodos}
                    buttonLabel='삭제'
                    buttonClass='redbutton'
                    onClick={context?.deleteTodo}
                    />
                </div>
            </div>
    );
};

export default TodoAfter;