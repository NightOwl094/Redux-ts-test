import {combineReducers, configureStore} from "@reduxjs/toolkit";
import CoffeeSlice from "../features/coffee/CoffeeSlice";
import UserSlice from "../features/user/UserSlice";

export const rootReducer = combineReducers({
    coffees: CoffeeSlice,
    users: UserSlice
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer
})

export default store
