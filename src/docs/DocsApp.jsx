import React from 'react';
import FormDoc from './FormDoc';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ButtonDoc from './ButtonDoc';
import TextInputDoc from './TextInputDoc';

function DocsApp() {

    const leftSidebarStyles = {
        flex: 2,
        minHeight: '100vh',
        backgroundColor: '#B71C1C',
        color: '#fff'
    }

    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <div style={leftSidebarStyles}>
                    <div>
                        <h3 style={{ textAlign: 'center', paddingTop: '2em' }}>User Interface Components</h3>
                    </div>
                    <div className="navBar">
                        <ul>
                            <li><Link to="/button">Button</Link></li>
                            <li><Link to="/text-input">TextInput</Link></li>
                            <li><Link to="/form">Form</Link></li>
                        </ul>
                    </div>
                </div>
                <div style={{ flex: 10, padding: '5em' }}>
                    <Route path="/" exact component={FormDoc} />
                    <Route path="/form" component={FormDoc} />
                    <Route path="/button" component={ButtonDoc} />
                    <Route path="/text-input" component={TextInputDoc} />
                </div>
            </div>
        </Router>


    );
}

export default DocsApp;
