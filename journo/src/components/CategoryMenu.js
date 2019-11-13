import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}));

export default function CategoryMenu() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button color="inherit" className={classes.button}>Category 1</Button>|
            <Button color="inherit" className={classes.button}>Category 2</Button>|
            <Button color="inherit" className={classes.button}>Category 3</Button>|
            <Button color="inherit" className={classes.button}>Category 4</Button>
        </div>
    );
}