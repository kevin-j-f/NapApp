import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Route, Switch } from 'react-router-native';
import createNapAppStore from './store';
import napAppReducer from './reducer';

import Home from './home/Home';
import Nap from './nap/NapContainer';

class App extends Component {
    constructor() {
        super();

        this.store = createNapAppStore(napAppReducer);
    }
    render() {
        return (
            <Provider store={ this.store }>
                <NativeRouter>
                    <Switch>
                        <Route path={ '/nap' } component={ Nap } />
                        <Route exact path={ '/' } component={ Home } />
                    </Switch>
                </NativeRouter>
            </Provider>
        );
    }
}

export default App;