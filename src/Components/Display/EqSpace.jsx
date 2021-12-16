import React, { useState, useEffect } from 'react';
import EqCard from './EqCard';
import { Droppable } from 'react-beautiful-dnd';
import { displayExpression } from '../Utils/DisplayExpression';
import { useStyles } from '../../Styles/Styles';
import { Card, Grid } from '@mui/material';

export default function EquationSpace(props) {
  const [dragDisabled, setDragDisabled] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    setDragDisabled(displayExpression(props.expression, props.side)[0].length === 1);
  }, [props.expression, props.side]);

  return (
    <Card className={classes.eqSpaceCard}>
      <Droppable droppableId={props.dropId} direction="horizontal">
        {(provided) => (
          <Grid
            className={classes.drop}
            direction="row"
            container
            item
            justifyContent="center"
            alignItems="center"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {displayExpression(
              props.expression,
              props.side,
              props.showSigns,
              props.unpackEq,
              props.helper,
              props.level,
            )[0].map((task, index) => (
              <EqCard
                key={task.id}
                task={task}
                index={index}
                {...props}
                isDragDisabled={dragDisabled}
              />
            ))}
            {provided.placeholder}
          </Grid>
        )}
      </Droppable>
    </Card>
  );
}
