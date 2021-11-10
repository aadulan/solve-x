import React from 'react';
import { Card, Typography, CardContent, CardActionArea } from '@material-ui/core';
import TeX from '@matejmazur/react-katex';
import ListItem from '@material-ui/core/ListItem';

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
