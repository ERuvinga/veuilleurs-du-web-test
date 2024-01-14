// main page
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
    ArrowLeftIcon,
    UserCircleIcon,
    BellAlertIcon,
    CloudArrowUpIcon,
} from '@heroicons/react/24/outline';

//components
import LoadingComponent from '../../Components/Loading';
import '../../Style/styleMainPage.css';

//States
import { datasOfUser } from '../../state/datasUser';

//libs
import { checkingEmpytDatas } from '../../lib/sessions';

const MainPage = () => {
    const UserD = useRecoilValue(datasOfUser);
    const setUserD = useSetRecoilState(datasOfUser);

    const [loading, setLoading] = useState(true);
    const [loadingText, setLoadingText] = useState('Loading ...');
    const navigate = useNavigate();

    const OnResetDatas = () => {
        setLoadingText('Clear cache ...');
        setLoading(true);
        setTimeout(() => {
            navigate('/');
        }, 2200);
    };

    useEffect(() => {
        checkingEmpytDatas(UserD, setUserD, setLoading, navigate); // cheking all datas
    });

    return (
        <>
            {loading ? (
                <div className="ContainerLoading">
                    <LoadingComponent />
                    <span className="loadingText">{loadingText}</span>
                </div>
            ) : (
                <div className="border mainPage">
                    <div onClick={() => OnResetDatas()} className="backHome">
                        <ArrowLeftIcon className="icone" />
                    </div>
                    <div className="nav">
                        <div className="logo">GoFinance</div>
                        <div className="profil">
                            <span className="nameU">{`${UserD.fname} ${UserD.lname}`}</span>
                            <UserCircleIcon className="icone" />{' '}
                            <BellAlertIcon className="icone" />
                        </div>
                    </div>
                    <section className="">
                        <CloudArrowUpIcon className="border" />
                    </section>
                </div>
            )}
        </>
    );
};

export default MainPage;
