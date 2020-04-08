import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    tags: {
        paddingLeft: theme.spacing(10),
        listStyleType: "none"
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
                <br /><br />
                <li className={classes.tagItem}>Placeholder 5</li>
                <li className={classes.tagItem}>Placeholder 6</li>
                <li className={classes.tagItem}>Placeholder 7</li>
                <li className={classes.tagItem}>Placeholder 8</li>
            </ul>
        </Paper>
    );
}