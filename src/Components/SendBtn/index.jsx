import React from 'react';
import '../../Style/components/sendingButton.css';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

//states
import { datasOfUser, ErrorInForm } from '../../state/datasUser';

const SendButton = () => {
    const datasOfFormulaire = useRecoilValue(datasOfUser);
    const formErrors = useRecoilValue(ErrorInForm);
    const navigate = useNavigate();

    const sendDatas = () => {
        navigate('/main');
    };

    return (
        <button
            className={
                datasOfFormulaire == null ||
                formErrors.fNameError ||
                formErrors.lNameError ||
                formErrors.emailError ||
                formErrors.telError
                    ? 'sendBtnDisbled'
                    : 'sendBtn'
            }
            onClick={sendDatas}
            disabled={
                datasOfFormulaire == null ||
                formErrors.fNameError ||
                formErrors.lNameError ||
                formErrors.emailError ||
                formErrors.telError
                    ? true
                    : false
            }
        >
            Send
        </button>
    );
};

export default SendButton;
