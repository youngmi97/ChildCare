import React, { Component } from 'react'
import ReactAudioPlayer from 'react-audio-player';


class Audio extends Component {
    render() {
        return (
            <ReactAudioPlayer
                src="/NWR 수정.mp3"
                controls
            />
        )
    }
}

export default Audio
