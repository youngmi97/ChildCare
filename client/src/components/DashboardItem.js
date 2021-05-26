import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import AssessmentIcon from "@material-ui/icons/Assessment";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventNoteIcon from "@material-ui/icons/EventNote";
//import VisibilityIcon from '@material-ui/icons/Visibility';
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import EmailForm from "../components/EmailForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
}));

export default function IconButtons(props) {
  const history = useHistory();

  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const openEmail = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="primary"
        onClick={() =>
          history.push({ pathname: "./assessment", state: { user: props.id } })
        }
      >
        <AssessmentIcon />
      </IconButton>
      <IconButton color="primary">
        <VideoLibraryIcon
          onClick={() =>
            history.push({ pathname: "./stt", state: { user: props.id } })
          }
        />
      </IconButton>
      <IconButton color="secondary">
        <EventNoteIcon
          onClick={() =>
            history.push({ pathname: "./diary", state: { user: props.id } })
          }
        />
      </IconButton>
      <IconButton color="secondary" onClick={openEmail}>
        <EmailIcon />
      </IconButton>
      <IconButton color="default">
        <DeleteIcon />
      </IconButton>
      <div className={classes.paper}>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={open}>
            <EmailForm email={props.email} />
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
