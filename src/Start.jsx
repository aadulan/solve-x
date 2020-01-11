import React from 'react';
import { Grid, Button, Typography, Fab } from "@material-ui/core";
import LevelButton from './LevelButton'
import { Link } from "react-router-dom";

export default function Start(props){
    return (
        <Grid container direction='column' justify='center' alignItems='center' spacing={8}>
            <Grid container item direction='row' justify='center' alignItems='center'>
                <Link 
                    // level="easy"
                    // to="/solve"
                    to={{
                        pathname: "/solve",
                        state: { level: 'easy' }
                      }}
                    // replace
                >
                    <LevelButton   title='Level 1'/>
                </Link>
            </Grid>
            <Grid container item direction='row' justify='center' alignItems='center'>
            <Link 
                    // level="easy"
                    // to="/solve"
                    to={{
                        pathname: "/solve",
                        state: { level: 'hard' }
                      }}
                    // replace
                >
                    <LevelButton  title='Level 2'/>
                </Link>
            </Grid>

        </Grid>
    )
}