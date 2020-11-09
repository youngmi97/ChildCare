import React, { useState, useEffect } from "react";
import IconButton from '@material-ui/core/IconButton'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';



function Player(props) {

    const [played ,setPlayed] = useState(false);
    

    const [buttonColor, setColor] = useState("primary");
    const url = props.url
    console.log(props)

    const useAudio = url => {
        const [audio] = useState(new Audio(url));
        

        const [playing, setPlaying] = useState(false);
        const toggle = () => {
            setPlaying(!playing);
            setPlayed(true);
          }
      
        useEffect(() => {
            playing ? audio.play() : audio.pause();
            if(played)  setColor("default")
          },
        );
      
        useEffect(() => {
          audio.addEventListener('ended', () => setPlaying(false));
          return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
          };
        }, []);
      
        return [playing, toggle];
      };

  const [playing, toggle] = useAudio(url);

    return (
        <div>
            <IconButton color={buttonColor} onClick={
                toggle
            }>
                <PlayCircleOutlineIcon /> 
            </IconButton>
        </div>
      );

};

export default Player;


