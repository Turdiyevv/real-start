import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        signUserStart: state => {
            state.isLoading = true;
        },
        signUserSuccess: state => {
            state.loggedIn = true;
            state.isLoading = false;
        },
        signUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})
export const {signUserStart,
    signUserSuccess,
    signUserFailure} = authSlice.actions;
export default  authSlice.reducer;