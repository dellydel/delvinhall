import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import HeaderNav from './HeaderNav';
import AdBar from './AdBar';
import Blog from './Blog';
import Users from './Users';

import '../App.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
});

document.title = 'Journos';

const Journos = () => {
    let match = useRouteMatch();
    return (
        <div className={styles.root}>
            <HeaderNav/>
            <AdBar/>
            <Switch>
                <Route path={`${match.path}/blog`}>
                    <Blog/>
                </Route>
                <Route path={`${match.path}/users`}>
                    <Users/>
                </Route>
                <Route path={`${match.path}`}>
                    <Blog/>
                </Route>
            </Switch> 
        </div>
    )
}

export default withStyles(styles)(Journos);