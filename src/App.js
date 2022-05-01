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
      <Route path="/" element={<PageNil />} />
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
