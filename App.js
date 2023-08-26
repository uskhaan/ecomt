import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {MenuProvider} from 'react-native-popup-menu';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainAppNav from './src/navigation';
import store, {persistor} from './src/redux/store/store';

const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <PaperProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MenuProvider>
            <MainAppNav />
          </MenuProvider>
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
};

export default App;
