import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "10px",
        marginBottom: "10px",
        padding: "25px",
        height:"100px",
        border: "1px grey solid",
        backgroundColor: "lightGrey"
    },
}));

const AdBar = () => {
    const classes = useStyles();
    return ( 
        <div className = { classes.root }>
            Advertisement Bar
        </div>
    );
}

export default AdBar;