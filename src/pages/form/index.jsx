// page for formular
import React from 'react';
import '../../Style/styleFormPage.css';
const FormPage = () => {
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
                <div className="border illustration">
                    <div className="circles cr1"></div>
                    <div className="circles cr2"></div>
                </div>
            </section>
            <section className="border formDatas"></section>
        </main>
    );
};

export default FormPage;
