import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import AssessmentIcon from "@material-ui/icons/Assessment";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
//import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
}));

export default function IconButtons() {
  
  const history = useHistory();


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton color="primary" 
        onClick = { () => history.push('./assessment')}>
        <AssessmentIcon />
      </IconButton>
      <IconButton color="primary">
        <VideoLibraryIcon />
      </IconButton>
      <IconButton color="secondary">
        <EmailIcon />
      </IconButton>
      <IconButton color="default">
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
