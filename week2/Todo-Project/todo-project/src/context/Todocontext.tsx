import React, { createContext, PropsWithChildren, useState } from 'react';
import { TTodo } from '../types/todo';

interface ITodoContext {
    todos?: TTodo[];
    doneTodos: TTodo[];
    addTodo: (text: string) => void;
    completeTodo: (todo: TTodo) => void;
    deleteTodo: (todo: TTodo) => void;

}

export const TodoContext = createContext<ITodoContext | undefined>(undefined);

export const TodoProvider = ({children}:PropsWithChildren) : void => {
    const [todos, setTodos] = useState<TTodo[]>([]);
    const [doneTodos, setDoneTodos] = useState<TTodo[]>([]);

    const addTodo = (text: string): void => {
        const newTodo: TTodo = { id: Date.now(), text, isBoolean: false };
        setTodos((prevTodos): TTodo[] => [...prevTodos, newTodo]);
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

    return (<TodoContext.Provider value={{ todos, doneTodos, addTodo, completeTodo, deleteTodo }}>
        {children}
        </TodoContext.Provider>
    )
}


