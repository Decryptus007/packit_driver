import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    requestAvailable: true,
    amountBalance: 25000,
    accepted: 20,
    declined: 5,
    rating: 3.5,
    totalEarn: 170000,
    totalWthdrw: 120000,
    totalBonus: 5000,
    totalTransact: 0,
    wthdrwHistory: []
}

initialState.totalTransact = initialState.totalEarn + initialState.totalBonus

const userUtilsReducer = createSlice({
    name: 'userUtils',
    initialState,
    reducers: {
        setRequestAvailable: (state) => { state.requestAvailable = false },
        setAmountBalnce: (state, action) => { state.amountBalance = action.payload },
        setAccepted: (state, action) => { state.accepted = action.payload },
        setDeclined: (state, action) => { state.declined = action.payload },
        setRating: (state, action) => { state.rating = action.payload },
        setTotalWthdrw: (state, action) => { state.totalWthdrw = parseInt(action.payload) },
        setWthdrwHistory: (state, action) => { state.wthdrwHistory = [...state.wthdrwHistory, action.payload] }
    }
})

export const {
    setRequestAvailable,
    setAmountBalnce,
    setAccepted,
    setDeclined,
    setRating,
    setTotalWthdrw,
    setWthdrwHistory
} = userUtilsReducer.actions

export default userUtilsReducer.reducer