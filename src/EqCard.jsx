import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';

// props.isDragging ? 'lightgreen : 'white'

//isDragDisabled to allow to conditionally move items 

export default function EqCard(props) {

    return (
        <Draggable
            draggableId={props.task.id}
            index={props.index}
            isDragDisabled={props.isDragDisabled}
        >
            {(provided, snapshot) => (


                <Card style={{ border: '1px', borderStyle: 'solid', padding: '10px', margin: 10, width: '300px' }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    innerRef={provided.innerRef}
                    // isDragging={snapshot.isDragging}
                >
                    <CardContent>
                        <Typography color='primary' align='center' variant='h1' style={{userSelect:'none'}} >
                            {props.task.content}
                        </Typography>

                    </CardContent>
                </Card>

            )}

        </Draggable>

    )
}