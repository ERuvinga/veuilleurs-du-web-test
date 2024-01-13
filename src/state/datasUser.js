// state of user
import { atom } from 'recoil';

export const datasOfUser = atom({
    key: 'datasOfUser',
    default: {
        fname: 'Elie',
        lname: 'Ruvinga',
        tel: '',
        email: '',
    },
});

export const listInputDatas = atom({
    key: 'listInputDatas',
    default: [
        {
            typeInput: 'text',
            labelText: 'FName',
            placeholderText: 'Elie',
        },
        {
            typeInput: 'text',
            labelText: 'SName',
            placeholderText: 'Ruvinga',
        },
        {
            typeInput: 'email',
            labelText: 'email',
            placeholderText: 'ruvingaleie@gmail.com',
        },
        {
            typeInput: 'text',
            labelText: 'Tel',
            placeholderText: '+243973668210',
        },
    ],
});
