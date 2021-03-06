import React from 'react';
import logo from './logo.png';

export default () =>
  <React.Fragment>
    <img src={logo} style={{ height: 96, marginBottom: 12 }} alt='' />
    <img src='https://img.shields.io/npm/v/use-object.svg' alt='' />
    <h1>use-object</h1>
    <p>A custom React hook that lets you <mark>manipulate an object data structure</mark> without needing extra utilities.</p>
    <p>Start with:</p>
    <p><code>npm install --save use-object</code></p>
  </React.Fragment>;
