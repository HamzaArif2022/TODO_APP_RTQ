import {configureStore} from "@reduxjs/toolkit";
import { PostApi } from "../API/PostApi.jsx";

export const store = configureStore({
    reducer: {
        [PostApi.reducerPath]: PostApi.reducer
    },
    // Cache, Polling , invalidate cache
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PostApi.middleware)
})
//refetchOnReconnect, refetchOnFocus
// YAGNI (
//setupListeners(store.dispatch)