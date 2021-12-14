import React, { useState, useEffect } from 'react';
import '../../Styles/index.css';
import { equationGen } from '../Utils/inital-data';
import EquationSpace from './EqSpace';
import { DragDropContext } from 'react-beautiful-dnd';
import Grid from '@material-ui/core/Grid';
import algebra from 'algebra.js';
import { displayExpression } from '../Utils/DisplayExpression';
import Equal from './Equal';
import { Button } from '@material-ui/core';
import Snackbar from '../Utils/Snackbar';
import AppBar from './AppBar';
import Calculator from '../Calculator/Calculator';
import TextBox from '../TextBox/textBox';
import { useParams } from 'react-router-dom';
import WorkingOut from '../WorkingOut/WorkingOut';

var abs = require('math-abs');
var floor = require('math-floor');

function EqDisplay() {
  let { id } = useParams();
  const [equation, setEquation] = useState(algebra.parse(equationGen(id)));
  const [helper, setHelper] = useState(false);
  const [signs, setSigns] = useState(false);
  const [unpack, setUnpack] = useState(false);
  const [calculator, setCalculator] = useState([]);
  const [enter, setEnter] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('info');
  const level =
    window.location.hash === '#/level1' || window.location.hash === '#/level2'
      ? 'easy'
      : 'hard';
  const [freeStyle] = useState(window.location.hash);
  const [value, setValue] = useState('change');
  const [divideLeft, setDivideLeft] = useState(false);
  const [divideRight, setDivideRight] = useState(false);
  const [workingOut, setWorkingOut] = useState([]);

  function changeAnswer(a, b) {
    setCalculator([a, b]);
  }

  function changeEnter() {
    setEnter(!enter);
  }

  function changeOpen() {
    setOpen(!open);
  }

  function changeMessage(a) {
    setMessage(a);
  }

  function changeVariant(a) {
    setVariant(a);
  }

  function changeEquation(a) {
    setEquation(a);
    setWorkingOut([]);
  }

  useEffect(() => {
    if (
      equation.lhs.constants.length === 1 &&
      equation.lhs.terms.length === 0 &&
      equation.rhs.terms.length === 1 &&
      equation.rhs.constants.length === 0
    ) {
      if (
        equation.rhs.terms[0].coefficients[0].numer === 1 &&
        equation.lhs.constants[0].numer === equation.solveFor('x').numer &&
        equation.lhs.constants[0].denom === equation.solveFor('x').denom
      ) {
        setMessage('You solved the equation!');
        setVariant('success');
        setOpen(true);
      }
    } else if (
      equation.lhs.constants.length === 0 &&
      equation.lhs.terms.length === 1 &&
      equation.rhs.terms.length === 0 &&
      equation.rhs.constants.length === 1
    ) {
      if (
        equation.lhs.terms[0].coefficients[0].numer === 1 &&
        equation.rhs.constants[0].numer === equation.solveFor('x').numer &&
        equation.rhs.constants[0].denom === equation.solveFor('x').denom
      ) {
        setMessage('You solved the equation!');
        setVariant('success');
        setOpen(true);
      }
    }
  }, [
    equation.lhs.constants.length,
    equation.lhs.terms,
    equation.rhs.terms,
    equation.rhs.constants.length,
    equation,
  ]);

  function clickNext() {
    setEquation(algebra.parse(equationGen(id)));
    setWorkingOut([]);
    setOpen(false);
  }

  if (enter) {
    var lhs = null;
    var rhs = null;
    var factors_left = new Set(displayExpression(equation.lhs)[1]);
    var factors_right = new Set(displayExpression(equation.rhs)[1]);
    var factors = Array.from(
      new Set([...factors_left].filter((x) => factors_right.has(x))),
    );

    if (
      (calculator[0] === 'divide' || calculator[0] === 'multiply') &&
      Number(calculator[1]) === 0
    ) {
      setMessage('Cannot '.concat(calculator[0], ' by ', '0'));
      setVariant('error');
      setOpen(true);
    } else if (
      level === 'easy' &&
      calculator[0] === 'divide' &&
      !factors.includes(abs(Number(calculator[1])))
    ) {
      setMessage('Cannot '.concat(calculator[0], ' by ', calculator[1]));
      setVariant('warning');
      setOpen(true);
    } else {
      if (calculator[0] === 'multiply') {
        lhs = equation.lhs.multiply(Number(calculator[1]));
        rhs = equation.rhs.multiply(Number(calculator[1]));
        setMessage(''.concat(calculator[0], ' by ', calculator[1]));
      } else if (calculator[0] === 'add') {
        lhs = equation.lhs.add(Number(calculator[1]), false);
        rhs = equation.rhs.add(Number(calculator[1]), false);
        setMessage(''.concat(calculator[0], ' ', calculator[1]));
      } else if (calculator[0] === 'subtract') {
        lhs = equation.lhs.subtract(Number(calculator[1]), false);
        rhs = equation.rhs.subtract(Number(calculator[1]), false);
        setMessage(''.concat(calculator[0], ' ', calculator[1]));
      } else if (calculator[0] === 'divide') {
        lhs = equation.lhs.divide(Number(calculator[1]), false);
        rhs = equation.rhs.divide(Number(calculator[1]), false);
        setMessage(''.concat(calculator[0], ' by ', calculator[1]));
      }
      setVariant('info');
      setOpen(true);
      var newExp = new algebra.Equation(lhs, rhs);
      setWorkingOut([...workingOut, equation.toTex()]);
      setEquation(newExp);
      setDivideLeft(true);
      setDivideRight(true);
    }
    setCalculator([]);
    setEnter(false);
  }

  function calculateFactors(integer) {
    var inte = abs(integer);
    var factors = [],
      quotient = 0;

    for (var i = 1; i <= inte; i++) {
      quotient = inte / i;

      if (quotient === floor(quotient)) {
        factors.push(i);
      }
    }
    return factors;
  }

  function getIntersections(one, two) {
    var constants = calculateFactors(one).filter(
      (e) => calculateFactors(two).indexOf(e) !== -1,
    );
    const valueToRemove = 1;
    const filteredItems = constants.filter((item) => item !== valueToRemove);
    return filteredItems.length !== 0;
  }

  const changeMethod = (s) => {
    setValue(s);
  };

  const canCombine = (equation) =>
    !(
      equation.constants.length > 1 ||
      equation.terms.length > 1 ||
      (equation.constants.length === 1 &&
        (equation.constants[0].numer % equation.constants[0].denom === 0 ||
          getIntersections(equation.constants[0].numer, equation.constants[0].denom)) &&
        equation.constants[0].denom !== 1) ||
      (equation.terms.length === 1 &&
        (equation.terms[0].coefficients[0].numer %
          equation.terms[0].coefficients[0].denom ===
          0 ||
          getIntersections(
            equation.terms[0].coefficients[0].numer,
            equation.terms[0].coefficients[0].denom,
          )) &&
        equation.terms[0].coefficients[0].denom !== 1)
    );

  const handleSignChange = (event) => {
    setSigns(event.target.checked);
  };

  const handleUnpackChange = (event) => {
    setUnpack(event.target.checked);
  };

  const handleHelperChange = (event) => {
    setHelper(event.target.checked);
  };

  const textBox = () => (
    <TextBox
      onChangeEquation={changeEquation}
      onChangeMessage={changeMessage}
      onChangeVariant={changeVariant}
      onChangeOpen={changeOpen}
    />
  );

  const canCreate = freeStyle === '#/level5';
  const createEquation = canCreate ? textBox() : '';

  const onDragEnd = (result) => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';
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
    const newLhsCards = displayExpression(equation.lhs, 'lhs', signs, unpack, helper)[0];
    const newRhsCards = displayExpression(equation.rhs, 'rhs', signs, unpack, helper)[0];
    if (destination.droppableId !== source.droppableId) {
      var movedTask = '';
      var lhsOrigin = false;
      var rhsOrigin = false;
      if (value === 'change') {
        lhsOrigin = source.droppableId === 'eqspace-lhs';
        rhsOrigin = source.droppableId === 'eqspace-rhs';
      }
      if (destination.droppableId === 'eqspace-rhs') {
        movedTask = newLhsCards[source.index];
      } else {
        movedTask = newRhsCards[source.index];
      }

      const newLhs = equation.lhs.subtract(movedTask.exp, lhsOrigin);
      const newRhs = equation.rhs.subtract(movedTask.exp, rhsOrigin);
      var newExp = new algebra.Equation(newLhs, newRhs);
      setWorkingOut([...workingOut, equation.toTex()]);
      setEquation(newExp);
    }
  };

  const combineEquation = (side) => {
    var lhs = null;
    var rhs = null;
    if (side === 'rhs') {
      rhs = equation.rhs.simplify();
      lhs = equation.lhs;
      if (rhs.terms.length === 0 && rhs.constants.length === 0) {
        rhs = new algebra.Expression('0');
      }
      setDivideRight(false);
    } else {
      rhs = equation.rhs;
      lhs = equation.lhs.simplify();

      if (lhs.terms.length === 0 && lhs.constants.length === 0) {
        lhs = new algebra.Expression('0');
      }
      setDivideLeft(false);
    }

    var newExp = new algebra.Equation(lhs, rhs);
    setWorkingOut([...workingOut, equation.toTex()]);
    setEquation(newExp);
  };

  return (
    <React.Fragment>
      <Grid
        id={id}
        style={{ height: '100%' }}
        container
        direction="column"
        justifyContent="flex-start"
      >
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
          />
          <Snackbar
            message={message}
            variant={variant}
            open={open}
            onOpenChange={changeOpen}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          style={{ marginTop: 10, marginLeft: 10 }}
        >
          {createEquation}
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: 20, marginBottom: 20 }}
        >
          <WorkingOut workingOut={workingOut} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ overflow: 'hidden' }}
        >
          <DragDropContext onDragEnd={onDragEnd}>
            <EquationSpace
              dropId={'eqspace-lhs'}
              expression={equation.lhs}
              side={'lhs'}
              helper={helper}
              showSigns={signs}
              unpackEq={unpack}
              level={level}
            />
            <Equal />
            <EquationSpace
              dropId={'eqspace-rhs'}
              expression={equation.rhs}
              side={'rhs'}
              helper={helper}
              showSigns={signs}
              unpackEq={unpack}
              level={level}
            />
          </DragDropContext>
        </Grid>
        <Grid
          style={{ margin: 20 }}
          container
          item
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Button
              disabled={canCombine(equation.lhs, divideLeft)}
              onClick={() => combineEquation('lhs')}
              variant="contained"
              color="primary"
            >
              Simplify Left
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={canCombine(equation.rhs, divideRight)}
              onClick={() => combineEquation('rhs')}
              variant="contained"
              color="primary"
            >
              Simplify Right
            </Button>
          </Grid>
        </Grid>
        <Grid
          style={{ margin: 20 }}
          direction="row"
          container
          item
          justifyContent="center"
          alignItems="center"
        >
          <Button onClick={() => clickNext()} variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
      <div
        style={{
          display: 'block',
          position: 'fixed',
          top: 200,
          right: 50,
          height: 0,
          cursor: 'move',
        }}
      >
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
export default EqDisplay;
