import React, { forwardRef } from 'react';
import TeX from '@matejmazur/react-katex';
import { Card, CardActionArea, CardContent, ListItem, Typography } from '@mui/material';

function WorkingOutCard(props, ref) {
  return (
    <ListItem ref={ref}>
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

export default forwardRef(WorkingOutCard);
