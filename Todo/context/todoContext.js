import { createContext ,useContext } from "react";


export const todoContext = createContext({
    todos : [{
        id : 1,
        todo : " todo messsage 1 ",
        completed : false
    }],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleCompleted : (id) => {}
});


export const useTodo = () => useContext(todoContext);   

export const TodoProvider = todoContext.Provider;



