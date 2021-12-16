import React from 'react';
import { Typography } from '@mui/material';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

export default function Equal() {
  return (
    <Typography id="equal" variant="h1">
      <span style={{ margin: 'auto' }}>
        <TeX math="=" />
      </span>
    </Typography>
  );
}
