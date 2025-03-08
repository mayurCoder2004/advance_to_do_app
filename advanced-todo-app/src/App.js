// src/App.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import Login from './components/Login/Login';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logout } from './features/auth/authSlice';

const theme = createTheme();

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const todos = useSelector(state => state.todos);

  // Debugging logs
  useEffect(() => {
    console.log('Authentication Status:', isAuthenticated);
    console.log('Current Todos:', todos);
  }, [isAuthenticated, todos]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Advanced Todo App
            </Typography>
            {isAuthenticated && (
              <Button 
                color="inherit" 
                onClick={() => dispatch(logout())}
                data-testid="logout-button"
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div style={{ padding: '20px' }}>
                  <TaskInput />
                  <TaskList />
                  {todos.length === 0 && (
                    <Typography variant="body1" style={{ marginTop: '20px' }}>
                      No tasks found. Add your first task!
                    </Typography>
                  )}
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;