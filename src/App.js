import React, { useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

//FALSY ROUTES
import Signin from './components/Auth/Signin/Signin'
import ForgotPwd from "./components/Auth/Signin/ForgotPwd/ForgotPwd"
import Verification from "./components/Auth/Verification/Verification"
import ResetPwd from "./components/Auth/Signin/ForgotPwd/ResetPwd/ResetPwd"
import Signup from './components/Auth/Signup/Signup'
import PageNil from './components/utils/PageNotFound/PageNotFound'

//TRUE ROUTES
import Home from "./components/Layout/Home/Home"
import DeliveryHistory from "./components/Layout/DeliveryHistory/DeliveryHistory"
import WithDHistory from "./components/Layout/WithDHistory/WithDHistory"
import Chat from "./components/Layout/Chat/Chat"
import Notification from "./components/Layout/Notification/Notification"
import Support from "./components/Layout/Support/Support"
import Settings from "./components/Layout/Settings/Settings"
import EditProfile from "./components/Layout/Settings/EditProfile/EditProfile"
import Security from "./components/Layout/Settings/Security/Security"
import NotificationSettings from "./components/Layout/Settings/NotificationSettings/NotificationSettings"
import About from "./components/Layout/Settings/About/About"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './App.css';

library.add(fab, fas, far)

function App() {
  const naviagte = useNavigate()

  const auth = useSelector(state => state.authState.value)

  const [fgPwd, setFgpwd] = useState(false)
  const [fgEmail, setFgEmail] = useState('')
  const [resetPwd, setResetpwd] = useState(false)

  const setFgpwdFunc = () => {
    setFgpwd(true)
    naviagte('/forgotpwd/verification')
  }

  const setResetpwdFunc = () => {
    setResetpwd(true)
    naviagte('/resetpwd')
  }

  const loggedOutRoutes = (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="forgotpwd" element={<ForgotPwd
        fgEmail={fgEmail}
        setFgEmail={e => setFgEmail(e)}
        setFgpwd={setFgpwdFunc} />}
      />
      {fgPwd && <Route path="/forgotpwd/verification" element={<Verification email={fgEmail} resetPwd={setResetpwdFunc} />} />}
      {resetPwd && <Route path="resetpwd" element={<ResetPwd />} />}
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<PageNil />} />
    </Routes>
  )

  const loggedInRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="deliveryhistory" element={<DeliveryHistory />} />
      <Route path="withdrawalhistory" element={<WithDHistory />} />
      <Route path="chat" element={<Chat />} />
      <Route path="notification" element={<Notification />} />
      <Route path="support" element={<Support />} />
      <Route path="settings" element={<Settings />} >
        <Route path="editProfile" element={<EditProfile />} />
        <Route path="security" element={<Security />} />
        <Route path="notificationSettings" element={<NotificationSettings />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<PageNil />} />
    </Routes>
  )
  

  return (
    <div className="App">
      {auth ? loggedInRoutes : loggedOutRoutes}
    </div>
  );
}

export default App;
