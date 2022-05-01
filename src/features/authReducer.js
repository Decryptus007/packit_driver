import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

const authReducer = createSlice({
    name: 'authState',
    initialState,
    reducers: {
        login: state => { state.value = true },
        logout: state => { state.value = false },
    }
})

export const { login, logout } = authReducer.actions
export default authReducer.reducer