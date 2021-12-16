import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { Divider, Grid, Typography } from '@mui/material';

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
        <React.Fragment key={index}>
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
