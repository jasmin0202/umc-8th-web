import React from "react";

interface TodoFormProps {
    input: string;
    setInput: (input: string) => void;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
}

const TodoForm = ({input, setInput, handleSubmit }: TodoFormProps)
 : React.ReactElement => {
    
    return (
        <div>
            <input
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            type="text"
            id="todo-input"
             placeholder="할 일 입력"
            required
            />
         <button type="button" 
         className="greenbutton" onClick={handleSubmit}>
            할 일 추가
        </button>
     </div>

    );
}

export default TodoForm;