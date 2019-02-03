import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'

const Router = (props) =>
(
    <BrowserRouter>
        {props.children}
    </BrowserRouter>
)


export default Router