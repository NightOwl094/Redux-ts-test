import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: [''],
    reducers: {
        addUser: (state, action: PayloadAction<string>) =>
            [...state, action.payload],

        removeLastUser: (state) =>
            state.filter((it, index) => index !== state.length - 1),
    }
})

export const {addUser, removeLastUser} = userSlice.actions
export default userSlice.reducer
