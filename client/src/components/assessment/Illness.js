import React from 'react'

export default function Illness(props) {
    
    const illnessAtBirth = props.illnessAtBirth
    const illnessAtBirth1 = props.illnessAtBirth1
    const illness = props.illness
    const illness1 = props.illness1
    const surgery = props.surgery
    const surgery1 = props.surgery1
    const medication = props.medication
    const medication1 = props.medication1

    return (
        <div>
            {illnessAtBirth} <br />
            {illnessAtBirth1} <br />
            {illness} <br />
            {illness1} <br />
            {surgery} <br />
            {surgery1} <br />
            {medication} <br />
            {medication1} <br />
        </div>
    )
}
