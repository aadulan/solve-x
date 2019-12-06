import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, CardContent, Card, CardHeader, Fab } from '@material-ui/core';
import { Button, ButtonGroup } from "@material-ui/core";



export default function Calculator(props) {
    const [number, setNumber] = useState("")
    const [sign, setSign] = useState("")
    const [isPositive, setPositive] = useState("+")

    // const [expression, setExpression] = useState("")
    // const [answer, setAnswer] = useState("")

    // const addElement = (e) => {
    //     setExpression(expression.concat(e));
    // }

    const emptyText = () => {
        // setExpression("")
        // // setAnswer("")
        setNumber("")
        setSign("")
    }

    const addNumberSign = () => {
        if (isPositive === "+"){
            setPositive("-")
        } else{
            setPositive("+")
        }
    }

    const addNumber = (e) => {
        setNumber(number.concat(e));
    }
    
    const addSign = (e) => {
        setSign(e);
    }

    const calculateExpression = () => {
        var newSign = ""
        if (sign === "÷") {
            newSign = "divide"

        } else if (sign === "×"){
            newSign = "multiply"
        } else if (sign === "+" ){
            newSign = "add"
        } else if (sign === "-"){
            newSign = "subtract"
        }

        props.onCalChange(newSign, isPositive.concat(number))
        props.onEnterChange(true);
    }

    return (
        <Card>
            <CardHeader
            title="Equation Changer"
            
            />
            <CardContent>

                <Grid container direction='column' justify='center' align='center'>
                    <Grid container direction='row'>
                        <Card style={{ width: '100%' }}>
                            <CardContent>
                                <Grid container direction='column' justify='center' align='center'>
                                    <Grid container direction='row' justify='flex-start' align='center'>
                                    <Fab onClick={() => addNumberSign()} size="small" color="primary" aria-label="add">
                                        ±
                                    </Fab>
                                    <Typography style={{marginLeft:10}} align='left' variant="h6">
                                        {isPositive}
                                    </Typography>
                                    <Typography align='center' variant="h6">
                                        {number}
                                    </Typography>
                                    </Grid>
                                    <Typography align='right' variant="h6">
                                        {sign}
                                    </Typography>
                                    
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid container direction='row'>
                        <ButtonGroup
                            fullWidth={true}
                            size="large"
                            color='primary'
                        >
                            <Button onClick={() => addNumber("7")}>7</Button>
                            <Button onClick={() => addNumber("8")}>8</Button>
                            <Button onClick={() => addNumber("9")}>9</Button>
                            <Button onClick={() => addSign("÷")}> ÷ </Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid container direction='row'>
                        <ButtonGroup
                            fullWidth={true}
                            size="large"
                            color='primary'
                        >
                            <Button onClick={() => addNumber("4")}>4</Button>
                            <Button onClick={() => addNumber("5")}>5</Button>
                            <Button onClick={() => addNumber("6")}>6</Button>
                            <Button onClick={() => addSign("×")}>×</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid container direction='row'>
                        <ButtonGroup
                            fullWidth={true}
                            size="large"
                            color='primary'
                        >
                            <Button onClick={() => addNumber("1")}>1</Button>
                            <Button onClick={() => addNumber("2")}>2</Button>
                            <Button onClick={() => addNumber("3")}>3</Button>
                            <Button onClick={() => addSign("-")}>-</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid container direction='row'>
                        {/* <div style={{ width:'25%' }}> </div> */}
                        <ButtonGroup
                            fullWidth={true}
                            size="large"
                            color='primary'
                        // style={{ width:'75%' }}
                        >
                            <Button onClick={() => emptyText()} >Clear</Button>
                            <Button value="0" onClick={() => addNumber("0")}>0</Button>
                            <Button value="+" onClick={() => addSign("+")}>+</Button>
                        </ButtonGroup>

                    </Grid>
                    <Grid container direction='row'>
                        <ButtonGroup
                            fullWidth={true}
                            size="large"
                            color='primary'
                        >

                            <Button onClick={() => calculateExpression()}>Enter</Button>
                        </ButtonGroup>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}