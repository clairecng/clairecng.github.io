import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function Home() {
    const classes = useStyles();

    return (
        <Paper  classes={classes}>
            hello
        </Paper>
    );
}

export default Home;
