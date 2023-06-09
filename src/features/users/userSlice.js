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
        
        if(data.success){
            dispatch(userLogin(newUser));
        }
        return data;
    }
); 

export const userLogin = createAsyncThunk(
    'user/login',
    async (userLoggingIn, { dispatch }) => {
        
        const response = await fetch(baseUrl + 'users/login', {
            method:'POST',
            body: JSON.stringify(userLoggingIn),
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
);

export const userLogout = createAsyncThunk(
    'user/logout',
    async () => {
        const bearer = 'Bearer ' + localStorage.getItem('token');

        const response = await fetch(baseUrl + 'users/logout', {
            headers: {
                Authorization: bearer,
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        });
        //Remove the token on client side no matter what happens with the fetch 
        localStorage.removeItem('token');

        if(!response.ok){
            return Promise.reject('There was an issue logging out on the server side, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

export const validateLogin = createAsyncThunk(
    'user/validateLogin',
    async (values, { dispatch }) => {
        const bearer = 'Bearer ' + localStorage.getItem('token');

        const response = await fetch(baseUrl + 'users/checkJWTtoken', {
            headers: {
                Authorization: bearer,
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        });

        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();

        if (!data.success) {
            dispatch(clearCurrentUser());
        }

        return data;
    }
);

const initialState = {
    isLoading: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token'),
    currentUser: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload.id;
        },
        clearCurrentUser: (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
            state.currentUser = '';
            localStorage.removeItem('token');
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
            state.currentUser = '';
            localStorage.removeItem('token');
        },
        [userLogin.fulfilled]: (state, action) => {
            state.isLoading = false;
            localStorage.setItem('token', action.payload.token);
        },
        [userLogin.rejected]: (state, action) => {
            state.isLoading = false;
            localStorage.removeItem('token');
            alert(
                'Login Failed\n', action.error.message
            );            
        },
        [userLogout.fulfilled]: (state) => {
            state.isLoading = false;
            state.currentUser = '';
        },
        [userLogout.rejected]: (state) => {
            state.isLoading = false;
            state.currentUser = '';
        }
    }
});

export const userReducer = userSlice.reducer;

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;

export const isAuthenticated = () => {
    return localStorage.getItem('token') ? true : false;
};

export const selectCurrentUser = state => {
    return state.user.currentUser;
};