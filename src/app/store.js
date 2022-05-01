import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authReducer";
import signupReducer from "../features/signupReducer";

export const store = configureStore({
    reducer: {
        authState: authReducer,
        signupState: signupReducer,
    },
})
