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

export default function EqDisplay(props) {
  const [equation, setEquation] = useState(algebra.parse(equationGen()));

  // onDragStart = () => {
  //     document.body.style.color = 'blue';
  //     document.body.style.transition = 'background-color 0.2s ease'
  // }

  // onDragUpdate = update => {
  //     const { destination } = update;
  //     const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0 ;
  //     document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
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
    const newLhsCards = displayExpression(equation.lhs, "lhs");
    const newRhsCards = displayExpression(equation.rhs, "rhs");

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

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid container item direction="row" justify="center" alignItems="center">
        <DragDropContext
          onDragEnd={onDragEnd}
          // onDragStart={this.onDragStart}
          // onDragUpdate={this.onDragUpdate}
        >
          <EquationSpace
            dropId={"eqspace-lhs"}
            expression={equation.lhs}
            side={"lhs"}
          />
          <Equal />
          <EquationSpace
            dropId={"eqspace-rhs"}
            expression={equation.rhs}
            side={"rhs"}
          />
        </DragDropContext>
      </Grid>
      <Grid container item direction="row" justify="center" alignItems="flex-start">
        <Grid container item xs={6} direction="row" justify="center" >
          <Button disabled={displayExpression(equation.lhs, "lhs").length === 1} onClick={() => combineEquation('lhs')} variant="contained" color="primary">
            Combine
          </Button>
        </Grid>
        <Grid container item direction="row"  xs={6} justify="center">
          <Button  onClick={() => combineEquation('rhs')} variant="contained" color="primary" disabled={displayExpression(equation.rhs, "rhs").length === 1}>
            Combine
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
