import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './Styles'
import Card from '@material-ui/core/Card';

export default function Equal(props){
    
    const classes = useStyles();

    return(
        <Card className={classes.equal}>
        <Typography className={classes.userSelect} variant='h1'>
            =
        </Typography>
        </Card>

    )
}