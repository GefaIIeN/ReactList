import React from 'react';

import { List } from '../Component/List/List';
import { initFields, getUsers } from './AppData';

import './App.scss';

export const App = () : JSX.Element => {
  initFields();
  return (
    <List elements={getUsers()}/>
  );
};