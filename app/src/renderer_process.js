import React from 'react'
import {render} from 'react-dom'

import configureStore from './store/configureStore';
import history from './routing/history';

import Root from './components/Root';
import './global.scss'

const store = configureStore(history);

render(
    <Root store={store} history={history} />,
    document.getElementById('app')
)
