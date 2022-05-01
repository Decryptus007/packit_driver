import { createSlice } from "@reduxjs/toolkit";

import defaultId from '../assets/images/defaultId.png'
import profileImg from '../assets/images/profileImg.png'

const initialState = {
    signupStage: 'stage1',
    fname: '',
    lname: '',
    phone: '',
    email: '',
    pwd: '',
    cpwd: '',
    country: '',
    marital: '',
    gender: '',
    altPhone: '',
    address: '',
    selectId: '',
    idVal: defaultId,
    idVal2: defaultId,
    profilePic: profileImg,
}

const signupReducer = createSlice({
    name: 'signupState',
    initialState,
    reducers: {
        setSignupStage: (state, action) => {state.signupStage = action.payload},
        setFname: (state, action) => {state.fname = action.payload},
        setLname: (state, action) => {state.lname = action.payload},
        setPhone: (state, action) => {state.phone = action.payload},
        setEmail: (state, action) => {state.email = action.payload},
        setPwd: (state, action) => {state.pwd = action.payload},
        setCpwd: (state, action) => {state.cpwd = action.payload},
        setCountry: (state, action) => {state.country = action.payload},
        setMarital: (state, action) => {state.marital = action.payload},
        setGender: (state, action) => {state.gender = action.payload},
        setAltphone: (state, action) => {state.altPhone = action.payload},
        setAddress: (state, action) => {state.address = action.payload},
        setSelectId: (state, action) => {state.selectId = action.payload},
        setIdval: (state, action) => {state.idVal = action.payload},
        setIdval2: (state, action) => {state.idVal2 = action.payload},
        setProfpic: (state, action) => {state.profilePic = action.payload},
    }
})

export const { setSignupStage, setFname, setLname, setPhone, setEmail, setPwd, setCpwd, setCountry, setMarital, setGender, setAltphone, setAddress, setSelectId, setIdval, setIdval2, setProfpic } = signupReducer.actions

export default signupReducer.reducer