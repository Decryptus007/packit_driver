import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatValue: [
        {mssg: 'Hello', style: 'reciever'},
        { mssg: 'I am the client that requested for your service, Have you reach the drop point?', style: 'reciever' },
    ],
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