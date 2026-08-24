import React, { useEffect, useReducer } from 'react'
import InputField from './basicComponemts/InputField'
import SelectField from './basicComponemts/SelectField'
import DateTimePicker from './basicComponemts/DateTimePicker'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../utils/userSlices/usersSlice' 
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router'

// {ID: 1, value: "1", label: "Hanumesh"}, {ID: 2, value: "2", label: "Suresh"}

const initialState = {
    Name: "-1", LeaveReason: "", LeaveStatus: "1", LeaveCategory: "1", LeaveDescription: "", FromDate: "", ToDate: ""
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
    const navigate = useNavigate()
    let inputProps = {
        "LeaveDescription": {Label:"Leave Description", Placeholder:"Enter Leave Description:", FieldName:"LeaveDescription", MultiLineTextbox: true},
        "LeaveReason": {Label:"Leave Reason", Placeholder:"Enter Reason", FieldName:"LeaveReason"},
        "LeaveStatus": {Label:"Leave Status", FieldName:"LeaveStatus", 
            Options: [{ID: 1, value: "1", label: "Applied"}, {ID: 2, value: "2", label: "Approved"}, {ID: 3, value: "3", label: "Rejected"}], RadioButton: true},
        "LeaveType": {Label:"Leave Category", FieldName:"LeaveCategory", 
            Options: [
                {ID: 1, value: "1", label: "Sick Leave"}, 
                {ID: 2, value: "2", label: "Casual Leave"}, 
                {ID: 3, value: "3", label: "Personal Leave"},
                {ID: 4, value: "4", label: "Other Leave"}, 
                {ID: 5, value: "5", label: "Maternity Leave"}
            ], 
            RadioButton: true
        }
    }

    let selectProps = {
        "Name": {Label:"Name", FieldName:"Name", Options: []}
    }

    let dateTimeProps = {
        "StartDate": {Label:"From Date", FieldName:"FromDate", Type:"date"},
        "EndDate": {Label:"To Date", FieldName:"ToDate", Type:"date"}
    }

    const [state, dispatchState] = useReducer(reducer, initialState);
    const users = useSelector((state) => state.users.data)
    const dispatch = useDispatch();

    useEffect(() => {
        if (users.length === 0) {
            dispatch(fetchUsers());
        }
    }, [dispatch, users.length]);

    selectProps.Name.Options = users.map((user) => ({
        ID: user._id,
        value: user._id,
        label: user.firstName + " " + user.lastName
    }));


    const handleChange = (fieldName, value) => {
        dispatchState({
            type: "UPDATE_FIELD",
            field: fieldName,
            value: value
        });
    }

    const handleSave = async () => {
        try {
            // Handle leave application logic here
            let res = await axios.post(`${BASE_URL}/leave/apply`,
                state,
                {withCredentials: true}) 
            console.log("Leave application response:", res.data);
            toast.success("Leave application submitted successfully!");
            navigate('/dashboard')
        } catch (error) {
            console.error("Error saving leave data:", error);
        }
    }

    return (
        <div className="flex justify-center w-[50%]">
            <div className="card w-full max-w-5xl shadow-xl p-6 rounded-xl">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-full">
                            <SelectField {...selectProps.Name} Value={state.Name} OnChange={handleChange} />
                            <DateTimePicker {...dateTimeProps.StartDate} Value={state.FromDate} OnChange={handleChange} />
                            <DateTimePicker {...dateTimeProps.EndDate} Value={state.ToDate} OnChange={handleChange} />
                            <InputField {...inputProps.LeaveReason} Value={state.LeaveReason} OnChange={handleChange} />
                            <InputField {...inputProps.LeaveStatus} Value={state.LeaveStatus} OnChange={handleChange} />
                            <InputField {...inputProps.LeaveType} Value={state.LeaveCategory} OnChange={handleChange} />
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