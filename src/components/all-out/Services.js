import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import e1 from "../../assets/all-out/e1.jpg";
import e2 from "../../assets/all-out/e2.jpg";
import e3 from "../../assets/all-out/e3.jpg";
import Grid from "@material-ui/core/Grid";
import ServiceCard from "./ServiceCard";

const useStyles = makeStyles({
  root: {
    marginBottom: "50px",
  },
  servicesHeader: {
    textAlign: "left",
    fontFamily: "Montserrat Alternates, sans-serif",
    fontWeight: 700,
    fontSize: "45px",
  }
});

const Services = () => {
  const classes = useStyles();
  return (
    <Fragment>
    <h2 className={classes.servicesHeader}>Services</h2>
      <Grid
        className={classes.root}
        container
        direction="row"
        spacing={3}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={4}>
           <ServiceCard
          serviceTitle="Service 1"
          serviceText="Sed blandit enim eget nisi fringilla hendrerit. Etiam vitae velit interdum"
          serviceImgPath={e1}
        />
        </Grid>
        <Grid item xs={4}>
           <ServiceCard
          serviceTitle="Service 1"
          serviceText="lobortis est quis, rhoncus libero. Vivamus lobortis ipsum sed ex luctus"
          serviceImgPath={e2}/>
        </Grid>
        <Grid item xs={4}>
          <ServiceCard
          serviceTitle="Service 1"
          serviceText="Sed blandit enim eget nisi fringilla hendrerit. Etiam vitae velit interdum"
          serviceImgPath={e3}/>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Services;
