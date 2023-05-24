import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const userSignup = createAsyncThunk(
    'user/signup',
    async (newUser, { dispatch }) => {
        const response = await fetch(baseUrl + 'users/signup', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok){
            return Promise.reject('Unable to POST to server. \nStatus: ' + response.status);
        }
        const data = await response.json();
        console.log('Return data from postUserSignup: ', data);
        if(data.success){
            dispatch(userLogin(newUser));
        }
        return data;
    }
); 

export const userLogin = createAsyncThunk(
    'user/login',
    async (currentUser, { dispatch }) => {
        const response = await fetch(baseUrl + 'users/login', {
            method:'POST',
            body: JSON.stringify(currentUser),
            headers: {
                'Content-Type': 'application/json'
            }
        }); 

        if(!response.ok){
            return Promise.reject('Could not log in.\nStatus: ' + response.status);
        }
        const data = await response.json();
        dispatch(setCurrentUser(data));
        return data;
    }
)

const initialState = {
    isLoading: false,
    currentUser: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload.id;
        }
    },
    extraReducers: {
        [userSignup.pending]: state => {
            state.isLoading = true;
        },
        [userSignup.rejected]: (state, action) => {
            state.isLoading = false;
            alert(
                'Sign up was unsuccessful\nError: ' + 
                (action.error ? action.error.message : 'Could not create account.')
            );
        },
        [userLogin.pending]: state =>{
            state.isLoading = true;
            state.currentUser = null;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
            alert(
                `Login successful for userId: ${action.payload.id}` 
            );
        },
        [userLogin.rejected]: (state, action) => {
            state.isLoading = false;
            state.currentUser = null;
            alert(
                'Login Failed\n', action.error.message
            );            
        }
    }
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

export const selectCurrentUser = state => {
    return state.user.currentUser;
}