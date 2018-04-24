import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Minimal Boilerplate for React';

ReactDOM.render(
    <div> {title}</div>,
    document.getElementById('app')
);

module.hot.accept();