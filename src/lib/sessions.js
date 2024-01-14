// all function in App
export const checkingEmpytDatas = (UserD, setUserD, setLoading, navigate) => {
    if (
        UserD.email == '' &&
        UserD.fname == '' &&
        UserD.lname == '' &&
        UserD.tel == ''
    ) {
        if (sessionStorage.getItem('email')) {
            setUserD({
                fname: sessionStorage.getItem('fname'),
                lname: sessionStorage.getItem('lname'),
                tel: sessionStorage.getItem('tel'),
                email: sessionStorage.getItem('email'),
            });
            const timeOutEvent = setTimeout(() => {
                setLoading(false);
                clearTimeout(timeOutEvent);
            }, 2200);
        } else navigate('/');
    } else {
        // saving datas
        sessionStorage.setItem('fname', UserD.fname);
        sessionStorage.setItem('lname', UserD.lname);
        sessionStorage.setItem('email', UserD.email);
        sessionStorage.setItem('tel', UserD.tel);

        const timeOutEvent = setTimeout(() => {
            setLoading(false);
            clearTimeout(timeOutEvent);
        }, 2200);
    }
};
