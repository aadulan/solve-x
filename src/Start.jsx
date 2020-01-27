import React from 'react';
import { Grid } from "@material-ui/core";
import LevelButton from './LevelButton'
import { Link } from "react-router-dom";

export default function Start(props){
    return (
        <Grid container direction='column' justify='center' alignItems='center' spacing={8}>
            <Grid container item direction='row' justify='center' alignItems='center'>
                <Link 
                    to={{
                        pathname: "/solve",
                        state: { level: 'easy' }
                      }}
                >
                    <LevelButton image='level-1.jpg'   title='Level 1'/>
                </Link>
            </Grid>
            <Grid container item direction='row' justify='center' alignItems='center'>
            <Link 
                    to={{
                        pathname: "/solve",
                        state: { level: 'hard' }
                      }}
                >
                    <LevelButton image='level-2.jpg'  title='Level 2'/>
                </Link>
            </Grid>

        </Grid>
    )
}