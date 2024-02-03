import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { bibleUrl } from '../../app/shared/baseUrl';

export const fetchBibleBooks = createAsyncThunk(
    'bible/fetchBibleBooks',
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

export const fetchBibleBookChapter = createAsyncThunk(
    'bible/fetchBibleBookChapter',
    async ( {selectedBook, chapter} ) => {
        
        const response = await fetch(bibleUrl + `books/${selectedBook}/verses/${chapter}-${chapter}`);

        if(!response.ok){
            return Promise.reject('Unable to retrieve the list of bible books, status: ' + response.status);
        }
        const data = await response.json();
        console.log('return data from bible API verses is: ', data);
        return data;
    }
);

const initialState = {
    isLoading: true,
    errMsg: '',
    bibleArray: [],
    newBibleArray: []
};

const bibleSlice = createSlice({
    name: 'bible',
    initialState,
    reducers:{},
    extraReducers: {
        [fetchBibleBooks.pending]: state => {
            state.isLoading = true;
        },
        [fetchBibleBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.bibleArray = action.payload;
        },
        [fetchBibleBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Could not fetch bible books data.';
        }, 
        [fetchBibleBookChapter.pending]: state => {
            state.isLoading = true;
        },
        [fetchBibleBookChapter.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.newBibleArray = action.payload;
        },
        [fetchBibleBookChapter.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Could not fetch bible chapter data.';
        }
    }
});

export const bibleReducer = bibleSlice.reducer;