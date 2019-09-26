import React from 'react'
import { Button } from '../components'

function ButtonDoc() {
    const handleClick = () => {
        alert(`Button Clicked`)
    }
    return (
        <div>
            <h1>Button</h1>
            <h2>The Button Component is simple to use native <span className="demo-code">button</span> and has additional range of colors</h2>
            <p>Button component can be used using <strong>{`<Button></Button>`}</strong> tag</p>
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
                        <td>The default behavior of the button. Possible values are
                            <span className="code">submit</span>,
                            <span className="code">button</span>
                        </td>
                    </tr>
                    <tr>
                        <td>onClick</td>
                        <td>function</td>
                        <td>Triggers the <span className="code">onclick</span> event occurs when the user clicks on the button element</td>
                    </tr>
                </tbody>
            </table>
            {/* Default Button Demo */}
            <div className="demo-container">
                <h3><strong>Default Buttons</strong> can be created using</h3>
                <code>{`<Button onClick={handleClick} type="button" label="Default button" />`}</code>
                <div className="demo-ui">
                    <Button onClick={handleClick} type="button" label="Default button" />
                </div>
            </div>
            {/* Color Button Demo */}
            <div className="demo-container">
                <h3><strong>Color Buttons</strong> can be created using the <span className="demo-code">color</span> prop</h3>
                <code>{`<Button onClick={handleClick} type="button" color="red" label="Red button" />`}</code>
                <div className="demo-ui">
                    <Button onClick={handleClick} type="button" color="red" label="Red button" />
                    <Button onClick={handleClick} type="button" color="blue" label="Blue button" />
                    <Button onClick={handleClick} type="button" color="green" label="Green button" />
                    <Button onClick={handleClick} type="button" color="yellow" label="Yellow button" />
                    <Button onClick={handleClick} type="button" color="black" label="Black button" />
                </div>
            </div>


        </div>
    )
}

export default ButtonDoc
