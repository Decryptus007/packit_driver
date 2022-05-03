import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
}

const modalReducer = createSlice({
    name: 'modalState',
    initialState,
    reducers: {
        openAuthModal: state => { state.value = true },
        closeAuthModal: state => { state.value = false },
    }
})

export const { openAuthModal, closeAuthModal } = modalReducer.actions
export default modalReducer.reducer