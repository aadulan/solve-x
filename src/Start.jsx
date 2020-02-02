import React from 'react';
import { Grid } from "@material-ui/core";
import LevelButton from './LevelButton'
import { Link } from "react-router-dom";

export default function Start(props){
    return (
        <Grid style={{height:"100%"}} direction='column' container justify='center' alignItems='flex-start'>
            <Grid direction='column' container item alignItems='center'>
                {/* <Image></Image> */}
                {/* <svg src="logo.svg"></svg> */}
                <img src="logo.svg" alt="logo" style={{width:250}} ></img>
            </Grid>
            <hr/>
            <Grid style={{marginTop:5}} direction='row' container item justify='center' alignItems='center' spacing={8}> 
            <Grid  item>
                <Link 
                    to={{
                        pathname: "/solve",
                        state: { level: 'easy' }
                      }}
                >
                    <LevelButton image='level-1.jpg'   title='Level 1' />
                </Link>
            </Grid>
            <Grid  item>
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

        </Grid>
    )
}