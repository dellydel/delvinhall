import React from 'react';
import './App.css';
import HeaderNav from './components/HeaderNav';
import EntryPreview from './components/EntryPreview';
import CategoryMenu from './components/CategoryMenu';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    gridContainer: {
        paddingTop: theme.spacing(2),
    }
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HeaderNav></HeaderNav>
            <CategoryMenu></CategoryMenu>
            <div className={classes.gridContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <EntryPreview></EntryPreview>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.paper}>TODO: right hand side content</div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default App;
