import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useStyles } from '../../Styles/Styles';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import { Card, CardContent, Typography } from '@mui/material';

//isDragDisabled to allow to conditionally move items

export default function EqCard(props) {
  const classes = useStyles();

  return (
    <Draggable
      draggableId={props.task.id}
      index={props.index}
      isDragDisabled={props.isDragDisabled}
    >
      {(provided) => (
        <Card
          className={classes.card}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          // isDragging={snapshot.isDragging}
        >
          <CardContent>
            <Typography
              style={{ color: '#424242' }}
              className={classes.userSelect}
              align="center"
              variant="h3"
            >
              <TeX math={`${props.task.content}`} />
            </Typography>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}
