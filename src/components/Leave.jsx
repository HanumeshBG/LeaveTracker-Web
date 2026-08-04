import React from 'react'
import InputField from './basicComponemts/InputField'
import SelectField from './basicComponemts/SelectField'
import { useReducer } from 'react'

const inputProps = {
    "LeaveDescription": {Label:"Leave Description", Placeholder:"Enter Leave Description:", FieldName:"LeaveDescription", MultiLineTextbox: true},
    "LeaveReason": {Label:"Leave Reason", Placeholder:"Enter Reason", FieldName:"LeaveReason"}
}

const selectProps = {
    "Name": {Label:"Name", FieldName:"Name", Options: [{ID: 1, value: "1", label: "Hanumesh"}, {ID: 2, value: "2", label: "Suresh"}]},
    "LeaveStatus": {Label:"Leave Status", FieldName:"LeaveStatus", Options: [{ID: 1, value: "1", label: "Approved"}, {ID: 2, value: "2", label: "Pending"}, {ID: 3, value: "3", label: "Rejected"}]},
    "LeaveType": {Label:"Leave Category", FieldName:"LeaveCategory", Options: [{ID: 1, value: "1", label: "Sick Leave"}, {ID: 2, value: "2", label: "Casual Leave"}, {ID: 3, value: "3", label: "Earned Leave"}]}
}

const initialState = {
    Name: "-1", LeaveReason: "", LeaveStatus: "-1", LeaveCategory: "-1", LeaveDescription: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FIELD":
            return {
                ...state,
                [action.field]: action.value
            };
        case "SET_PHOTO":
            return {
                ...state,
                photo: action.file,
                photoUrl: URL.createObjectURL(action.file)
            };
        case "RESET":
            return action.payload;
        default:
            return state;
    }
};

const Leave = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange = (fieldName, value) => {
        dispatch({
            type: "UPDATE_FIELD",
            field: fieldName,
            value: value
        });
    }

    const handleSave = async () => {
        try {
            console.log("Saving leave data:", state);
        } catch (error) {
            console.error("Error saving leave data:", error);
        }
    }

    return (
        <div className="flex justify-center mt-10">
            <div className="card w-96 shadow-xl p-5">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-full">
                            <SelectField {...selectProps.Name} Value={state.Name} OnChange={handleChange} />
                            <InputField {...inputProps.LeaveReason} Value={state.LeaveReason} OnChange={handleChange} />
                            <SelectField {...selectProps.LeaveStatus} Value={state.LeaveStatus} OnChange={handleChange} />
                            <SelectField {...selectProps.LeaveType} Value={state.LeaveCategory} OnChange={handleChange} />
                            <InputField {...inputProps.LeaveDescription} Value={state.LeaveDescription} OnChange={handleChange} />
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button className="btn btn-primary" onClick={handleSave}>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leave