import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import Notifications from "@material-ui/icons/Notifications";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Folder from "@material-ui/icons/Folder";
import AttachFile from "@material-ui/icons/AttachFile";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Notifications />
                </CardIcon>
                <p className={classes.cardCategory}>Alerts</p>
                <h3 className={classes.cardTitle}>0</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    View all
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <FavoriteIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Following</p>
                <h3 className={classes.cardTitle}>0</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    View all
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Folder />
                </CardIcon>
                <p className={classes.cardCategory}>Job Diary</p>
                <h3 className={classes.cardTitle}>0</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    View all
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <AttachFile />
                </CardIcon>
                <p className={classes.cardCategory}>Upload CV</p>
              </CardHeader>
              <CardFooter stats>
                <Danger>
                  <Warning />
                </Danger>
                <div className={classes.stats}>Not Uploaded</div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Follow suggestions</h4>
                <p className={classes.cardCategoryWhite}>
                  (More employers who recruit from your discipline)
                </p>
              </CardHeader>
              <CardBody>
                <Card>
                  <CardBody className={classes.cardPlacement}>
                    <GridContainer>
                      <GridItem xs={12} sm={6}>
                        <p>Company Name</p>
                      </GridItem>
                      <GridItem xs={12} sm={6}>
                        <Button color="danger">View hub</Button>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
