import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HeaderNav from './HeaderNav';
import AdBar from './AdBar';
import Blog from './Blog';
import Users from './Users';
import Journos from '../../js/journos/journos.dev';
import '../../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}))

const JournosMain = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HeaderNav/>
            <AdBar/>
            <Switch>
                <Route path={`${this.props.match.path}/blog`}>
                    <Blog onGetText={Journos.getText}
                        onFormatSelectedText={Journos.formatSelectedText}
                        onMakeSelectionLink={Journos.makeSelectionLink}
                        onMakeParagraphLink={Journos.makeParagraphLink}/>
                </Route> 
                <Route path={`${this.props.match.path}/users`}> 
                    <Users/>
                </Route> 
                <Route path={`${this.props.match.path}`}>
                    <Blog onGetText={Journos.getText}    
                        onFormatSelectedText={Journos.formatSelectedText}                        
                        onFormatText={Journos.formatSelectedText}
                        onMakeSelectionLink={Journos.makeSelectionLink}
                        onMakeParagraphLink={Journos.makeParagraphLink}/>
                </Route>
            </Switch>
        </div>
    )
}

export default JournosMain;