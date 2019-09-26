import React from 'react'

function Title(props) {
    const { tag: Component, text } = props;
    return (
        <Component>
            {text}
        </Component>
    )
}

export default Title
