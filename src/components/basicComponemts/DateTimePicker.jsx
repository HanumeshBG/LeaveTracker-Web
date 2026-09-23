import React from 'react'

const DateTimePicker = (props) => {
    let {Label = 'label', FieldName = "datetime", Type = "date", Value = "", OnChange } = props;
    const handleChange = (e) => {
        if (OnChange) {
            OnChange(FieldName, e.target.value);
        }
    }
  return (
    <fieldset className="fieldset">
            <legend className="fieldset-legend">{Label}:</legend>
            <input type={Type} name={FieldName} value={Value} onChange={handleChange} className="input w-full date-input" />
    </fieldset>
  )
}

export default DateTimePicker