import React, { useState, useCallback } from 'react';
import FormContext from '../FormContext';
import Button from './Button';
import Title from './Title';

function Form(props) {
    const [formData, setFormData] = useState({})
    const { onSubmit: onSubmitProp } = props;

    const handleFormUpdate = useCallback((name, value) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData.name])

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp(formData)
    }

    return (
        <FormContext.Provider value={{ updateForm: handleFormUpdate }}>
            <form onSubmit={handleSubmit}>
                <Title tag="h1" text="Form Components" />
                {props.children}
                <Button type="submit" label="Submit Form" />
            </form>
        </FormContext.Provider >
    );
}

export default React.memo(Form)
