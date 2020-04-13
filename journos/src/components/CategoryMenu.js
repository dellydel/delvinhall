import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: '0',
        marginRight: 'Auto',
        padding: theme.spacing(2),
        width: "75%"
    },
}));

const CategoryMenu =() => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Button color="inherit" className={classes.button}>Placeholder 1</Button>|
                <Button color="inherit" className={classes.button}>Placeholder 2</Button>|
                <Button color="inherit" className={classes.button}>Placeholder 3</Button>|
                <Button color="inherit" className={classes.button}>Placeholder 4</Button>|
                <Button color="inherit" className={classes.button}>Placeholder 4</Button>
            </div>
        </div>
    );
}

export default CategoryMenu;