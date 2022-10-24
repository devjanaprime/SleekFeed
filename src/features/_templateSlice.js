import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0 
}

export const _templateSlice = createSlice({
    name: '_template',
    initialState,
    reducers:
    {
        increment: ( state ) =>{
            state.count += 1 ;
        }
    }
})

export const { increment } = _templateSlice.actions;

export default _templateSlice.reducer;