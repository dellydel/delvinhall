import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 280,
    },
    serviceFont: {
      fontSize: "20px",
      textAlign: "left"
    }
  });

const ServiceCard = (props) => {
    const classes = useStyles();
    const {serviceName, serviceImgPath, serviceText} = props;

return (
    <Fragment>
    <Card variant="outlined" className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={serviceImgPath}
          title="Test Title"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {serviceName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.serviceFont}>
            {serviceText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More...
        </Button>
      </CardActions>
    </Card>
    </Fragment>
)
}

export default ServiceCard;