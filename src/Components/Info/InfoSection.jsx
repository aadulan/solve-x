import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

export default function ModalSection(props) {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography align="left" variant="h6">
          {props.title}
        </Typography>
        {props.info}
      </Grid>
      <Grid item>
        <Divider
          style={{ marginTop: props.margin ? 12 : 0, marginBottom: 12 }}
          variant="fullWidth"
        />
      </Grid>
    </Grid>
  );
}
