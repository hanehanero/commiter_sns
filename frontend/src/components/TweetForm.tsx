import React, { useState } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import axios from 'axios';

const TweetForm: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/tweet', {
        message,
      });
      console.log(response.data);
      setMessage('');  // フォームをクリア
    } catch (error) {
      console.error("Error posting tweet:", error);
    }
  };

  return (
    <Paper style={{ padding: 16, margin: "20px 0" }}>
      <TextField
        fullWidth
        label="What's happening?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Tweet
      </Button>
    </Paper>
  );
};

export default TweetForm;
