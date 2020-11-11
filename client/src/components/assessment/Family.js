import React from 'react'

export default function Family(props) {

    const familyHistory = props.familyHistory
    const familyMember = props.familyMember

    return (
        <div>
            {familyHistory}<br />
            {familyMember}
        </div>
    )
}
