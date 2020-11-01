import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      width: '700px',
      height: '850px',
      margin: '60px 0',
      float: 'right'
    },
  },
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" />
    </div>
  );
}