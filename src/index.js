import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'Minimal Boilerplate for React';

ReactDOM.render(
    <App> {title}</App>,
    document.getElementById('app')
);

module.hot.accept();