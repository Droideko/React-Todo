import React from 'react';
import './app.sass';
import ToDoContainer from '../todo-container';

const App = ({data}) => (
   <ToDoContainer data={data}/>   
);

export { App };