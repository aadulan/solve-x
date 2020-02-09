import React from 'react'
import { Card, Typography, CardContent, CardActionArea, Grid } from "@material-ui/core";
import TeX from '@matejmazur/react-katex';
import ListItem from '@material-ui/core/ListItem';



export default function WorkingOutCard(props) {
    return (
        <ListItem>
            <Card  style={{width:"100%"}} variant="outlined" >
                <CardActionArea >
                    <CardContent>
                        {/* <Grid container direction="row" justify="space-between">
                            <Grid  item>
                            <Typography variant="h5" align='left'>
                                <TeX math={`${props.i}`} />.
                            </Typography> */}
                        {/* </Grid>
                        <Grid item  > */}
                            <Typography variant="h5" align='center'>
                                <TeX math={`${props.step}`} />
                            </Typography>
                        {/* </Grid>  
                        </Grid> */}
                    </CardContent>
                </CardActionArea>
            </Card>

        </ListItem>

    )
}


