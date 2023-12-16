import { createSlice , nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos : [
        {
            id : 1,
            text : "sameer sattar"
        }
    ]
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        add_Todo : (state , action) =>{
        const todo = {
            id : nanoid(),
            text : action.payload
        }
        state.todos.push(todo)
        },
        remove_Todo : (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        update_todo : (state , action) => {

        }
    }
})

export const {add_Todo , update_todo ,remove_Todo} = todoSlice.actions

export default todoSlice.reducer