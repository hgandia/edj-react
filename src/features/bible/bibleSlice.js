import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { bibleUrl } from '../../app/shared/baseUrl';

export const fetchBible = createAsyncThunk(
    'bible/fetchBible',
    async () => {
        const response = await fetch(bibleUrl + 'books');

        if(!response.ok){
            return Promise.reject('Unable to retrieve the list of bible books, status: ' + response.status);
        }
        const data = await response.json();
        console.log('return data from bible API is: ', data);
        return data;
    }
);

const initialState = {
    isLoading: true,
    errMsg: '',
    bibleArray: []
};

const bibleSlice = createSlice({
    name: 'bible',
    initialState,
    reducers:{},
    extraReducers: {
        [fetchBible.pending]: state => {
            state.isLoading = true;
        },
        [fetchBible.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.bibleArray = action.payload;
        },
        [fetchBible.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Could not fetch bible data.';
        }
    }
});

export const bibleReducer = bibleSlice.reducer;