/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/components/reduxConfig/store';
import {PersistGate} from 'redux-persist/integration/react';
import persistor from './src/components/reduxConfig/store';
import AppNavigation from './src/components/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};
export default App;
