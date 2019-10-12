import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import EqCard from './EqCard'
import { Droppable } from 'react-beautiful-dnd';
import { displayExpression } from './index.js'
//list of components transition : background colour 0.2 sease
// props.isDragging ? 'lightgreen : 'white'

export default function EquationSpace(props) {

    const [dragDisabled, setDragDisabled] = useState(false)

    useEffect(() => {
        setDragDisabled(displayExpression(props.expression, props.side).length === 1)
    }, [props.expression, props.side])

    return (
        <Card style={{ padding: '20px', maxWidth: '1000px', borderStyle: 'solid', borderWidth: '1px', backgroundColor: '#e3f2fd'}}>
            <Droppable
                droppableId={props.dropId}
                direction="horizontal"

            >
                {(provided, snapshot) => (
                    <Grid
                        direction="row"
                        container
                        item
                        justify="center"
                        alignItems="center"
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        // isDraggingOver={snapshot.isDraggingOver}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        {displayExpression(props.expression, props.side).map((task, index) => (
                            <EqCard key={task.id} task={task} index={index} {...props} isDragDisabled={dragDisabled} />
                        ))}
                        {provided.placeholder}
                    </Grid>
                )}

            </Droppable>
        </Card>

    )

}
