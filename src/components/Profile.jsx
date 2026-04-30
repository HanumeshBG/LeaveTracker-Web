import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const initialState = {
    firstName: "xxxxxxxxxxxxx",
    lastName: "xxxxx",
    email: "xxxxx@gmail.com",
    gender: "male",
    phoneNumber: "9876543210",
    photo: null,
    photoUrl: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/96700/96725.jpg",
    department: "Others",
    about: ""
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

const Profile = () => {
    const user = useSelector((state) => state.user.data);

    const [state, dispatch] = useReducer(reducer, initialState);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (user) {
            dispatch({ type: "RESET", payload: {
                    ...initialState,
                    ...user
                } });
        }
    }, [user])

    const handleChange = (e) => {
        dispatch({
            type: "UPDATE_FIELD",
            field: e.target.name,
            value: e.target.value
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            dispatch({
                type: "SET_PHOTO",
                file
            });
        }
    };

    const handleSave = async () => {
        try {
            // const formData = new FormData();
            // Object.keys(state).forEach((key) => {
            //     if (key !== "photoUrl") {
            //         formData.append(key, state[key]);
            //     }
            // });

            const payload = { ...state };
            delete payload.photoUrl;

            const res = await axios.patch(`${BASE_URL}/profile/edit`, payload, {
                withCredentials: true
            });

            console.log(res);
            setIsEditing(false);
            toast.success("Profile updated!");
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        }
    };

    const handleCancel = () => {
        dispatch({ type: "RESET", payload: initialState });
        setIsEditing(false);
    };

    return (
        <div className="flex justify-center mt-10">
            <div className="card w-96 shadow-xl p-5">
                <div className="flex flex-col items-center gap-3">

                    {/* Profile Image */}
                    <img
                        src={state.photoUrl}
                        alt="profile"
                        className="w-32 h-32 rounded-full object-cover"
                    />

                    {isEditing && (
                        <input type="file" onChange={handlePhotoChange} />
                    )}

                    {/* Info */}
                    <div className="w-full">
                        <fieldset className="fieldset">
                          <legend className="fieldset-legend">First Name: </legend>
                          <input type="text" className="input" placeholder="Enter your first name"
                              name="firstName"
                              value={state.firstName}
                              onChange={handleChange }
                              disabled={!isEditing}
                          />
                        </fieldset>
                        <fieldset className="fieldset">
                          <legend className="fieldset-legend">Last Name: </legend>
                          <input type="text" className="input" placeholder="Enter your last name"
                              name="lastName" 
                              value={state.lastName}
                              onChange={handleChange }
                              disabled={!isEditing}
                          />
                        </fieldset>

                        {/* Gender */}
                        <fieldset className="fieldset">
                          <legend className="fieldset-legend">Gender: </legend>
                          <select defaultValue="Pick a Gender" name="gender" value={state.gender} onChange={handleChange} className="select" disabled={!isEditing}>
                              <option disabled={true}>Pick a Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                          </select>
                        </fieldset>

                        <fieldset className="fieldset">
                          <legend className="fieldset-legend">Email ID: </legend>
                          <input type="text" className="input" 
                              placeholder="Enter your email"
                              name="email"
                              value={state.email}
                              onChange={handleChange}
                              disabled={!isEditing}
                          />
                        </fieldset>

                        <fieldset className="fieldset">
                          <legend className="fieldset-legend">Phone Number: </legend>
                          <input type="number" className="input" placeholder="Enter your phone number"
                              name="phoneNumber"
                              value={state.phoneNumber}
                              onChange={handleChange} 
                                disabled={!isEditing}
                          />
                        </fieldset>

                        <fieldset className="fieldset">
                          <legend className="fieldset-legend">Department: </legend>
                          <select defaultValue="Pick a Department" 
                            name="department" 
                            value={state.department} 
                            onChange={handleChange} 
                            className="select" 
                            disabled={!isEditing}
                          >
                            {['HR', 'Engineering', 'Sales', 'Marketing', 'Finance', 'Operations', "Development", "Testing", "Support", "Management", "Other"].map((dept) => (
                              <option key={dept} value={dept}>{dept}</option>
                            ))}
                          </select>
                        </fieldset>

                        <fieldset className="fieldset">
                          <legend className="fieldset-legend">About: </legend>
                          <textarea className="textarea" placeholder="Bio" 
                            value={state.about} 
                            onChange={handleChange} 
                            disabled={!isEditing}
                            name="about"
                          />
                        </fieldset>
                    </div>

                    {/* Buttons */}
                    {!isEditing ? (
                        <button
                            className="btn btn-primary w-full"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <div className="flex gap-2 w-full">
                            <button
                                className="btn btn-success flex-1"
                                onClick={handleSave}
                            >
                                Save
                            </button>
                            <button
                                className="btn btn-outline flex-1"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile