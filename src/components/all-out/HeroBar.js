import React, { Fragment } from "react";
import dessert from '../../assets/all-out/dessert.png'
import { makeStyles, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
       height: "400px",
       backgroundImage: `url(${dessert})`,
       backgroundSize: "450px",
       backgroundRepeat: "no-repeat",
       borderRadius: 8,
       backgroundPosition: "right",
       textAlign: "left",
    },
    heroHeader: {
        paddingTop: "85px",
        fontFamily: "Montserrat Alternates, sans-serif",
        fontWeight: 700,
        fontSize: "65px",
    },

    heroText: {
        marginTop: "10px",
        width: "50%",
        fontSize: "20px",
        padding: "6px"
    }
}));

const HeroBar = () => {
    const {root, heroHeader, allOutButton, heroText} = useStyles();
    return (
        <Fragment>
            <div className={root}>
            <div className={heroHeader}>All Out Catering</div>
            <Typography variant="body2" color="textSecondary" component="p" className={heroText}>
                We love catering your special event. Your every demand and every need is catered. Every dish will be created at it's best. The food you eat should be perfect and this is our responsibility.
            </Typography>
            <Button color="primary" className={allOutButton}>
                View Our Services
            </Button>
            </div>
        </Fragment>
    )
}

export default HeroBar;