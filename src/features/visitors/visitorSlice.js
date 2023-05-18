import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';


export const postVisitor = createAsyncThunk(
    'visitors/postVisitor',
    async (petition, { dispatch }) => {
        const response = await fetch(baseUrl + 'visitors/', {
                                        method: 'POST',
                                        headers: {
                                                    'Content-Type': 'application/json'
                                                 },
                                                credentials: 'same-origin',
                                        body: JSON.stringify(petition)
            });

            if (!response.ok) {
                return Promise.reject(response.status);
            }
            const data = await response.json();
            dispatch(petition);
    }
);

const initialState = {
    isLoading: true,
    errMsg: ''
};

const visitorSlice = createSlice({
    name: 'visitors',
    initialState,
    reducers:{},
    extraReducers: {
        [postVisitor.pending]: state => {
            state.isLoading = true;
        },
        [postVisitor.rejected]: (state, action) => {
            alert(
                'Tu peticion no has sido sometida\nError: ' +
                (action.error ? action.error.message : 'Sometimiento ha fallado')
            );
        }
    }

});