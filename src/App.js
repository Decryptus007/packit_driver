import React, { useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

import Signin from './components/Auth/Signin/Signin'
import Signup from './components/Auth/Signup/Signup'
import PageNil from './components/utils/PageNotFound/PageNotFound'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './App.css';

library.add(fab, fas, far)

function App() {
  const [auth, setAuth] = useState(false)

  const loggedOutRoutes = (
    <Routes>
      <Route path="/" element={<Signin />} />
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
