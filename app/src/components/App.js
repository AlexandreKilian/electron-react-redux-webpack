import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import '../styles/app.scss';

class App extends Component {
    render() {
        const { history } = this.props;
        return (
                <ConnectedRouter history={history}>
                    <h1>Hello React! Hello Electron!</h1>
                </ConnectedRouter>
        );
    }
}


App.propTypes = {
    history: PropTypes.any.isRequired
};

export default App;
