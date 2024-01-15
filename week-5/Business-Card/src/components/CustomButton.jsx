/* eslint-disable no-unused-vars */
import React from 'react'

function CustomButton(buttonDetails) {
    return (
        <a href={buttonDetails.handleLink}
            target="_blank" rel="noopener noreferrer"
        ><button>{buttonDetails.handleName}</button></a>
    )
}

export default CustomButton