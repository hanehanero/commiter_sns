import React from 'react';
import { Paper, List, ListItem, ListItemText } from '@mui/material';

interface Tweet {
  id: number;
  message: string;
}

interface Props {
  tweets: Tweet[];
}

const TweetsList: React.FC<Props> = ({ tweets }) => {
  return (
    <Paper style={{ marginTop: 20 }}>
      <List>
        {tweets.map((tweet) => (
          <ListItem key={tweet.id}>
            <ListItemText primary={tweet.message} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TweetsList;
