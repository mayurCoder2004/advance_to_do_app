// src/components/TaskList/TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, IconButton, Chip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../features/todos/todoSlice';

const TaskList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'error';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  return (
    <List data-testid="task-list">
      {todos.map(todo => (
        <ListItem 
          key={todo.id}
          secondaryAction={
            <IconButton 
              edge="end" 
              onClick={() => dispatch(deleteTodo(todo.id))}
              data-testid={`delete-button-${todo.id}`}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={todo.text}
            secondary={
              <>
                <Chip
                  label={todo.priority}
                  color={getPriorityColor(todo.priority)}
                  size="small"
                  sx={{ mr: 1 }}
                />
                {todo.weather && (
                  <Typography variant="caption" color="text.secondary">
                    Weather: {todo.weather}
                  </Typography>
                )}
                <Typography variant="caption" color="text.secondary">
                  Created: {new Date(todo.createdAt).toLocaleString()}
                </Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;