import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    audioPlayer: 'Spotify' 
}

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers:
    {
        setAudio: ( state, action ) =>{
            state.audioPlayer = action.payload ;
        },
    }
})

export const { setAudio } = preferencesSlice.actions;

export default preferencesSlice.reducer;