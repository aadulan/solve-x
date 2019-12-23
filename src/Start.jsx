import React from 'react';
import { Grid, Button, Typography, Fab } from "@material-ui/core";
import LevelButton from './LevelButton'

export default function Start(props){
    return(
        <Grid container direction='column' justify='center' alignItems='center' spacing={8}>
            <Grid container item direction='row' justify='center' alignItems='center'>
                <LevelButton title='Level 1' image='level-1.png'/>
            </Grid>
            <Grid container item direction='row' justify='center' alignItems='center'>
                <LevelButton title='Level 2'/>

            </Grid>

        </Grid>
    )
}