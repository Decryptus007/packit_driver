import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatValue: [],
}

const chatReducer = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setChatValue: (state, action) => { state.chatValue = [...state.chatValue, action.payload] }
    }
})

export const { setChatValue } = chatReducer.actions
export default chatReducer.reducer