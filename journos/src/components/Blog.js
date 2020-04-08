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

const Blog = (props) =>  {
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
                    <button onClick={props.onGetText}>Get Text</button>
                    <button onClick={()=> props.onFormatSelectedText("blue")}>Format Selected Text</button>
                    <button onClick={props.onMakeSelectionLink}>Make Selection Link</button>
                    <button onClick={props.onMakeParagraphLink}>Make Paragraph Link</button>
                </div>
            </div>
        )
    }

export default withStyles(styles)(Blog);