import React, { useState, useEffect, useContext, useCallback } from 'react'
import FormContext from '../FormContext';

function TextInput(props) {

    const {
        name,
        type,
        placeholder,
        initialValue,
        onChange: onChangeProp = () => { }
    } = props;
    const form = useContext(FormContext);

    const [value, setValue] = useState(initialValue);

    const handleOnChange = useCallback(
        (e) => {
            setValue(e.target.value)
        },
        [],
    )

    useEffect(() => {
        onChangeProp(value)
        if (form) {
            form.updateForm(name, value)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <div style={{ marginBottom: '10px' }}>
            <input
                style={{ height: '30px', width: '100%' }}
                name={name}
                type={type}
                defaultValue={value}
                onChange={handleOnChange}
                placeholder={placeholder}
            ></input>
        </div>
    )
}

export default React.memo(TextInput)
