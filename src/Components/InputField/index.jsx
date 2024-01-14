import React, { useEffect, useState } from 'react';
import '../../Style/components/InputFields.css';
import { useRecoilState } from 'recoil';

//states
import { datasOfUser, ErrorInForm } from '../../state/datasUser';

const InputField = (props) => {
    const fieldsDatas = { ...props };
    const [datasForm, setDatasForm] = useRecoilState(datasOfUser);
    const [ErrorsDatas, setErrorsDatas] = useRecoilState(ErrorInForm);
    const [invalidField, setInvalidField] = useState('');

    useEffect(() => {
        if (
            ErrorsDatas.fNameError &&
            fieldsDatas.labelText === 'FName' &&
            datasForm.fname !== ''
        ) {
            setInvalidField('invalidname');
        } else if (
            ErrorsDatas.lNameError &&
            fieldsDatas.labelText === 'SName' &&
            datasForm.lname !== ''
        ) {
            setInvalidField('invalidname');
        } else if (
            ErrorsDatas.emailError &&
            fieldsDatas.labelText === 'email' &&
            datasForm.email !== ''
        ) {
            setInvalidField('invalidEmail');
        } else if (
            ErrorsDatas.telError &&
            fieldsDatas.labelText === 'Tel' &&
            datasForm.tel !== ''
        ) {
            setInvalidField('invalidTel');
        } else {
            setInvalidField('');
        }
    }, [ErrorsDatas, datasForm]);

    const OnChangeValueInField = (envent, idField) => {
        // checking field that provide datas
        switch (idField) {
            case 0: {
                const name = envent.target.value;
                setDatasForm({
                    ...datasForm,
                    fname: name,
                });
                if (name.match(/^[a-zA-z]{2,}$/)) {
                    setErrorsDatas({
                        ...ErrorsDatas,
                        fNameError: false,
                    });
                } else {
                    setErrorsDatas({
                        ...ErrorsDatas,
                        fNameError: true,
                    });
                    // display error state changed
                }
                break;
            }
            case 1: {
                const secondName = envent.target.value;
                if (secondName.match(/^[a-zA-z]{2,}$/)) {
                    setErrorsDatas({
                        ...ErrorsDatas,
                        lNameError: false,
                    });
                } else {
                    setErrorsDatas({
                        ...ErrorsDatas,
                        lNameError: true,
                    });
                }
                setDatasForm({
                    ...datasForm,
                    lname: secondName,
                });
                break;
            }
            case 2: {
                const email = envent.target.value;
                setDatasForm({
                    ...datasForm,
                    email: email,
                });
                if (email.match(/@[a-zA-Z0-9]{5,}(.com$)/)) {
                    setErrorsDatas({
                        ...ErrorsDatas,
                        emailError: false,
                    });
                } else {
                    setErrorsDatas({
                        ...ErrorsDatas,
                        emailError: true,
                    });
                }
                break;
            }
            case 3: {
                const tel = envent.target.value;
                setDatasForm({
                    ...datasForm,
                    tel: tel,
                });
                if (tel.match(/^[0-9]{9}$/) && !tel.match(/[a-zA-Z-+]/)) {
                    setErrorsDatas({
                        ...ErrorsDatas,
                        telError: false,
                    });
                } else {
                    setErrorsDatas({
                        ...ErrorsDatas,
                        telError: true,
                    });
                }
                break;
            }
        }
    };

    return (
        <div className={`FieldGroup ${invalidField}`}>
            <label className="labelField" htmlFor={fieldsDatas.labelText}>
                {fieldsDatas.labelText}
            </label>
            <input
                autoComplete="on"
                className={invalidField == '' ? 'inputField' : 'invalidInput'}
                type={fieldsDatas.typeInput}
                placeholder={fieldsDatas.placeholderText}
                id={fieldsDatas.labelText}
                onChange={() =>
                    OnChangeValueInField(event, fieldsDatas.inputId)
                }
            />
        </div>
    );
};

export default InputField;
