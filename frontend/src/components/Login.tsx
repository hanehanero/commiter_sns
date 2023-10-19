import React, { useState } from 'react';
import { Button, TextField, Paper, Typography } from '@mui/material';
import axios from 'axios';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error login user:", error);
    }
  };

  return (
    <Paper style={{ padding: 16, width: 300, margin: "20px auto" }}>
      <Typography variant="h5">Login</Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Paper>
  );
};

export default Login;
