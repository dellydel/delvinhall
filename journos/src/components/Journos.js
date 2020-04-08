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

class Journos extends React.Component {
    getText() {
        var selectedText = getSelectedText();
        if (selectedText.length) {
            alert(selectedText);
        }
    }
                 
    formatSelectedText(color) {
        var selectedText = window.getSelection();
        let range = selectedText.getRangeAt(0);
    
        let newNode = document.createElement('b');
        newNode.style.color = color;
        try {
            range.surroundContents(newNode);
        } catch (e) { alert(e) }
    }
        
    makeParagraphLink() {
        var selectedText = window.getSelection();
        let range = selectedText.getRangeAt(0);
        let anchorTag = document.createElement('a');
        anchorTag.href = '';
        anchorTag.title = 'updated ' + new Date().toLocaleDateString();
    
        var el = range.commonAncestorContainer;
        // (el.nodeType === Node.TEXT_NODE) {
        //    el = el.parentNode;
        //}
    
        el.parentNode.insertBefore(anchorTag, el);
        anchorTag.appendChild(el);
        //el.classList.add('challengeLink');
    }
        
    makeSelectionLink() {
        var selectedText = window.getSelection();
        let range = selectedText.getRangeAt(0);
    
        let anchorTag = document.createElement('a');
        anchorTag.href = '';
        anchorTag.title = 'updated ' + new Date().toLocaleDateString();
        try {
            range.surroundContents(anchorTag);
        } catch (e) { alert(e) }
    }
        
       
    getSelectedText() {
        var selectedText = "";
        if (window.getSelection) {
            selectedText = window.getSelection().toString();
        }
        else if (document.getSelection) {
            selectedText = document.getSelection();
        }
        else if (document.selection) {
            selectedText =
                document.selection.createRange().text;
        }
        return selectedText;
    }
    
    render() {
        return (
            <div className={styles.root}>
                <HeaderNav/>
                <AdBar/>
                <Switch>
                    <Route path={"/blog"}>
                        <Blog onGetText={this.getText}
                            onFormatSelectedText={this.formatSelectedText}
                            onMakeSelectionLink={this.makeSelectionLink}
                            onMakeParagraphLink={this.makeParagraphLink}/>
                    </Route>
                    <Route path={"/users"}>
                        <Users/>
                    </Route>
                    <Route path={"/"}>
                        <Blog onGetText={this.getText}    
                            onFormatSelectedText={this.formatSelectedText}                        onFormatText={this.formatSelectedText}
                            onMakeSelectionLink={this.makeSelectionLink}
                            onMakeParagraphLink={this.makeParagraphLink}/>
                    </Route>
                </Switch> 
            </div>
        )
    }
}

export default withStyles(styles)(Journos);