import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
