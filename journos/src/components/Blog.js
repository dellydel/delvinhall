import React from 'react';
import '../App.css';
import EntryPreview from './EntryPreview';
import CategoryMenu from './CategoryMenu';
import Tags from './Tags';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    gridContainer: {
        paddingTop: theme.spacing(2),
    },
    buttonGroup: {
        paddingLeft: theme.spacing(2),
    }
});

class Blog extends React.Component {
    render() {
        return (
            <div>
                <CategoryMenu></CategoryMenu>
                <div className={styles.gridContainer}>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <EntryPreview></EntryPreview>
                            <EntryPreview></EntryPreview>
                        </Grid>
                        <Grid item xs={3}>
                            <Tags></Tags>
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.buttonGroup}>
                    <button onClick={()=>{this.onGetText}}>Get Text</button>
                    <button onClick={()=>{this.onFormatSelectedText}}>Format Selected Text</button>
                    <button onClick={()=>{this.onMakeSelectionLink}}>Make Selection Link</button>
                    <button onClick={()=>{this.onMakeParagraphLink}}>Make Paragraph Link</button>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Blog);