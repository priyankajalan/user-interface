import React from 'react'

function Button(props) {
    const {
        type,
        label,
        onClick: onClickProp = () => { },
        color = 'gray'
    } = props;

    const getColor = {
        'gray': '#BDBDBD',
        'red': '#B71C1C',
        'blue': '#1565C0',
        'green': '#388E3C',
        'yellow': '#FDD835',
        'black': '#212121'
    }

    const getTextColor = () => {
        if (color === 'red' || color === 'blue' || color === 'green' || color === 'black') {
            return '#fff'
        } else {
            return '#000'
        }
    }

    const buttonStyles = {
        width: '200px',
        height: '35px',
        backgroundColor: getColor[color],
        color: getTextColor(),
        fontSize: '1em'
    }


    return (
        <button
            type={type}
            onClick={onClickProp}
            style={buttonStyles}
        >{label}</button>
    )
}

export default Button
