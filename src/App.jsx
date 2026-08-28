import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";  

import Body from "./components/Body";
import Dashboard from "./components/dashboard/LeaveDashboard";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AdminSetting from './components/AdminSetting';
import Leave from "./components/Leave";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {

  return (
    <>
    <Provider store={appStore}> 
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="profile/view" element={<Profile />} />
            <Route path="profile/edit" element={<Profile />} />
            <Route path="/settings" element={<AdminSetting />} />
            <Route path="/leave" element={<Leave />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      <Toaster position="top-center" />
    </>
  )
}

export default App
