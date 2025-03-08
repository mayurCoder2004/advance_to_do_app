import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dispatch login action and redirect
    dispatch(login());
    navigate('/');
  };

  return (
    <Box sx={{ 
      textAlign: 'center',
      mt: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2
    }}>
      <Typography variant="h4" gutterBottom>
        Todo App Login
      </Typography>
      <Button 
        variant="contained" 
        onClick={handleLogin}
        size="large"
        sx={{ width: '200px' }}
      >
        Mock Login
      </Button>
    </Box>
  );
};

export default Login;