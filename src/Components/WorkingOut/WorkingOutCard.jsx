import React from 'react';
import TeX from '@matejmazur/react-katex';
import { Card, CardActionArea, CardContent, ListItem, Typography } from '@mui/material';

export default function WorkingOutCard(props) {
  return (
    <ListItem>
      <Card style={{ width: '100%' }} variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" align="center">
              <TeX math={`${props.step}`} />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ListItem>
  );
}
