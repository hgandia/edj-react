import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchVisitors = createAsyncThunk(
    'visitors/fetchVisitors',
    async () => {
        const response = await fetch(baseUrl + 'visitors');

        if(!response.ok){
            return Promise.reject('Unable to retrieve the list of visitors, status: ' + response.status);
        }
        const data = await response.json();
        console.log('The return data in fetchVisitor is: ', data);
        return data;
    }
);

export const postVisitor = createAsyncThunk(
    'visitors/postVisitor',
    async (petition) => {
        const response = await fetch(baseUrl + 'visitors/', {
                                        method: 'POST',
                                        headers: {
                                                    'Content-Type': 'application/json'
                                                 },
                                                credentials: 'same-origin',
                                        body: JSON.stringify(petition)
            });
            console.log('The reponse object is: ', response);
            if (!response.ok) {
                return Promise.reject('Su pedido no ha sido sometido: ' + response.status);
            }
            const data = await response.json();
            console.log('The return data in postVisitor is: ', data);
    }
);

const initialState = {
    isLoading: true,
    errMsg: '',
    visitorsArray: []
};

const visitorSlice = createSlice({
    name: 'visitors',
    initialState,
    reducers:{},
    extraReducers: {
        [fetchVisitors.pending]: state => {
            state.isLoading = true;
        },
        [fetchVisitors.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.visitorsArray = action.payload;
        },
        [fetchVisitors.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Could not fetch visitors data.';
        },
        [postVisitor.pending]: state => {
            state.isLoading = true;
        },
        [postVisitor.rejected]: (state, action) => {
            alert(
                'Tu peticion no has sido grabada\nError: ' +
                (action.error ? action.error.message : 'Sometimiento ha fallado')
            );
        }
    }

});

export const visitorReducer = visitorSlice.reducer;