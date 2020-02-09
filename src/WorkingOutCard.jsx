import React from 'react'
import { Card, Typography, CardContent, CardActionArea } from "@material-ui/core";
import TeX from '@matejmazur/react-katex';



export default function WorkingOutCard(props) {
    return (
        <Card variant="outlined" >
            <CardActionArea >
                <CardContent>
                    <Typography variant="h5" align='center'>
                        <TeX math={`${props.step}`} />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}


