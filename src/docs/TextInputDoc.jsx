import React from 'react'
import { TextInput } from '../components'

function TextInputDoc() {

    return (
        <div>
            <h1>TextInput</h1>
            <h2>The TextInput Component is simple to use native <span className="demo-code">input</span> element for creating interactive form control</h2>
            <p>TextInput component can be used using <strong>{`<TextInput></TextInput>`}</strong> tag</p>
            {/* Props Table */}
            <p><strong>Props</strong></p>
            <table className="propTable">
                <tbody>
                    <tr><th>Prop Name</th><th>Type</th><th>Description</th></tr>
                    <tr>
                        <td>name <small>(required)</small></td>
                        <td>string</td>
                        <td>The input's name, to identify the input in the data submitted with the form's data</td>
                    </tr>
                    <tr>
                        <td>type <small>(required)</small></td>
                        <td>string</td>
                        <td>A string indicating which input type the element represents</td>
                    </tr>
                    <tr>
                        <td>placeholder</td>
                        <td>string</td>
                        <td>The placeholder attribute lets you specify a text that appears within the element's content area itself when empty</td>
                    </tr>
                    <tr>
                        <td>onChange</td>
                        <td>function</td>
                        <td>onChange function returns the current value of the input component</td>
                    </tr>
                </tbody>
            </table>
            {/* Default Button Demo */}
            <div className="demo-container">
                <h3><strong>TextInput</strong> can be standalone using</h3>
                <code>{`<TextInput name="fullName" type="text" placeholder="Enter your name" />`}</code>
                <div className="demo-ui">
                    <TextInput name="fullName" type="text" placeholder="Enter your name" />
                </div>
            </div>



        </div>
    )
}

export default TextInputDoc
