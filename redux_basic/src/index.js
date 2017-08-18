import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './views/ControlPanel';
import './index.css';

import store from './Store'
import Provider from './Provider'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
