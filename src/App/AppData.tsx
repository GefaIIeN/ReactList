import { v4 as uuv4 } from 'uuid';
let UserFields: IField[] = [];

export interface IField {
  id: string,
  isEdit: Boolean,
  firstname: string,
  secondname: string,
  birthday: Date
}

export const createField = (firstName: string, secondName: string, birthDay: Date, id?: string) : IField => {
  return {
      id: id ? id : uuv4(),
      isEdit: false,
      firstname: firstName,
      secondname: secondName,
      birthday: birthDay,
  } as IField;
}

const getDateFromString = (strDate: string) : Date => {
  const arr = strDate.split('.');
  if (arr.length < 3) {
    throw new Error('format date error');
  }
  const date = new Date(parseInt(arr[2]), parseInt(arr[1])-1, parseInt(arr[0]));
  return date;
}

export const initFields = () => {
  UserFields.push(createField('Гарри',  'Поттер', getDateFromString('31.07.1980')));
  UserFields.push(createField('Гермиона',  'Грейнджер', getDateFromString('19.09.1979')));
  UserFields.push(createField('Рон',  'Уизли ', getDateFromString('01.05.1980')));
  UserFields.push(createField('Драко',  'Малфой', getDateFromString('31.08.1980')));
  UserFields.push(createField('Дафна',  'Гринграсс', getDateFromString('09.01.1960')));
}

export const addField = (firstName: string, secondName: string, birthDay: Date) => {
  if (birthDay.getFullYear() > 1900) {
    UserFields.push(createField(firstName,  secondName, birthDay));
  }
}

export const removeField = (id: string) => {
  UserFields = UserFields.filter(u => u.id == id);
}

export const getUsers = () => {
  return [...UserFields];
};