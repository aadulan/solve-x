import React, { useState, useEffect } from "react";
import "./index.css";
import { equationGen } from "./inital-data";
import EquationSpace from "./EqSpace";
import { DragDropContext } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";
import algebra from "algebra.js";
import { displayExpression } from "./DisplayExpression";
import Equal from "./Equal";
import { Button, Typography } from "@material-ui/core";
import Snackbar from './Snackbar'
import AppBar from './Drawer'
import Calculator from './Calculator'

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
  const [ogEquation, setogEquation] = useState(equation)


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
        setMessage("You solved the equation!")
        setVariant("success")
        setOpen(true)
      }

    } else if (equation.lhs.constants.length === 0 && equation.lhs.terms.length === 1 && equation.rhs.terms.length === 0 && equation.rhs.constants.length === 1) {
      if (equation.lhs.terms[0].coefficients[0].numer === 1) {
        setMessage("You solved the equation!")
        setVariant("success")
        setOpen(true)
      }
    }

  }, [equation.lhs.constants.length, equation.lhs.terms, equation.rhs.terms, equation.rhs.constants.length]);

  function clickNext() {
    setEquation(algebra.parse(equationGen()))
    setogEquation(equation)
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

    }

    setCalculator([])
    setEnter(false);


  }


  // const onDragStart = event => {
  //   event.preventDefault()
  //     // document.body.style.color = 'blue';
  //     // document.body.style.transition = 'background-color 0.2s ease'
  // }

  // const onDragUpdate = update => {
  //     // const { destination } = update;
  //     // const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0 ;
  //     document.body.style.backgroundColor = `rgba(153, 141, 217, 1)`;
  // }

  // const changeMethod = event => {
  //   setValue(event.target.value);
  // };

  const changeMethod = s => {
    setValue(s);
  };

  const canCombine = equation =>
    !(equation.constants.length > 1 || equation.terms.length > 1)


  const handleSignChange = event => {
    setSigns(event.target.checked);
    console.log(signs)

  }

  const handleUnpackChange = event => {
    setUnpack(event.target.checked);

  }

  const handleHelperChange = event => {
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
    <React.Fragment>
      <Grid style={{ height: '100%' }} container direction="column" justify="flex-start">
        <Grid item container>
          <AppBar
            onCalMessage={changeMessage}
            onCalVariant={changeVariant}
            onCalOpen={changeOpen}
            onCalChange={changeAnswer}
            onCalEnterChange={changeEnter}

            onChangeUnpack={handleUnpackChange}
            onChangeSigns={handleSignChange}
            onChangeHelper={handleHelperChange}
            onChangeMethod={changeMethod}
          // style={{ display: 'inline-block' }}
          />
          <Snackbar message={message} variant={variant} open={open} onOpenChange={changeOpen} />
        </Grid>
        {/* <Grid container direction="column" justify="center" alignItems="center"> */}
        <Grid item container xs>
          <Grid item container direction="row" justify="center" alignItems="center">
            <DragDropContext
              onDragEnd={onDragEnd}
            // onDragStart={onDragStart}
            // onDragUpdate={onDragUpdate}
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
          <Grid container item direction="row" justify="space-around" alignItems="center" >
            <Grid item>
              <Button disabled={canCombine(equation.lhs)} onClick={() => combineEquation('lhs')} variant="contained" color="primary">
                Simplify
            </Button>
            </Grid>
            <Grid item>
              <Button onClick={() => combineEquation('rhs')} variant="contained" color="primary" disabled={canCombine(equation.rhs)}>
                Simplify
            </Button>
            </Grid>
          </Grid>
          <Grid direction="row" container item justify="center" alignItems="center" >
            <Button onClick={() => clickNext()} variant="contained" color="primary">
              Next
          </Button>
          </Grid>

        </Grid>
        {/* </Grid> */}
      </Grid>
      <div style={{display:'block', position:'fixed', top: 200, right: 50, height:0, cursor:'move'}}>

        <Calculator
          onMessage={changeMessage}
          onVariant={changeVariant}
          onOpen={changeOpen}
          onCalChange={changeAnswer}
          onEnterChange={changeEnter}
        />
      </div>
    </React.Fragment>
  );
}
