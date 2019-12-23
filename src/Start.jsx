import React from 'react';
import { Grid, Button, Typography, Fab } from "@material-ui/core";
import LevelButton from './LevelButton'

export default function Start(props){
    return(
        <Grid container direction='column' justify='center' alignItems='center' spacing={8}>
            <Grid container item direction='row' justify='center' alignItems='center'>
                <LevelButton/>
            </Grid>
            <Grid container item direction='row' justify='center' alignItems='center'>
                <LevelButton/>

            </Grid>

        </Grid>
    )
}