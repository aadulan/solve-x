import React, { useState } from 'react';
import './index.css';
import { equationGen } from './inital-data'
import EquationSpace from './EqSpace'
import { DragDropContext } from 'react-beautiful-dnd';
import Grid from '@material-ui/core/Grid';
import algebra from 'algebra.js'
import { displayExpression } from './DisplayExpression'
import Equal from './Equal'

export default function EqDisplay(props){
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
      document.body.style.color = 'inherit';
      document.body.style.backgroundColor = 'inherit';
      const { destination, source } = result;

      if (!destination) {
          return;
      }
      if (destination.droppableId === source.droppableId && destination.index === source.index) {
          return;
      }
      const newLhsCards = displayExpression(equation.lhs, 'lhs');
      const newRhsCards = displayExpression(equation.rhs, 'rhs');

      if(destination.droppableId !== source.droppableId){
          var movedTask = '';
          if(destination.droppableId === 'eqspace-rhs'){
              movedTask = newLhsCards[source.index]
          }else {
              movedTask = newRhsCards[source.index]
          }
          const newLhs = equation.lhs.subtract(movedTask.exp)
          const newRhs = equation.rhs.subtract(movedTask.exp)
          var newExp = new algebra.Equation(newLhs, newRhs) 
          setEquation(newExp)
      
      }
  }


  return (
      <Grid container
          direction="row"
          justify="center"
          alignItems="center"
      >
          <DragDropContext
              onDragEnd={onDragEnd}
          // onDragStart={this.onDragStart}
          // onDragUpdate={this.onDragUpdate}
          >
                  <EquationSpace
                      dropId={'eqspace-lhs'}
                      expression={equation.lhs}
                      side={'lhs'}
                      />
                      <Equal/>
                      {/* <Typography style={{margin: 10}} variant='h1'>
                          =
                      </Typography> */}
                  <EquationSpace
                      dropId={'eqspace-rhs'}
                      expression={equation.rhs}
                      side={'rhs'}
                      />
          </DragDropContext>
      </Grid>

);
}


