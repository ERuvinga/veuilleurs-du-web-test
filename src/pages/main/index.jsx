// main page
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

//components
import LoadingComponent from '../../Components/Loading';

//States
import { datasOfUser } from '../../state/datasUser';

const MainPage = () => {
    const UserD = useRecoilValue(datasOfUser);
    const ResetDatas = useResetRecoilState(datasOfUser);

    const [loading, setLoading] = useState(true);
    const [loadingText, setLoadingText] = useState('Loading ...');
    const navigate = useNavigate();

    const OnResetDatas = () => {
        setLoading(true);
        setLoadingText('Clear cache ...');
        ResetDatas();
        const timeOutEvent = setTimeout(() => {
            navigate('/');
            clearTimeout(timeOutEvent);
        }, 2200);
    };

    const checkingEmpytDatas = () => {
        if (
            UserD.email == '' &&
            UserD.fname == '' &&
            UserD.lname == '' &&
            UserD.tel == ''
        ) {
            if (sessionStorage.getItem('email')) {
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

    useEffect(() => {
        checkingEmpytDatas(); // cheking all datas
    });

    return (
        <>
            {loading ? (
                <div className="ContainerLoading">
                    <LoadingComponent />
                    <span className="loadingText">{loadingText}</span>
                </div>
            ) : (
                <div className="border">
                    <div onClick={OnResetDatas} className="backForm">
                        <ArrowLeftIcon className="Icone" />
                    </div>
                    Main Page
                </div>
            )}
        </>
    );
};

export default MainPage;
