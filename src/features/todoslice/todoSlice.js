import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.unshift(action.payload)
        },
        removeTodo: (state, action) => {
            return state.filter((e) => e.uID !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;