import React from 'react';
import '../../Style/components/sendingButton.css';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

//states
import { ErrorInForm } from '../../state/datasUser';

const SendButton = () => {
    const formErrors = useRecoilValue(ErrorInForm);
    const ResetStatesError = useResetRecoilState(ErrorInForm);
    const navigate = useNavigate();

    const sendDatas = () => {
        ResetStatesError();
        navigate('/main');
    };

    return (
        <button
            className={
                formErrors.fNameError ||
                formErrors.lNameError ||
                formErrors.emailError ||
                formErrors.telError
                    ? 'sendBtnDisbled'
                    : 'sendBtn'
            }
            onClick={sendDatas}
            disabled={
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
