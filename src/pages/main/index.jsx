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
import Card from '../../Components/Card';

const MainPage = () => {
    const UserD = useRecoilValue(datasOfUser);
    const setUserD = useSetRecoilState(datasOfUser);

    const [loading, setLoading] = useState(true);
    const [loadingText, setLoadingText] = useState('Loading ...');
    const navigate = useNavigate();

    const datasOfCard = [
        {
            label: 'First_Name',
            value: UserD.fname,
        },
        {
            label: 'Second_Name',
            value: UserD.lname,
        },
        {
            label: 'Email',
            value: UserD.email,
        },
        {
            label: 'phone',
            value: UserD.tel,
        },
    ];
    const backToHomme = () => {
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
                <div className="mainPage">
                    <div onClick={() => backToHomme()} className="backHome">
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
                    <section className="DatasPage">
                        <div className="DescrText">
                            <div className="description">
                                <h1 className=" title">
                                    <>Welcome</>
                                    <span className="nameUser">{` #${UserD.fname} ${UserD.lname} `}</span>
                                    <>to GoFinance.</>
                                </h1>
                                <span className="otherText">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sequi sint, reiciendis
                                    accusamus provident{' '}
                                </span>
                                <a href="#" className="linkBtn">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="DescrIllustartion">
                            <img
                                src="/img/manage.svg"
                                alt="finacialie manage"
                                className="ManageImg"
                            />
                            <div className="bloc"></div>
                        </div>
                        <aside className="CardDatas">
                            <div className="titleCard">
                                <CloudArrowUpIcon className="icone" />
                                <span>Datas User</span>
                            </div>
                            <div className="ContainerDatas">
                                {datasOfCard.map((datas, index) => (
                                    <Card
                                        key={`${index}_${datas.label}`}
                                        label={datas.label}
                                        value={datas.value}
                                    />
                                ))}
                            </div>
                        </aside>
                    </section>
                </div>
            )}
        </>
    );
};

export default MainPage;
