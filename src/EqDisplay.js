import React, { useState, useEffect } from "react";
import "./index.css";
import { equationGen } from "./inital-data";
import EquationSpace from "./EqSpace";
import { DragDropContext } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";
import algebra from "algebra.js";
import { displayExpression } from "./DisplayExpression";
import Equal from "./Equal";
import { Button } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import Calculator from './Calculator'
import Snackbar from './Snackbar'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

var abs = require('math-abs');
export default function EqDisplay(props) {
  const [equation, setEquation] = useState(algebra.parse(equationGen()));
  const [helper, setHelper] = useState(false);
  const [signs, setSigns] = useState(false);
  const [unpack, setUnpack] = useState(false);
  const [calculator, setCalculator] = useState([])
  const [enter, setEnter] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("info");
  const [level] = useState(props.location.state.level);
  const [value, setValue] = useState('change')
  
  function changeAnswer(a, b) {
    setCalculator([a, b]);
  }
  
  function changeEnter() {
    setEnter(!enter)
  }
  
  function changeOpen() {
    setOpen(!open)
  }
  
  function changeMessage(a) {
    setMessage(a)
  }
  
  function changeVariant(a) {
    setVariant(a)
  }
  
  
  
  
  useEffect(() => {
    if (equation.lhs.constants.length === 1 && equation.lhs.terms.length === 0 && equation.rhs.terms.length === 1 && equation.rhs.constants.length === 0) {
      if (equation.rhs.terms[0].coefficients[0].numer === 1) {
        // setFinish(true)
        console.log('finish')
        setMessage("You solved the equation!")
        setVariant("success")
        setOpen(true)
      }
      
    } else if (equation.lhs.constants.length === 0 && equation.lhs.terms.length === 1 && equation.rhs.terms.length === 0 && equation.rhs.constants.length === 1) {
      if (equation.lhs.terms[0].coefficients[0].numer === 1) {
        console.log('finish')
        setMessage("You solved the equation!")
        setVariant("success")
        setOpen(true)
      }
    }
    
  },[equation.lhs.constants.length, equation.lhs.terms, equation.rhs.terms, equation.rhs.constants.length]);
  
  function clickNext() {
    console.log(equation)
    setEquation(algebra.parse(equationGen()))
    setOpen(false)

  }
  
  
  
  if (enter) {
    var lhs = null
    var rhs = null
    var factors_left = new Set(displayExpression(equation.lhs)[1])
    var factors_right = new Set(displayExpression(equation.rhs)[1])
    var factors = Array.from(new Set(
      [...factors_left].filter(x => factors_right.has(x))))
      
      if ((calculator[0] === 'divide' || calculator[0] === 'multiply') && Number(calculator[1]) === 0) {
        setMessage("Cannot ".concat(calculator[0], " by ", "0"))
        setVariant("error")
        setOpen(true)
      }
      else if (level === 'easy' && calculator[0] === 'divide' && !factors.includes(abs(Number(calculator[1])))) {
        setMessage("Cannot ".concat(calculator[0], " by ", calculator[1]))
        setVariant("warning")
        setOpen(true)
    } else {
      if (calculator[0] === 'multiply') {
        lhs = equation.lhs.multiply(Number(calculator[1]))
        rhs = equation.rhs.multiply(Number(calculator[1]))
      } else if (calculator[0] === 'add') {
        lhs = equation.lhs.add(Number(calculator[1]), false)
        rhs = equation.rhs.add(Number(calculator[1]), false)
      } else if (calculator[0] === 'subtract') {
        lhs = equation.lhs.subtract(Number(calculator[1]), false)
        rhs = equation.rhs.subtract(Number(calculator[1]), false)
      }
      else if (calculator[0] === 'divide') {
        lhs = equation.lhs.divide(Number(calculator[1]))
        rhs = equation.rhs.divide(Number(calculator[1]))
      }
      setMessage("".concat(calculator[0], " by ", calculator[1]))
      setVariant("info")
      setOpen(true)
      var newExp = new algebra.Equation(lhs, rhs);
      setEquation(newExp);
      setCalculator([])

    }

    setEnter(false);


  }


  // onDragStart = () => {
  //     document.body.style.color = 'blue';
  //     document.body.style.transition = 'background-color 0.2s ease'
  // }

  // onDragUpdate = update => {
  //     const { destination } = update;
  //     const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0 ;
  //     document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  // }

  const changeMethod = event => {
    setValue(event.target.value);
  };

  const canCombine = equation =>
    !(equation.constants.length > 1 || equation.terms.length > 1)


  const handleSignChange = () => event => {
    setSigns(event.target.checked);

  }

  const handleUnpackChange = () => event => {
    setUnpack(event.target.checked);

  }

  const handleHelperChange = () => event => {
    setHelper(event.target.checked);

  }

  // const changeMethod = (a) => event => {
  //     if (a === "balance"){
  //       setBalance(event.target.checked);
  //       setChange(!event.target.checked);
  //     } else{
  //       setChange(event.target.checked);
  //       setBalance(!event.target.checked);

  //     }
  // }

  const onDragEnd = result => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { destination, source } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const newLhsCards = displayExpression(equation.lhs, "lhs", signs, unpack, helper)[0];
    const newRhsCards = displayExpression(equation.rhs, "rhs", signs, unpack, helper)[0];
    if (destination.droppableId !== source.droppableId) {
      var movedTask = "";
      var lhsOrigin = false;
      var rhsOrigin = false;
      if (value === 'change') {
        lhsOrigin = source.droppableId === "eqspace-lhs";
        rhsOrigin = source.droppableId === "eqspace-rhs";
      }
      if (destination.droppableId === "eqspace-rhs") {
        movedTask = newLhsCards[source.index];
      } else {
        movedTask = newRhsCards[source.index];
      }

      const newLhs = equation.lhs.subtract(movedTask.exp, lhsOrigin);
      const newRhs = equation.rhs.subtract(movedTask.exp, rhsOrigin);
      var newExp = new algebra.Equation(newLhs, newRhs);
      setEquation(newExp);
    }
  };

  const combineEquation = side => {
    var lhs = null;
    var rhs = null;
    if (side === "rhs") {
      rhs = equation.rhs.simplify();
      lhs = equation.lhs;

    } else {
      rhs = equation.rhs
      lhs = equation.lhs.simplify();
    }
    var newExp = new algebra.Equation(lhs, rhs);
    setEquation(newExp);
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid
      style={{margin:20}}
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
         {/* <Grid
        container
        alignItems
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      > */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Methods</FormLabel>
          <RadioGroup aria-label="methods" name="methods" value={value} onChange={changeMethod}>
            <FormControlLabel value='change' control={<Radio color="primary" />} label="Change side, change sign" />
            <FormControlLabel value='balance' control={<Radio color="primary" />} label="balance" />
          </RadioGroup>
        </FormControl>

      {/* </Grid> */}
      {/* <Grid
      style={{marginRight:40}}
        container
        alignItems
        direction="row"
        justify="flex-end"
        alignItems="center"
      > */}
      <Button onClick={() => clickNext()} variant="contained" color="primary">
        Next
      </Button>

      {/* </Grid> */}

      </Grid>
      <Snackbar message={message} variant={variant} open={open} onOpenChange={changeOpen} />
        <Grid container  direction="row" justify="space-around" alignItems="flex-start">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={helper}
                  onChange={handleHelperChange()}
                  value="helper"
                  color="primary"
                />
              }
              label="Helper Mode"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={signs}
                  onChange={handleSignChange()}
                  value="signs"
                  color="primary"
                  disabled={!helper}
                />
              }
              label="Show Signs"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={unpack}
                  onChange={handleUnpackChange()}
                  value="unpack"
                  color="primary"
                  disabled={!helper}
                />
              }
              label="Unpack Variable"
            />

          </FormGroup>
        </Grid>
      <Grid container item direction="row" justify="center" alignItems="center">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid container item direction="row" justify="center" alignItems="center" xs={9}>
            <DragDropContext
              onDragEnd={onDragEnd}
            // onDragStart={this.onDragStart}
            // onDragUpdate={this.onDragUpdate}
            >
              <EquationSpace
                dropId={"eqspace-lhs"}
                expression={equation.lhs}
                side={"lhs"}
                helper={helper}
                showSigns={signs}
                unpackEq={unpack}
                level={level}
              />
              <Equal />
              <EquationSpace
                dropId={"eqspace-rhs"}
                expression={equation.rhs}
                side={"rhs"}
                helper={helper}
                showSigns={signs}
                unpackEq={unpack}
                level={level}
              />
            </DragDropContext>

          </Grid>
          <Grid container item direction="row" justify="center" alignItems="center" xs={3}>
            <Calculator onMessage={changeMessage} onVariant={changeVariant} onOpen={changeOpen} onCalChange={changeAnswer} onEnterChange={changeEnter} />
          </Grid>

        </Grid>

      </Grid>
      <Grid style={{ padding: 20 }} container item direction="row" justify="center" alignItems="center">
        <Grid container item xs={6} direction="row" justify="center" alignItems="center" >
          <Button disabled={canCombine(equation.lhs)} onClick={() => combineEquation('lhs')} variant="contained" color="primary">
            Simplify
          </Button>
        </Grid>
        <Grid container item direction="row" xs={6} justify="center" alignItems="center">
          <Button onClick={() => combineEquation('rhs')} variant="contained" color="primary" disabled={canCombine(equation.rhs)}>
            Simplify
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
