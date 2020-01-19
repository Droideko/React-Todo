import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const data = [
   {label: 'Read a book', done: 'false', id: 1},
   {label: 'Play football', done: 'false', id: 2},
   {label: 'Have a lunch', done: 'false', id: 3}
];

ReactDOM.render(<App data={data}/>, document.getElementById('root'));