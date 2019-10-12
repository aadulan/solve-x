import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { equationGen } from './inital-data'
import EquationSpace from './EqSpace'
import * as serviceWorker from './serviceWorker';
import { DragDropContext } from 'react-beautiful-dnd';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import algebra from 'algebra.js'

export const displayExpression = (expression, side) => {
    var tasks = []
    
    expression.terms.forEach(t => {
        tasks.push({
            id: `${side}-variable-${t.variables[0].variable}`, 
            content: t.coefficients[0].numer + t.variables[0].variable, 
            exp: t 
        });            
    }); 
    // const [c] = expression.constants
    // if(c){
        //     tasks.push({id: `${props.side}-num-${c.numer}`, content: c.numer});
        // }
        
        expression.constants.forEach(c => {
            tasks.push({id: `${side}-num-${c.numer}`, content:c.numer, exp: c});            
        }); 

        return tasks;
        
    }


function App(props) {
    
    // const [data, setData] = useState(equationGen());
    const [equation, setEquation] = useState(algebra.parse(equationGen()));
    // const [lhsDrag, setLhsDrag] = useState(false);
    // const [rhsDrag, setRhsDrag] = useState(false);

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
                        <Typography style={{margin: 10}} variant='h1'>
                            =
                        </Typography>
                    <EquationSpace
                        dropId={'eqspace-rhs'}
                        expression={equation.rhs}
                        side={'rhs'}
                        />
            </DragDropContext>
        </Grid>


    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
