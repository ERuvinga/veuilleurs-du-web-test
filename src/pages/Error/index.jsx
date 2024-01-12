// error page
import { useRouteError } from 'react-router-dom';
import '../../Style/Error.css';
import React from 'react';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="errorPage">
            <img className="img404" alt="error" src="/img/404.png" />
            <p className="textmsg">{error.data}</p>
        </div>
    );
};

export default ErrorPage;
