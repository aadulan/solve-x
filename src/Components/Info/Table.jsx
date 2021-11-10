import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import { Grid, Divider, Typography } from '@material-ui/core';

const symbols = [
  {
    icon: <DragIndicatorIcon />,
    word: 'draggable',
  },
  {
    icon: <ExpandMoreIcon />,
    word: 'expandable',
  },
  {
    icon: <DeleteIcon />,
    word: 'clear output ',
  },
  {
    icon: <DoneIcon />,
    word: 'enter',
  },
  {
    icon: <img src="plus-minus-modal.svg" alt="sign" style={{ maxWidth: 20 }}></img>,
    word: 'changes sign of number ',
    xs: 12,
  },
];

export default function SimpleTable() {
  return (
    <Grid container>
      {symbols.map((row, index) => (
        <React.Fragment>
          <Grid item xs>
            <Divider />
          </Grid>
          <Grid
            key={index}
            item
            xs={12}
            direction="row"
            container
            justifyContent="space-between"
            style={{ margin: 5 }}
          >
            {row.icon}
            <Typography align="right">{row.word}</Typography>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
}
