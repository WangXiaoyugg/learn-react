import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';



import './index.css';

import store from './Store';
import ControlPanel from './views/ControlPanel';


ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
