import React, { useState } from 'react';
import { Form, TextInput } from '../components';

function FormDoc() {

    const [value, setValue] = useState('')

    const handleChange = (value) => {
        setValue(value)
    }

    const handleSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className="App">
            <Form onSubmit={handleSubmit}>
                <TextInput
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                />
                <TextInput
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                />
            </Form>
            <h1>Text input Without form</h1>
            <TextInput
                name="address"
                type="text"
                placeholder="Enter your Address"
                onChange={handleChange}
            />
            {value}
        </div>
    );
}

export default FormDoc;
