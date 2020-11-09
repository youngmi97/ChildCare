import React from 'react'


export default function Education(props) {

    const education = props.education
    const institute = props.institute
    const history = props.history
    const treatment = props.treatment
    const teacherFeedback = props.teacherFeedback
    const teacherFeedback1 = props.teacherFeedback1


    return (
        <div style={{marginBottom:"40px"}}>
            {education}
            {institute}
            {history}
            {treatment}
            {teacherFeedback}
            {teacherFeedback1}

        </div>
    )
}
