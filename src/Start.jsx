import React from 'react';
import { Grid } from "@material-ui/core";
import LevelButton from './LevelButton'
import { Link } from "react-router-dom";

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

export default function Start(props){
    return (
        <Grid style={{height:"100%"}} direction='column' container justify='center' alignItems='flex-start'>
            <Grid direction='column' container item alignItems='center'>
                <img src="logo.svg" alt="logo" style={{width:250}} ></img>
            </Grid>
            <hr/>
            <Grid style={{marginTop:5}} direction='row' container item justify='center' alignItems='center' spacing={8}> 
                {levels.map((e, index) => (
                    <Grid  item>
                    <Link 
                        to={{
                            pathname: "/solve",
                            state: { 
                                level: e.level,
                                freeStyle:e.freeStyle,
                                name: e.name,
                                key:index
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