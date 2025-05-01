import { TTodo } from "../types/todo";
import React from "react";

interface TodoListProps {
    title: string;
    todos: TTodo[];
    titleClass: string;
    listClass: string;
    buttonLabel: string;
    buttonClass: string;
    onClick: (todo: TTodo) => void;
}

const TodoList = ({title, todos, buttonLabel, titleClass, listClass, buttonClass, onClick}: TodoListProps) : React.ReactElement => {
    return(
        <>
        <h3 className={titleClass}>{title}</h3>
        
                <div className={listClass}>
                    <ul>
                        {todos?.map((todo): React.ReactNode => (
                            <li className="list" key={todo.id}>
                                 <span>{todo.text}</span>
                                <button type= "button" className={buttonClass}
                                 onClick={() : void => onClick(todo)}>{buttonLabel}</button>
                            </li>
                        ))}
                    </ul>
                </div>
        </>
    )
};

export default TodoList;