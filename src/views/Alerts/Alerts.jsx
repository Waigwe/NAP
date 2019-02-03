import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// @material-ui/icons
import Settings from "@material-ui/icons/Settings";
import Notifications from "@material-ui/icons/Notifications";

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
    }
  },
  cardPlacement: {
    textAlign: "center"
  }
};

class Alerts extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>
                <Notifications />
                My Alerts
              </h4>
              <p className={classes.cardCategoryWhite}>
                Here are the last 30 days alerts from employers you have chosen to 'Follow'.
              </p>
            </CardHeader>
            <CardBody className={classes.cardPlacement}>
              <h4 color="danger"> You have no recent alerts </h4>
              <p>This is because you are not following any employers.</p>
            </CardBody>
            <CardFooter>
              <Button color="danger">
                <Settings />
                Manage your preferences
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

Alerts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Alerts);
