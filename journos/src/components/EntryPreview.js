import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        color: theme.palette.text.secondary,
    },
}));

export default function HeaderNav() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <h3>SIZE NINE LEFT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a semper turpis.
                Morbi ultrices nulla ut aliquet gravida. Cras ac lobortis dui. Curabitur elementum
                risus id massa aliquet, et sollicitudin turpis efficitur. Nunc fermentum venenatis
                tincidunt. Integer nec imperdiet urna, ac tincidunt lacus. Duis id mollis sem,
                at semper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <p>Aliquam erat volutpat. Phasellus consequat nisl at diam ultricies dictum. Nunc vel
                nisi orci. Donec in auctor est. Aliquam ac nisl sit amet eros lobortis condimentum
                et sed purus. Fusce vitae eros suscipit, fermentum libero id, rhoncus nisl.
                Cras non purus elementum, semper dui id, ullamcorper nisl. Donec sodales varius
                odio mattis luctus.
            </p>
        </Paper>
    );
}