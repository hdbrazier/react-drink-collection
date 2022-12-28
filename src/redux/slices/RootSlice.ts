import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice ({
    name: "root",
    initialState: {
        name: "Name",
        kind: "Kind",
        year: "Year",
        price: "Price",
        quantity: "Quantity",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseKind: (state, action) => { state.kind = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseQuantity: (state, action) => { state.quantity = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseKind, chooseYear, choosePrice, chooseQuantity } = rootSlice.actions;