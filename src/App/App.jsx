import React, {useState, useEffect} from 'react';
import {List} from '../List/List.jsx';
import './App.css';

export const InitialList = [
 {
   id: 'a',
   firstname: 'Гарри ',
   lastname: 'Поттер ',
   birthday: '31.07.1980 ',
 },
 {
   id: 'b',
   firstname: 'Гермиона ',
   lastname: 'Грейнджер',
   birthday: '19.09.1979 ',
 },
 {
   id: 'c',
   firstname: 'Рон ',
   lastname: 'Уизли ',
   birthday: '01.05.1980 ',
 },
 {
   id: 'd',
   firstname: 'Драко ',
   lastname: 'Малфой ',
   birthday: '31.08.1980 ',
 },
 {
   id: 'e',
   firstname: 'Дафна ',
   lastname: 'Гринграсс ',
   birthday: '09.01.1960 ',
 },
];

export const App = (props) => {
   return (
     <List initialList={InitialList} />
   );
  };