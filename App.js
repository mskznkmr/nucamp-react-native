import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configStore';

const store = ConfigureStore();


export default function App() {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
}