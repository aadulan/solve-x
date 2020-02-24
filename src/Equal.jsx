import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './Styles'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

export default function Equal(props){
    
    const classes = useStyles();

    return(
        <Typography className={classes.equal} variant='h1'>
                <span style={{ margin: 'auto' }}>
                    <TeX math="="/>
                </span>
        </Typography>

    )
}