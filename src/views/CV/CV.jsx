import React from "react";
import PropTypes from "prop-types";
import FileUploader from "react-firebase-file-uploader";
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
import LibraryAdd from "@material-ui/icons/LibraryAdd";
import Search from "@material-ui/icons/Search";

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

class CV extends React.Component {
  state = {
    isUploading: false,
    progress: 0
  };

//   handleChangeUsername = event =>
//     this.setState({ username: event.target.value });

//   handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
// handleProgress = (progress) => this.setState({progress});
// handleUploadError = (error) => {
// this.setState({isUploading: false});
// console.error(error);
// }
// handleUploadSuccess = (filename) => {
// this.setState({avatar: filename, progress: 100, isUploading: false});
// firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
// };

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>
                <LibraryAdd />
                Upload CV
              </h4>
              <p className={classes.cardCategoryWhite}>
                Many of our employers use our CV database. They can also see who
                'Follows' them when searching through CVs.
              </p>
            </CardHeader>
            <CardBody className={classes.cardPlacement}>
              <h4 color="danger"> Upload CV </h4>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

CV.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CV);
