import {useContext , createContext} from "react"

export  const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo : " Todo msg",
            complete: false
        },
        {

        }
    ] ,
    addTodo : (todo) => {},
    updateTodo : (id , todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}