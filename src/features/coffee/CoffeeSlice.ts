import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const coffeeSlice = createSlice({
    name: 'coffees',
    initialState: [''],
    reducers: {
        addCoffee: (state, action: PayloadAction<string>) => [...state, action.payload],
        removeLastCoffee: (state) => state.filter((it, index) => index !== state.length - 1),
    },
})

export const {addCoffee, removeLastCoffee} = coffeeSlice.actions
export default coffeeSlice.reducer
