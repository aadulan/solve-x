import React from 'react';
import { Grid, Divider } from "@material-ui/core";
import LevelButton from './LevelButton'
import { Link } from "react-router-dom";
import {withRouter} from 'react-router';

const levels = [{
        title: "Positive", 
        image: "level-1.jpg", 
        level:"easy", 
        freeStyle:"false",
        name: "positive"
    }, {
        title: "Negative", 
        image: "level-1.jpg", 
        level:"easy", 
        freeStyle:"false",
        name: "negative"

    },{
        title: "Fractions", 
        image: "level-2.jpg", 
        level:"hard", 
        freeStyle:"false",
        name: "positive"

    },{
        title: "Negative and Fractions", 
        image: "level-1.jpg", 
        level:"hard", 
        freeStyle:"false",
        name: "negative"

    },
    {
        title: "Free Style", 
        image: "level-1.jpg", 
        level:"hard", 
        freeStyle:"true",
        name: "negative"

    }
]

function Start(props){
    return (
        <Grid style={{maxWidth: 800, margin:"auto"}} direction='column' container justify='center'>
            <Grid direction='column' container item alignItems='center'>
                <img src="logo.svg" alt="logo" style={{width:250}} ></img>
            </Grid>
            <Grid item>
                <Divider />
            </Grid>
            <Grid item container style={{marginTop:20}} direction='row' justify='center' alignItems='center' > 
                {levels.map((e, index) => (
                    <Grid  key={index} item xs={12} sm={6} md={4} style={{padding:8, paddingTop:0}}>
                    <Link 
                        to={{
                            pathname: "/solve",
                            state: { 
                                level: e.level,
                                freeStyle:e.freeStyle,
                                name: e.name,
                            }
                          }}
                    >
                        <LevelButton image={e.image}   title={e.title} />
                    </Link>
                </Grid>
                ))}
                </Grid>        
        </Grid>
    )
}

export default withRouter(Start)