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
import Search from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";

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

class Following extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>
                <FavoriteIcon /> Following
              </h4>
              <p className={classes.cardCategoryWhite}>
                You will receive alerts whenever your 'Followed' employers have imminent deadlines/post new opportunities.
              </p>
            </CardHeader>
            <CardBody className={classes.cardPlacement}>
              <h4 color="danger"> You are not following any employers </h4>
              <p>
                Here are some employers who recruit from your discipline.... 
              </p>
            </CardBody>
            <CardFooter>
              <Button color="danger">
                <Search />
                View all employers
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

Following.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Following);
