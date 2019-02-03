import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import { DatePicker } from "material-ui-pickers";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// others
/* eslint-disable */
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// pick utils
import DateFnsUtils from '@date-io/date-fns';

import avatar from "assets/img/faces/marc.jpg";

const degreeSubjects = [
  {
    value: "Aerospace",
    label: "Aerospace"
  },
  {
    value: "Chemical/Process",
    label: "Chemical/Process"
  },
  {
    value: "Civil/Building",
    label: "Civil/Building"
  },
  {
    value: "Computing/Technology",
    label: "Computing/Technology"
  },
  {
    value: "Electronic&Electrical",
    label: "Electronic&Electrical"
  },
  {
    value: "Materials&Minerals",
    label: "Materials&Minerals"
  },
  {
    value: "Mechanical/Manufacturing",
    label: "Mechanical/Manufacturing"
  },
  {
    value: "Sciences/Maths",
    label: "Sciences/Maths"
  }
];

const degreeTypes = [
  {
    value: "Certificate",
    label: "Certificate"
  },
  {
    value: "Diploma",
    label: "Diploma"
  },
  {
    value: "Bachelors",
    label: "Bachelors"
  },
  {
    value: "Masters",
    label: "Masters"
  },
  {
    value: "Doctorate",
    label: "Doctorate"
  }
];

const styles = theme => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class UserProfile extends React.Component {
  state = {
    degreeSubject: "",
    degreeType: "",
    selectedDate: new Date(),
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>My Account</h4>
                <p className={classes.cardCategoryWhite}>
                Are your account details up-to-date?
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Username"
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="First Name"
                      id="first-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Last Name"
                      id="last-name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="University"
                      id="university"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="select-degree-subject"
                      select
                      label="Degree Subject"
                      className={classes.textField}
                      onChange={this.handleChange("degreeSubject")}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      margin="normal"
                    >
                      {degreeSubjects.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <TextField
                      id="select-degree-type"
                      select
                      label="Degree Type"
                      className={classes.textField}
                      // value={this.state.degreeType}
                      onChange={this.handleChange("degreeType")}
                      SelectProps={{
                        native: true,
                        MenuProps: {
                          className: classes.menu
                        }
                      }}
                      margin="normal"
                    >
                      {degreeTypes.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                        label="Graduation Year"
                        // value={selectedDate}
                        onChange={this.handleChange("selectedDate")}
                        className={classes.textField}
                        animateYearScrolling
                        openToYearSelection = "true"
                      />
                    </MuiPickersUtilsProvider>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="danger">Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>Alec Thompson</h6>
                {/* <h4 className={classes.cardTitle}>Alec Thompson</h4> */}
                <p className={classes.description}>
                  Don"t be scared of the truth because we need to restart the
                  human foundation in truth.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(UserProfile);
