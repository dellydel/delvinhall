import React from 'react';
import './App.css';
import HeaderNav from './components/HeaderNav';
import EntryPreview from './components/EntryPreview';
import CategoryMenu from './components/CategoryMenu';
import AdBar from './components/AdBar';
import Tags from './components/Tags';
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
            <AdBar></AdBar>
            <CategoryMenu></CategoryMenu>
            <div className={classes.gridContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={9}>
                        <EntryPreview></EntryPreview>
                    </Grid>
                    <Grid item xs={3}>
                        <Tags></Tags>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default App;
