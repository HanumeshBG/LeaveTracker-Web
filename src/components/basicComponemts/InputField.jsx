import React from 'react'

const InputField = (props = {}) => {
    let { Label = 'label', Placeholder = "", FieldName = "TextBox", Type = "text", MultiLineTextbox = false, RadioButton = false, Options = [], Value = "", OnChange } = props;
    
    const handleChange = (e) => {
        if (OnChange) {
            OnChange(FieldName, e.target.value);
        }
    }
    return (
        <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">{Label}:</legend>
            { RadioButton ? (
                <div className="flex gap-2 w-full flex-wrap justify-center"> 
                    { Options.map((option) => ( 
                        <label
                        key={option.ID}
                        className={`
                            cursor-pointer
                            px-5 py-2
                            rounded-lg
                            border
                            font-medium
                            transition-all
                            duration-200
                            text-center
                            min-w-28
                            ${
                                Value === option.value
                                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                            }
                        `}
                    >
                        <input
                            type="radio"
                            name={FieldName}
                            value={option.value}
                            checked={Value === option.value}
                            onChange={handleChange}
                            className="hidden"
                        />

                        {option.label}
                    </label>
                    ))} 
                </div>) : ( MultiLineTextbox ? (
                    <textarea className="textarea h-24 w-full" placeholder={Placeholder} value={Value} onChange={handleChange}
                        name={FieldName}
                    />
                ) : (
                    <input type={Type} className="input w-full" placeholder={Placeholder} value={Value} onChange={handleChange}
                        name={FieldName}
                    />
                ))}
        </fieldset>
    )
}

export default InputField