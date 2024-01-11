// error page
import {useRouteError} from "react-router-dom";
import "../../Style/Error.css"

const ErrorPage =()=>{
    const error = useRouteError();
    console.log(error);
    
    return(
        <div className="errorPage">
            <img className="img404" alt="error" src="/img/404.png"/>
            <p className="textmsg ">{error.data}</p>
        </div>
    )
}

export default ErrorPage;