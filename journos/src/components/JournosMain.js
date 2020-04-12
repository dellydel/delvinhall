import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import HeaderNav from './HeaderNav';
import AdBar from './AdBar';
import Blog from './Blog';
import Users from './Users';
import Journos from 'journos.dev.js';

import '../App.css';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
});

document.title = 'Journos';

class JournosMain extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.root}>
                <HeaderNav onToUsers={() => {this.toUsers()}}/>
                <AdBar/>
                <Switch>
                    <Route path={`${this.props.match.path}/blog`}>
                        <Blog onGetText={Journos.getText}
                            onFormatSelectedText={Journos.formatSelectedText}
                            onMakeSelectionLink={Journos.makeSelectionLink}
                            onMakeParagraphLink={Journos.makeParagraphLink}/>
                    </Route> */}
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
}

export default withStyles(styles)(JournosMain);