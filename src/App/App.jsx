import React, {useState, useEffect} from 'react';
import { List } from '../Component/List/List.jsx';
import './App.css';
import { initFields, getUsers } from './AppData.jsx';

export const App = () => {
  initFields();
  return (
    <List elements={getUsers()}/>
  );
};