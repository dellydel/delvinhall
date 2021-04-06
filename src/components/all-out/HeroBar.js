import React, { Fragment } from "react";
import dessert from 'assets/all-out/dessert.png'
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
       height: "500px",
       backgroundImage: `url(${dessert})`,
       backgroundRepeat: "no-repeat",
       borderRadius: 8,
       backgroundPosition: "right",
       paddingLeft: "15%",
       paddingRight: "15%",
       textAlign: "left",
       marginRight: "15%"
    },
    heroHeader: {
        paddingTop: "105px",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "65px",
    },
    allOutButton: {
        marginTop:"5px",
        textTransform: "uppercase",
    },
    heroText: {
        marginTop: "20px",
        marginBottom: "30px",
        width: "50%",
    }
}));

const HeroBar = () => {
    const {root, heroHeader, allOutButton, heroText} = useStyles();
    return (
        <Fragment>
            <div className={root}>
            <div className={heroHeader}>[All Out Catering<br/>Motto Here]</div>
            <p className={heroText}>a sem ut, fringilla malesuada risus. Sed blandit enim eget nisi fringilla hendrerit. Etiam vitae velit interdum, lobortis est quis, rhoncus libero. Vivamus lobortis ipsum sed ex luctus, sit amet ullamcorper dolor ultrices.</p>
            <Button variant="contained" color="primary" className={allOutButton} size="large">
                View Our Services
            </Button>
            </div>
        </Fragment>
    )
}

export default HeroBar;