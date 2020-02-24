import React from "react"
import { Grid, Typography, Divider } from "@material-ui/core";

export default function ModalSection(props) {
    return (
        <Grid container direction="column">
            <Grid item>
                <Divider style={{marginTop: 12, marginBottom: 12}} variant="fullWidth" />
            </Grid>
            <Grid item >
                <Typography align="left" variant="h6">
                    {props.title}
                </Typography>
                {props.info}
            </Grid>

        </Grid>
    )
}