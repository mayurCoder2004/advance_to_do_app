// src/features/todos/todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '87f0f7053f3a2cad6ea48b7fc3e5320c';

// Load todos from localStorage
const loadTodos = () => {
  try {
    return JSON.parse(localStorage.getItem('todos')) || [];
  } catch (error) {
    return [];
  }
};

export const fetchWeather = createAsyncThunk(
  'todos/fetchWeather',
  async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    return response.data;
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: loadTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    }
  }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;