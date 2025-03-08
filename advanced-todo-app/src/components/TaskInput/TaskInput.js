// src/components/TaskInput/TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todos/todoSlice';
import { fetchWeather } from '../../features/todos/todoSlice';
import { TextField, Button, Select, MenuItem, Box } from '@mui/material';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      priority,
      completed: false,
      createdAt: new Date().toISOString()
    };

    if (input.toLowerCase().includes('outdoor')) {
      try {
        const weatherData = await dispatch(fetchWeather('London')).unwrap();
        newTask.weather = weatherData.weather[0].description;
      } catch (error) {
        console.error('Weather fetch error:', error);
        newTask.weather = 'Weather unavailable';
      }
    }

    dispatch(addTodo(newTask));
    setInput('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        label="New Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
        margin="normal"
        inputProps={{ 'data-testid': 'task-input' }}
      />
      <Select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        sx={{ mx: 2, minWidth: 120 }}
        data-testid="priority-select"
      >
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </Select>
      <Button 
        variant="contained" 
        type="submit"
        data-testid="add-task-button"
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;