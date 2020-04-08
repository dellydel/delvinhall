import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
    },
    appBar: {
        minHeight: 74
    }
}));

const HeaderNav = () => {
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <AppBar position="static" color="default" className={styles.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={styles.title}>
                        JOURNOS.js
                    </Typography>
                    <Button color="inherit" className={styles.button}>Admin</Button>
                    <Button color="inherit" className={styles.button}>Register</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default HeaderNav;