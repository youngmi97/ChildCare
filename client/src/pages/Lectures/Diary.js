import React from 'react'
import {Grid, Card} from "@material-ui/core"


export default function Diary() {
    return (
        <div>
            <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}>
                <Card style={{width:"80%", height="100%"}}>
                    <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}>
                    </Grid>
                    
                </Card>

            </Grid>
        </div>
    )
}
