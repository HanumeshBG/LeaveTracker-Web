import React, { useReducer } from 'react'
import InputField from './basicComponemts/InputField'

const initialState = {
    TotalSickLeave: "6", CFSickLeave: "0"
};

const reducer = (state, action) => {
    switch (action.type){
        case "UPDATE_FIELD":
            return {
                ...state,
                [action.field]: action.value
            }
        case "RESET":
            return action.payload;
        default:
            return state;
    }
}
const AdminSetting = () => {

    const [state, dispatchState] = useReducer(reducer, initialState)

    let inputProps = {
        "TotalSickLeave": {Label:"Total Sick Leave", Placeholder:"Enter Total Sick Leave:", FieldName:"TotalSickLeave" },
        "CFSickLeave": {Label:"Carry Forward Sick Leave", Placeholder:"Enter Carry Forward Sick Leave:", FieldName:"CFSickLeave" },
        "TotalCasualLeave": {Label:"Total Casual Leave", Placeholder:"Enter Total Casual Leave:", FieldName:"TotalCasualLeave" },
        "CFCasualLeave": {Label:"Carry Forward Casual Leave", Placeholder:"Enter Carry Forward Casual Leave:", FieldName:"CFCasualLeave" },
        "TotalPersonalLeave": {Label:"Total Personal Leave", Placeholder:"Enter Total Personal Leave:", FieldName:"TotalPersonalLeave" },
        "CFPersonalLeave": {Label:"Carry Forward Personal Leave", Placeholder:"Enter Carry Forward Personal Leave:", FieldName:"CFPersonalLeave" },
        "TotalOtherLeave": {Label:"Total Other Leave", Placeholder:"Enter Total Other Leave:", FieldName:"TotalOtherLeave" },
        "CFOtherLeave": {Label:"Carry Forward Other Leave", Placeholder:"Enter Carry Forward Other Leave:", FieldName:"CFOtherLeave" },
        "TotalMaternityLeave": {Label:"Total Maternity Leave", Placeholder:"Enter Total Maternity Leave:", FieldName:"TotalMaternityLeave" },
        "CFMaternityLeave": {Label:"Carry Forward Maternity Leave", Placeholder:"Enter Carry Forward Maternity Leave:", FieldName:"CFMaternityLeave" },
    }  

    const handleChange = (fieldName, value) => {
        dispatchState({
            type: "UPDATE_FIELD",
            field: fieldName,
            value: value
        });
    }
    let handleSave = () => {}
    return (
        <div className="flex justify-center w-[70%]">
            <div className="card w-full max-w-5xl shadow-xl p-6 rounded-xl">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-full">
                        <div className='flex gap-4 justify-center'>
                            <InputField {...inputProps.TotalSickLeave} Value={state.TotalSickLeave} OnChange={handleChange} />
                            <InputField {...inputProps.CFSickLeave} Value={state.CFSickLeave} OnChange={handleChange} />
                        </div>      
                        <div className='flex gap-4 justify-center'>
                            <InputField {...inputProps.TotalCasualLeave} Value={state.TotalCasualLeave} OnChange={handleChange} />
                            <InputField {...inputProps.CFCasualLeave} Value={state.CFCasualLeave} OnChange={handleChange} />
                        </div>      
                        <div className='flex gap-4 justify-center'>
                            <InputField {...inputProps.TotalPersonalLeave} Value={state.TotalPersonalLeave} OnChange={handleChange} />
                            <InputField {...inputProps.CFPersonalLeave} Value={state.CFPersonalLeave} OnChange={handleChange} />
                        </div>      
                        <div className='flex gap-4 justify-center'>
                            <InputField {...inputProps.TotalOtherLeave} Value={state.TotalOtherLeave} OnChange={handleChange} />
                            <InputField {...inputProps.CFOtherLeave} Value={state.CFOtherLeave} OnChange={handleChange} />
                        </div>      
                        <div className='flex gap-4 justify-center'>
                            <InputField {...inputProps.TotalMaternityLeave} Value={state.TotalMaternityLeave} OnChange={handleChange} />
                            <InputField {...inputProps.CFMaternityLeave} Value={state.CFMaternityLeave} OnChange={handleChange} />
                        </div>      
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button className="btn btn-primary" onClick={handleSave}>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSetting