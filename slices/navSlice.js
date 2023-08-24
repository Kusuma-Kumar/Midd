/* 
Navigation elements like origian , destination and time estimation
Layer of bunddled info required for everyride/ every passenger
*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destintion: null,
    travelTimeInformation: null
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducer: {
        setOrigin: (state,action) => {
            state.origin = action.payload;
        },
        setDestination: (state,action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state,action) =>{ 
            state.travelTimeInformation = action.payload;
        },
    },
});

export const { setOrigin, setDestination,setTravelTimeInformation } = navSlice.actions;

//Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;
