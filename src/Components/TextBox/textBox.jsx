import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import algebra from "algebra.js";

export default function TextBox(props){
    const [eq, setEq] = useState("")

    const handleChange = event => {
        setEq(event.target.value);
    }

    const submitEquation = () => {
        try {
            const e = algebra.parse(eq)
            if (e.rhs == null) {
                throw new Error("Not an Equation")
            }
            var term = "x"
            if (e.lhs.terms.length < 1 && e.rhs.terms.length < 1){
                throw new Error("No terms")
            }

            e.lhs.terms.forEach((t,index) => {
                if(t.variables[0].degree > 1){
                    throw new Error("Not a Linear Equation")
                }
                // if (term === ""){
                //     term = t.variables[0].variable
                // }
                if (t.variables[0].variable !== term){
                    throw new Error("Cannot have more than one Variable")
                }
            })

            e.rhs.terms.forEach((t,index) => {
                if(t.variables[0].degree > 1){
                    throw new Error("Not a Linear Equation")
                }
                if (term === ""){
                    term = t.variables[0].variable
                }
                if (t.variables[0].variable !== term){
                    throw new Error("Cannot have more than one Variable")
                }

            })

            props.onChangeEquation(e)
            setEq("")
            // console.log(e)
            props.onChangeMessage("Equation Changed")
            props.onChangeVariant("success")
            props.onChangeOpen(true)
          } catch(err) {
            //   console.log(err)
            props.onChangeVariant("error")
            props.onChangeMessage("Wrong input")
            props.onChangeOpen(true)
          }
    }

    return(
        <Grid container alignItems="center" spacing={2}>
            <Grid item>
                <TextField 
                    id="eq" 
                    label="Enter Equation Here" 
                    variant="filled" 
                    value={eq}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item>
                <Button onClick={() => submitEquation()} variant="outlined" color="primary">
                    Enter
                </Button>
            </Grid>
        </Grid>
    )
}