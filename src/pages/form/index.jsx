// page for formular
import React, { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import '../../Style/styleFormPage.css';

// Components
import InputField from '../../Components/InputField';
import SendButton from '../../Components/SendBtn';

//States
import { listInputDatas, datasOfUser } from '../../state/datasUser';

const FormPage = () => {
    const listDatasOfForm = useRecoilValue(listInputDatas);
    const ResetUserDatas = useResetRecoilState(datasOfUser);

    useEffect(() => {
        ResetUserDatas();
    }, []);
    return (
        <main className="containerForm">
            <section className="presentation">
                <div className="containerPresentation">
                    <h1>GoFinance</h1>
                    <span>The most popular peer to peer lending at SEA</span>
                    <a href="#" className="linkBtn">
                        Read More
                    </a>
                </div>
                <div className="illustration">
                    <div className="circles cr1"></div>
                    <div className="circles cr2"></div>
                </div>
            </section>
            <section className="formDatas">
                <div className="DisplayingContainerForm">
                    <div className="titles">
                        <h2>Hello Again!</h2>
                        <span>welcome Back</span>
                    </div>
                    <section className="ContainerFields">
                        {listDatasOfForm.map((valueTab, indexTab) => (
                            <InputField
                                typeInput={valueTab.typeInput}
                                labelText={valueTab.labelText}
                                placeholderText={valueTab.placeholderText}
                                inputId={indexTab}
                                key={`${valueTab.typeInput}_${indexTab}`}
                            />
                        ))}
                        <SendButton />
                    </section>
                </div>
            </section>
        </main>
    );
};

export default FormPage;
