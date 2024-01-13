import React from 'react';
import '../../Style/components/sendingButton.css';
import { useRecoilValue } from 'recoil';

//states
import { datasOfUser, ErrorInForm } from '../../state/datasUser';

const SendButton = () => {
    const datasOfFormulaire = useRecoilValue(datasOfUser);
    const formErrors = useRecoilValue(ErrorInForm);

    const sendDatas = () => {
        console.log(datasOfFormulaire);
    };

    return (
        <button
            className={
                datasOfFormulaire == null ||
                formErrors.fNameError ||
                formErrors.lNameError ||
                formErrors.emailError
                    ? 'sendBtnDisbled'
                    : 'sendBtn'
            }
            onClick={sendDatas}
            disabled={
                datasOfFormulaire == null ||
                formErrors.fNameError ||
                formErrors.lNameError ||
                formErrors.emailError
                    ? true
                    : false
            }
        >
            Send
        </button>
    );
};

export default SendButton;
