import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./Redux/store";

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


reportWebVitals();
