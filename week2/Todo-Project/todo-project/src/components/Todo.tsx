import React, { useState, FormEvent } from 'react';
import { TTodo } from '../types/todo';

const Todo = (): React.ReactElement => {
    const [todos, setTodos] = useState<TTodo[]>([]);
    const [doneTodos, setDoneTodos] = useState<TTodo[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSubmit = (e?: FormEvent<HTMLFormElement>): void => {
        if (e) e.preventDefault();
        const text = input.trim();

        if (text) {
            const newTodo: TTodo = { id: Date.now(), text, isBoolean: false };
            setTodos((prevTodos): TTodo[] => [...prevTodos, newTodo]);
            setInput(''); // 입력 필드 초기화
        }
    };

    const completeTodo = (todo: TTodo) : void => {
        setTodos((prevTodos) : TTodo[] => prevTodos.filter((t) : boolean => t.id 
        !== todo.id));
        setDoneTodos(prevDoneTodos => [...prevDoneTodos, todo]);
    };

    const deleteTodo = (todo: TTodo) : void => {
        setDoneTodos((prevDoneTodos) : TTodo[] => prevDoneTodos.filter((t) : boolean => t.id 
        !== todo.id));
    };

    return (
        <>
            <div className="bigcontainer">
                <div className="container">
                    <div className="inputcontainer">
                        <h1 className="title">GYK TODO</h1>
                        <div>
                            <input
                                value={input}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                                type="text"
                                id="todo-input"
                                placeholder="할 일 입력"
                                required
                            />
                            <button type="button" className="greenbutton" onClick={handleSubmit}>
                                할 일 추가
                            </button>
                        </div>
                    </div>

                    <h3 className="todo_text">할 일</h3>

                    <div className="todo">
                        <ul>
                            {todos.map((todo): React.ReactNode => (
                                <li className="list" key={todo.id}>
                                    <span>{todo.text}</span>
                                    <button className="greenbutton" 
                                    onClick={() => completeTodo(todo)}>완료</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <h3 className="done_text">완료</h3>

                    <div className="done">
                        <ul>
                            {doneTodos.map((doneTodo): React.ReactNode => (
                                <li className="list" key={doneTodo.id}>
                                    <span>{doneTodo.text}</span>
                                    <button type="button" className="redbutton" onClick={() => deleteTodo(doneTodo)}>삭제</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;