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
    idVal: {
        imgDefault: defaultId,
        imgState: false,
    },
    idVal2: {
        imgDefault: defaultId,
        imgState: false,
    },
    profilePic: {
        imgDefault: profileImg,
        imgState: false,
    },
}

const userDetailsReducer = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        setSignupStage: (state, action) => { state.signupStage = action.payload },
        setFname: (state, action) => { state.fname = action.payload },
        setLname: (state, action) => { state.lname = action.payload },
        setPhone: (state, action) => { state.phone = action.payload },
        setEmail: (state, action) => { state.email = action.payload },
        setPwd: (state, action) => { state.pwd = action.payload },
        setCpwd: (state, action) => { state.cpwd = action.payload },
        setCountry: (state, action) => { state.country = action.payload },
        setMarital: (state, action) => { state.marital = action.payload },
        setGender: (state, action) => { state.gender = action.payload },
        setAltphone: (state, action) => { state.altPhone = action.payload },
        setAddress: (state, action) => { state.address = action.payload },
        setSelectId: (state, action) => { state.selectId = action.payload },
        setIdval: (state, action) => { state.idVal.imgDefault = action.payload },
        setIdvalState: (state, action) => { state.idVal.imgState = action.payload },
        setIdval2: (state, action) => { state.idVal2.imgDefault = action.payload },
        setIdval2State: (state, action) => { state.idVal2.imgState = action.payload },
        setProfpic: (state, action) => { state.profilePic.imgDefault = action.payload },
        setProfpicState: (state, action) => { state.profilePic.imgState = action.payload },
    }
})

export const {
    setSignupStage,
    setFname,
    setLname,
    setPhone,
    setEmail,
    setPwd,
    setCpwd,
    setCountry,
    setMarital,
    setGender,
    setAltphone,
    setAddress,
    setSelectId,
    setIdval,
    setIdvalState,
    setIdval2,
    setIdval2State,
    setProfpic,
    setProfpicState,
} = userDetailsReducer.actions

export default userDetailsReducer.reducer