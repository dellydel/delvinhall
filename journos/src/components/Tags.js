import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    tags: {
        listStyleType:"none"
    },
    tagItem: {
        marginBottom: "15px"
    }
}));

export default function Tags() {
    const classes = useStyles();
    return ( 
        <Paper className={classes.root}>
            <ul className={classes.tags}>
                <li className={classes.tagItem}>Placeholder 1</li>
                <li className={classes.tagItem}>Placeholder 2</li>
                <li className={classes.tagItem}>Placeholder 3</li>
                <li className={classes.tagItem}>Placeholder 4</li>
                <li className={classes.tagItem}>Placeholder 5</li>
            </ul>
        </Paper>
    );
}