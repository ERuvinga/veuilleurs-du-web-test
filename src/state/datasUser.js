// state of user
import { atom } from 'recoil';

export const datasOfUser = atom({
    key: 'datasOfUser',
    default: {
        fname: '',
        lname: '',
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
            placeholderText: '973668210',
        },
    ],
});

export const ErrorInForm = atom({
    key: 'ErrorInForm',
    default: {
        fNameError: true,
        lNameError: true,
        emailError: true,
        telError: true,
    },
});
