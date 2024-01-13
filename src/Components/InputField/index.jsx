import React from 'react';
import '../../Style/components/InputFields.css';

const InputField = (props) => {
    const fieldsDatas = { ...props };
    return (
        <div className="FieldGroup">
            <label className="labelField" htmlFor={fieldsDatas.labelText}>
                {fieldsDatas.labelText}
            </label>
            <input
                className="inputField"
                type={fieldsDatas.typeInput}
                placeholder={fieldsDatas.placeholderText}
                id={fieldsDatas.labelText}
            />
        </div>
    );
};

export default InputField;
