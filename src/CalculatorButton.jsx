import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

export default function CalculatorButton(props) {
    // callback cb
    // val
    let special = {
        empty: <DeleteIcon/>,
        cal : <DoneIcon/>
    }
    let val = ["empty", "cal"].includes(props.val) ? 
    special[props.val] : 
    <Typography style={{fontSize:"1.5em"}}>
        {props.val}
    </Typography> 
    ;

    const backgroundColour = val => {
        if ("0123456789".indexOf(val) !== -1) {
            return "transparent"
        } else if ("+-×÷".indexOf(val) !== -1) {
            return "#e3f2fd"
        } else if (val === "empty"){
            return "#ffcdd2"
        } else {
            return "#c8e6c9"
        }
    }

    return (
        <Grid item xs={3}>
            <Button onClick={() => props.cb(props.val)} style={{
                width: 45,
                height: 45,
                minWidth: 30,
                padding: 0,
                background: backgroundColour(props.val),
                marginTop:2,
                marginBottom:2
            }}>
                {val}
            </Button>
        </Grid>
    )
}