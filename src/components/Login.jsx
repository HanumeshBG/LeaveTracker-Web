import { useReducer, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    phoneNumber: ''
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Login = () => {
    const [isLoginPage, setIsLoginPage] = useState(true)
    const navigate = useNavigate()
    const [state, dispatchReducer] = useReducer(reducer, initialState)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatchReducer({
            name: e.target.name,
            value: e.target.value
        });
    }
    const handleClick = async () => {
        if(isLoginPage) {
            // Handle login logic here
            let res = await axios.post(`${BASE_URL}/login`, {
                        email: state.email,
                        password: state.password
                    }, {withCredentials: true})
            dispatch(addUser(res.data))  
            toast.success("Logged in successfully!");
            navigate('/dashboard')
        } else {
            // Handle sign up logic here
            let res = await axios.post(`${BASE_URL}/signup`,
                state,
                {withCredentials: true})
            dispatch(addUser(res.data))  
            toast.success("Signed up successfully!");
            navigate('/dashboard')
        }
    }

  return (
    <div className="card card-dash w-96 shadow-xl">
        <div className="card-body">
            <h2 className="card-title flex justify-center">{isLoginPage ? 'Login' : 'Sign Up'}</h2>
            <div>
                {!isLoginPage && <>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">First Name: </legend>
                        <input type="text" className="input" placeholder="Enter your first name"
                            name="firstName"
                            value={state.firstName}
                            onChange={handleChange }
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Last Name: </legend>
                        <input type="text" className="input" placeholder="Enter your last name"
                            name="lastName" 
                            value={state.lastName}
                            onChange={handleChange }
                        />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Gender: </legend>
                        <select defaultValue="Pick a browser" name="gender" value={state.gender} onChange={handleChange} className="select">
                            <option disabled={true}>Pick a Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Phone Number: </legend>
                        <input type="number" className="input" placeholder="Enter your phone number"
                            name="phoneNumber"
                            value={state.phoneNumber}
                            onChange={handleChange} 
                        />
                    </fieldset>
                </>}
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Email ID: </legend>
                    <input type="text" className="input" 
                        placeholder="Enter your email"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Password: </legend>
                    <input type="password" className="input" 
                        placeholder="Enter your password"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </fieldset>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={handleClick}>{isLoginPage ? 'Login' : 'Sign Up'}</button>
                </div>
                <p className='cursor-pointer m-auto' onClick={() => setIsLoginPage(!isLoginPage)}>{isLoginPage ? "New User ? click here":"Existing User ? click here"}</p>
            </div>
        </div>
    </div>
  )
}

export default Login