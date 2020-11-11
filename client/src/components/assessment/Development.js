import React from 'react'

export default function Development(props) {

    const walkingAge = props.walkingAge
    const speakingAge = props.speakingAge
    const speakingAgeSentence = props.speakingAgeSentence
    const developmentProblem = props.developmentProblem
    const developmentProblem1 = props.developmentProblem1
    const muscleProblem = props.muscleProblem
    const muscleProblem1 = props.muscleProblem1
    
    return (
        <div>
            {walkingAge} <br />
            {speakingAge} <br />
            {speakingAgeSentence} <br />
            {developmentProblem} <br />
            {developmentProblem1} <br />
            {muscleProblem} <br />
            {muscleProblem1} <br />
        </div>
    )
}
