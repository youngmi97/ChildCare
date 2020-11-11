import React from 'react'


export default function Personal(props) {


    const name = props.name
    const gender= props.gender
    const dateOfBirth= props.dateOfBirth
    const broSis = props.broSis
    const impaired = props.impaired
    const impairment = props.impairment
    const primaryLanguage = props.primaryLanguage
    const schoolLanguage = props.schoolLanguage
    const problem = props.problem
    const reason = props.reason
    const improvement = props.improvement
    const awareness= props.awareness


    return (
        <div style={{marginBottom:"40px"}}>
            {name} <br />{gender} <br />{dateOfBirth} <br />{broSis} <br />{impaired}
            <br />{impairment} <br />{primaryLanguage} <br />{schoolLanguage}<br />
            {problem} <br />{reason} <br />{improvement} <br />{awareness}

        </div>
    )
}
