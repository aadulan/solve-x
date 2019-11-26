import React, { useState } from "react";
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
import Calculator from './NewCalculator'


export default function EqDisplay(props) {
  const [equation, setEquation] = useState(algebra.parse(equationGen()));
  const [helper, setHelper] = useState(false);
  const [signs, setSigns] = useState(false);
  const [unpack, setUnpack] = useState(false);
  const [calculator, setCalculator] = useState([])
  const [enter, setEnter] = useState(false);

  function changeAnswer(a,b) {
    setCalculator([a,b]);
  }

  function changeEnter(){
    setEnter(!enter)
  }

  if(enter){
    console.log(calculator[0])
    var lhs = null
    var rhs = null
    if(calculator[0] === 'multiply'){
      lhs = equation.lhs.multiply(Number(calculator[1])).simplify()
      rhs = equation.rhs.multiply(Number(calculator[1])).simplify()
    } else if (calculator[0] === 'divide'){
      lhs = equation.lhs.divide(Number(calculator[1])).simplify()
      rhs = equation.rhs.divide(Number(calculator[1])).simplify()
    }
    else if (calculator[0] === 'add'){
      lhs = equation.lhs.add(Number(calculator[1])).simplify()
      rhs = equation.rhs.add(Number(calculator[1])).simplify()
    } else if (calculator[0] === 'subtract'){
      lhs = equation.lhs.subtract(Number(calculator[1])).simplify()
      rhs = equation.rhs.subtract(Number(calculator[1])).simplify()
    }
    // lhs = equation.lhs.eval(calculator[0])(calculator[1])
    // rhs = equation.rhs.eval(calculator[0])(calculator[1])
    var newExp = new algebra.Equation(lhs, rhs);
    setEquation(newExp);
    setCalculator([])
    setEnter(false);


  }
  // if(props.eq !== []){
  //   var sign = props.eq[0]
  //   var number = props.eq[1]
  //   var rhs = equation.rhs.sign(number)
  //   var lhs = equation.lhs.sign(number)
  //   var newExp = new algebra.Equation(lhs, rhs);
  //   setEquation(newExp);

  
  // }

  // onDragStart = () => {
  //     document.body.style.color = 'blue';
  //     document.body.style.transition = 'background-color 0.2s ease'
  // }

  // onDragUpdate = update => {
  //     const { destination } = update;
  //     const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0 ;
  //     document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  // }

  const canCombine = equation => {
    console.log(equation)
    var hasOneTerm = null;
    var hasOneConstant = null;
    if(equation.constants.length === 1){
      hasOneConstant = true;
    } else {
      hasOneConstant = false;
    }
    if (equation.terms.length === 1){
      hasOneTerm = true;
    }else {
      hasOneTerm = false;
    }

    return hasOneTerm || hasOneConstant
  }

  const handleSignChange = () => event => {
    console.log(event);
    setSigns(event.target.checked);

  }

  const handleUnpackChange = () => event => {
    console.log(event);
    setUnpack(event.target.checked);

  }

  const handleHelperChange = () => event => {
    console.log(event);
    setHelper(event.target.checked);

  }

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
    const newLhsCards = displayExpression(equation.lhs, "lhs", signs, unpack, helper);
    const newRhsCards = displayExpression(equation.rhs, "rhs", signs, unpack, helper);
    if (destination.droppableId !== source.droppableId) {
      var movedTask = "";
      const lhsOrigin = source.droppableId === "eqspace-lhs";
      const rhsOrigin = source.droppableId === "eqspace-rhs";
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

  const combineEquation = side =>{
      var lhs = null;
      var rhs = null;
      if (side === "rhs"){
          rhs = equation.rhs.simplify();
          lhs = equation.lhs;
            
      } else {
        rhs = equation.rhs
        lhs = equation.lhs.simplify();
      }
      var newExp = new algebra.Equation(lhs, rhs);
      setEquation(newExp);
  }

//   const unpackEquation = side =>{
//     var lhs = null;
//     var rhs = null;
//     if (side === "rhs"){
//         rhs = equation.rhs.simplify();
//         lhs = equation.lhs;
          
//     } else {
//       rhs = equation.rhs
//       lhs = equation.lhs.simplify();
//     }
//     var newExp = new algebra.Equation(lhs, rhs);
//     setEquation(newExp);
// }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid container item direction="row" justify="center" alignItems="center">
        <Grid container item direction="row" justify="center" alignItems="center" xs={9}>
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
          />
          <Equal />
          <EquationSpace
            dropId={"eqspace-rhs"}
            expression={equation.rhs}
            side={"rhs"}
            helper={helper}
            showSigns={signs}
            unpackEq={unpack}
          />
        </DragDropContext>
        <Grid container item direction="row" justify="center" alignItems="center" xs={3}>
          <Calculator onCalChange={changeAnswer} answer={calculator} enter={enter} onEnterChange={changeEnter} />
        </Grid>
      </Grid>
      <Grid style={{padding:20}} container item direction="row" justify="center" alignItems="center">
        <Grid container item xs={6} direction="row" justify="center" alignItems="center" >
          <Button disabled={canCombine(equation.lhs)} onClick={() => combineEquation('lhs')} variant="contained" color="primary">
            Combine
          </Button>
        </Grid>
        <Grid container item direction="row"  xs={6} justify="center" alignItems="center">
          <Button  onClick={() => combineEquation('rhs')} variant="contained" color="primary" disabled={canCombine(equation.rhs)}>
            Combine
          </Button>
        </Grid>
        {/* <Grid container item direction="row"  xs={6} justify="center" alignItems="center">
          <div style={{width:'33%'}}></div>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
