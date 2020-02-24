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
                        innerRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        // isDragging={snapshot.isDragging}
                    >
                        <CardContent>
                            <Typography 
                            style={{color:"#424242"}}
                                className={classes.userSelect} 
                                align='center' 
                                variant='h3'>
                                    <TeX math={`${props.task.content}`}/>
                            </Typography>

                        </CardContent>
                    </Card>


            )}

        </Draggable>

    )
}