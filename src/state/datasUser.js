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
