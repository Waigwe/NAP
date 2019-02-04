/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    },
  cardPlacement: {
    alignItems: 'center'
  }
  }
};

class NewEmployers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    this.alertTimeout = setTimeout(
      function() {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      6000
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="danger">
          <h4 className={classes.cardTitleWhite}>
          <BookmarkBorder/>
          New Employers</h4>
          <p className={classes.cardCategoryWhite}>
            New employers from the last 30 days' on Gradcracker that typically recruit from your discipline.
          </p>
        </CardHeader>
        <CardBody className={classes.cardPlacement}>
              <Card>
              <CardBody className={classes.cardPlacement}>
              <GridContainer>
        <GridItem xs={12} sm={6}>
        <p>
                Company Name and description
              </p></GridItem>
              <GridItem xs={12} sm={6}>
              <Button color="danger">
                View hub
              </Button></GridItem>
              </GridContainer>
              
              
              </CardBody>
              </Card>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(NewEmployers);
