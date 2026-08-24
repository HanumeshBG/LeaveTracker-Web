import React from 'react'

const SelectField = (props) => {
    let { Label = 'label', FieldName = "Select", Options = [], Value = "", OnChange } = props;

    const handleChange = (e) => {
        if (OnChange) {
            OnChange(FieldName, e.target.value);
        }
    };

    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend">{Label}:</legend>
            <select value={Value} name={FieldName} className="select w-full" onChange={handleChange}>
                <option disabled={true} value='-1'>
                    Pick a {Label}
                </option>
                {Options.map((option) => (
                    <option key={option.ID} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </fieldset>
    )
}

export default SelectField