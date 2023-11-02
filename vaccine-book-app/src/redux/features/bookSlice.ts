import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

type VaccineState = {
    Items: BookingItem[]
}

const initialState:VaccineState = {Items:[]}

export const bookSlice = createSlice({
    name: "vaccine",
    initialState,
    reducers:{
        addBooking: (state, action: PayloadAction<BookingItem>)=>{
            const remainItem = state.Items.filter(obj =>{
                return ((obj.firstname !== action.payload.firstname && obj.lastname !== action.payload.lastname && obj.citizenId !== action.payload.citizenId))
            })
            state.Items = remainItem
            state.Items.push(action.payload)
        },
        removeBooking:(state, action: PayloadAction<BookingItem>)=>{
            const remainItem = state.Items.filter(obj =>{
                return ( (obj.firstname !== action.payload.firstname && obj.lastname !== action.payload.lastname && obj.citizenId !== action.payload.citizenId) )
            })
            state.Items = remainItem
        },
    }
})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer