import React from 'react'

const InputField = (props = {}) => {
    let { Label = 'label', Placeholder = "", FieldName = "TextBox", Type = "text", MultiLineTextbox = false, Value = "", OnChange } = props;
    
    const handleChange = (e) => {
        if (OnChange) {
            OnChange(FieldName, e.target.value);
        }
    }
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{Label}:</legend>
            {MultiLineTextbox ? (
                <textarea className="textarea h-24" placeholder={Placeholder} value={Value} onChange={handleChange}
                    name={FieldName}
                />
            ) : (
                <input type={Type} className="input" placeholder={Placeholder} value={Value} onChange={handleChange}
                    name={FieldName}
                />
            )}
        </fieldset>
    )
}

export default InputField