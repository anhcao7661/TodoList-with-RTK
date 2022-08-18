import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import './Todos.css'
import { addTodo, removeTodo } from '../../features/todoslice/todoSlice'


const Todos = () => {

    const dispatch = useDispatch()

    const todos = useSelector(state => state.todos)

    const [todo, setTodo] = useState('')

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleClickAdd = (e) => {
        e.preventDefault();
        if (todo === "") {
            alert("Add at least one todo");
            return;
        }
        dispatch(
            addTodo({
                content: todo,
                uID: new Date().getTime(),
            })
        )
        setTodo('')
    }

    const handleClickDelete = (uID) => dispatch(removeTodo(uID))

    return (
        <div className='todos'>
            <h1>Add todo</h1>
            <form onSubmit={handleClickAdd} className='input'>
                <input value={todo} onChange={handleChange} type="text" />
                <button type='submit'>ADD!</button>
            </form>
            <ul>
                {todos.map(todo =>
                    <div key={todo.uID} className='list'>
                        <li>{todo.content}</li>
                        <button onClick={() => handleClickDelete(todo.uID)}>Delete</button>
                    </div>
                )}
            </ul>
        </div>

    )

}



export default Todos