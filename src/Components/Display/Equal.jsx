import React from 'react';
import { Typography } from '@material-ui/core';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

export default function Equal(props) {
  return (
    <Typography id="equal" variant="h1">
      <span style={{ margin: 'auto' }}>
        <TeX math="=" />
      </span>
    </Typography>
  );
}
