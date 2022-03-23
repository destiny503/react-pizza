import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/app.scss';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render(
    <BrowserRouter basename="/react-pizza">
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);