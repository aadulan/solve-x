import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import algebra from 'algebra.js';
import { Button, Grid, TextField } from '@mui/material';

export default function TextBox(props) {
  const [eq, setEq] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    setEq(event.target.value);
  };

  const submitEquation = () => {
    try {
      const e = algebra.parse(eq);
      if (e.rhs == null) {
        throw new Error('Not an Equation');
      }
      var term = 'x';
      if (e.lhs.terms.length < 1 && e.rhs.terms.length < 1) {
        throw new Error('No terms');
      }

      e.lhs.terms.forEach((t) => {
        if (t.variables[0].degree > 1) {
          throw new Error('Not a Linear Equation');
        }
        if (t.variables[0].variable !== term) {
          throw new Error('Cannot have more than one Variable');
        }
      });

      e.rhs.terms.forEach((t) => {
        if (t.variables[0].degree > 1) {
          throw new Error('Not a Linear Equation');
        }
        if (term === '') {
          term = t.variables[0].variable;
        }
        if (t.variables[0].variable !== term) {
          throw new Error('Cannot have more than one Variable');
        }
      });

      props.onChangeEquation(e);
      setEq('');

      enqueueSnackbar('Equation Changed', { variant: 'success' });
    } catch (err) {
      enqueueSnackbar('Wrong input', { variant: 'error' });
    }
  };

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <TextField
          id="eq"
          label="Enter Equation Here"
          variant="filled"
          value={eq}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <Button onClick={() => submitEquation()} variant="outlined" color="primary">
          Enter
        </Button>
      </Grid>
    </Grid>
  );
}
