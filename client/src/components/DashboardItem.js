import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import AssessmentIcon from '@material-ui/icons/Assessment';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
//import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton color="primary">
        <AssessmentIcon />
      </IconButton>
      <IconButton color="primary">
        <VideoLibraryIcon />
      </IconButton>
      <IconButton color="secondary">
        <EmailIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      
    </div>
  );
}