import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import ReactAudioPlayer from "react-audio-player";

function Player(props) {
  const [played, setPlayed] = useState(false);

  const [buttonColor, setColor] = useState("primary");
  const url = props.url;

  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));

    const [playing, setPlaying] = useState(false);
    const toggle = () => {
      setPlaying(!playing);
      setPlayed(true);
    };

    useEffect(() => {
      playing ? audio.play() : audio.pause();
      if (played) setColor("default");
    });

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, toggle];
  };

  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <IconButton color={buttonColor} onClick={toggle}>
        {playing === true ? (
          <PauseCircleOutlineIcon />
        ) : (
          <PlayCircleOutlineIcon />
        )}
      </IconButton>
    </div>
  );
}

export default Player;
