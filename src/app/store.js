import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/authReducer";
import sideBarReducer from "../features/sideBarReducer";
import userDetailsReducer from "../features/userDetailsReducer";
import authModalReducer from "../features/authModalReducer";
import userUtilsReducer from "../features/userUtilsReducer";

export const store = configureStore({
    reducer: {
        authState: authReducer,
        userDetails: userDetailsReducer,
        sideBarState: sideBarReducer,
        authModalState: authModalReducer,
        userUtilsState: userUtilsReducer,
    },
})
