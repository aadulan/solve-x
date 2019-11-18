import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';
import { useStyles } from './Styles'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

// props.isDragging ? 'lightgreen : 'white'

//isDragDisabled to allow to conditionally move items 

export default function EqCard(props) {
    const classes = useStyles();

    return (
        <Draggable
            draggableId={props.task.id}
            index={props.index}
            isDragDisabled={props.isDragDisabled}
        >
            {(provided, snapshot) => (


                <Card
                    className={classes.card}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                    // isDragging={snapshot.isDragging}
                >
                    <CardContent>
                        <Typography 
                            className={classes.userSelect} 
                            color='primary' 
                            align='center' 
                            variant='h2'>
                                <TeX math={`${props.task.content}`}/>
                        </Typography>

                    </CardContent>
                </Card>

            )}

        </Draggable>

    )
}