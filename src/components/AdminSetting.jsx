import React, {  useEffect, useReducer } from 'react'
import InputField from './basicComponemts/InputField'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAdminSetting, addAdminSetting } from '../utils/settingsSlices/adminSettingSlice' 
import axios from 'axios';
import toast from 'react-hot-toast';
import { BASE_URL } from '../utils/constants';

const initialState = {
    tsicklcount: 0, cfsicklcount: 0, tcasuallcount: 0, cfcasuallcount: 0, tpersonallcount: 0, cfpersonallcount: 0, totherlcount: 0, cfotherlcount: 0, tmaternitylcount: 0
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
        "TotalSickLeave": {Label:"Total Sick Leave", Placeholder:"Enter Total Sick Leave:", FieldName:"tsicklcount" },
        "CFSickLeave": {Label:"Carry Forward Sick Leave", Placeholder:"Enter Carry Forward Sick Leave:", FieldName:"cfsicklcount" },
        "TotalCasualLeave": {Label:"Total Casual Leave", Placeholder:"Enter Total Casual Leave:", FieldName:"tcasuallcount" },
        "CFCasualLeave": {Label:"Carry Forward Casual Leave", Placeholder:"Enter Carry Forward Casual Leave:", FieldName:"cfcasuallcount" },
        "TotalPersonalLeave": {Label:"Total Personal Leave", Placeholder:"Enter Total Personal Leave:", FieldName:"tpersonallcount" },
        "CFPersonalLeave": {Label:"Carry Forward Personal Leave", Placeholder:"Enter Carry Forward Personal Leave:", FieldName:"cfpersonallcount" },
        "TotalOtherLeave": {Label:"Total Other Leave", Placeholder:"Enter Total Other Leave:", FieldName:"totherlcount" },
        "CFOtherLeave": {Label:"Carry Forward Other Leave", Placeholder:"Enter Carry Forward Other Leave:", FieldName:"cfotherlcount" },
        "TotalMaternityLeave": {Label:"Total Maternity Leave", Placeholder:"Enter Total Maternity Leave:", FieldName:"tmaternitylcount" }
    }  

    let adminSetting = useSelector((state) => state.adminSetting.data)

    const dispatch = useDispatch()
    useEffect(() => {
        if (!adminSetting) {
            dispatch(fetchAdminSetting())
        } else {
            dispatchState({
                type: "RESET",
                payload: {
                    ...initialState,
                    ...adminSetting
                }
            })
        }
    }, [dispatch, adminSetting])

    const handleChange = (fieldName, value) => {
        dispatchState({
            type: "UPDATE_FIELD",
            field: fieldName,
            value: value
        });
    }
    let handleSave = async() => {
        try {
            let response = await axios.post(`${BASE_URL}/adminSetting/save`, state, { withCredentials: true });
            dispatch(addAdminSetting(response.data.data));
            toast.success("Admin settings saved successfully!");
        } catch (error) {
            console.error("Error during Admin settings:", error);
            if (error.response) {
                toast.error(
                    error.response.data.error || "Something went wrong"
                );
            } else if (error.request) {
                toast.error("Server is not responding");
            } else {
                toast.error("Something went wrong");
            }
        }
    }
    return (
        <div className="flex justify-center w-[70%]">
            <div className="card w-full max-w-5xl shadow-xl p-6 rounded-xl">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-full">
                        <div className='flex gap-4 justify-center'>
                            <InputField {...inputProps.TotalSickLeave} Value={state.tsicklcount} OnChange={handleChange} />
                            <InputField {...inputProps.CFSickLeave} Value={state.cfsicklcount} OnChange={handleChange} />
                        </div>      
                        <div className='flex gap-4 justify-center'>
                            <InputField {...inputProps.TotalCasualLeave} Value={state.tcasuallcount} OnChange={handleChange} />
                            <InputField {...inputProps.CFCasualLeave} Value={state.cfcasuallcount} OnChange={handleChange} />
                        </div>      
                        <div className='flex gap-4 justify-center'>
                            <InputField {...inputProps.TotalPersonalLeave} Value={state.tpersonallcount} OnChange={handleChange} />
                            <InputField {...inputProps.CFPersonalLeave} Value={state.cfpersonallcount} OnChange={handleChange} />
                        </div>      
                        <div className='flex gap-4 justify-center'>
                            <InputField {...inputProps.TotalOtherLeave} Value={state.totherlcount} OnChange={handleChange} />
                            <InputField {...inputProps.CFOtherLeave} Value={state.cfotherlcount} OnChange={handleChange} />
                        </div>      
                        <div className='flex gap-4 justify-center'>
                            <InputField {...inputProps.TotalMaternityLeave} Value={state.tmaternitylcount} OnChange={handleChange} />
                        </div>      
                    </div>
                    <div className="flex gap-2 mt-4">
                        <button className="btn btn-primary" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSetting