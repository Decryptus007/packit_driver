import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true,
}

if (window.matchMedia("(max-width: 1024px)").matches) {
    initialState.value = false
}


const sideBarReducer = createSlice({
    name: 'sideBarState',
    initialState,
    reducers: {
        openSidebar: state => { state.value = true },
        closeSideBar: state => { state.value = false },
    }
})

export const { openSidebar, closeSideBar } = sideBarReducer.actions
export default sideBarReducer.reducer