import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, CardContent, Card, CardHeader, Fab } from '@material-ui/core';
import { Button, ButtonGroup } from "@material-ui/core";
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 350,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


export default function Calculator(props) {
    const classes = useStyles();
    const [number, setNumber] = useState("")
    const [sign, setSign] = useState("")
    const [isPositive, setPositive] = useState("+")
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const emptyText = () => {
        setNumber("")
        setSign("")
    }

    const addNumberSign = () => {
        if (isPositive === "+") {
            setPositive("-")
        } else {
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

        } else if (sign === "×") {
            newSign = "multiply"
        } else if (sign === "+") {
            newSign = "add"
        } else if (sign === "-") {
            newSign = "subtract"
        }

        props.onCalChange(newSign, isPositive.concat(number))
        if (newSign === '' || number === '') {
            props.onMessage("Number or sign empty!")
            props.onVariant("error")
            props.onOpen(true)
        } else {
            props.onEnterChange(true);
            setNumber("")
            setSign("")

        }
    }

    return (
        <Draggable>
            <Card className={classes.root}>
                {/* <Typography>
                Equation Changer
                </Typography> */}
                <CardActions disableSpacing>
                <DragIndicatorIcon/>
                <CardHeader
                    title="Equation Changer"
                />
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>


                    <CardContent>

                        <Grid container direction='column' justify='center' align='center'>
                            <Grid container direction='row'>
                                <Card style={{ width: '100%' }}>
                                    <CardContent>
                                        {/* <Grid container direction='column' justify='center' align='center'> */}
                                        <Grid container direction='row' justify='flex-start' align='center'>
                                            <Fab style={{ marginRight: 20 }} onClick={() => addNumberSign()} size="small" color="primary" aria-label="add">
                                                ±
                                        </Fab>
                                            {/* <Grid item> */}
                                            <Typography style={{ marginRight: "auto" }} align="left" variant="h6">
                                                {isPositive}
                                                {number}
                                            </Typography>
                                            {/* </Grid> */}
                                            <Typography align="right" variant="h6">
                                                {sign}
                                            </Typography>
                                        </Grid>

                                        {/* </Grid> */}
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
                                <ButtonGroup
                                    fullWidth={true}
                                    size="large"
                                    color='primary'
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
                </Collapse>
            </Card>
        </Draggable>
    )
}