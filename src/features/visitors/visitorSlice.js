import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchVisitors = createAsyncThunk(
    'visitors/fetchVisitors',
    async () => {
        const response = await fetch(baseUrl + 'contactus/visitors');

        if(!response.ok){
            return Promise.reject('Unable to retrieve the list of visitors, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

export const postVisitor = createAsyncThunk(
    'visitors/postVisitor',
    async (petition) => {
        const response = await fetch(baseUrl + 'contactus', {
                                        method: 'POST',
                                        headers: {
                                                    'Content-Type': 'application/json'
                                                 },
                                        body: JSON.stringify(petition)
            });
            
            if (!response.ok) {
                return Promise.reject('Su pedido no ha sido sometido: ' + response.status);
            }
            const data = await response.json();
            console.log('Return data: ', data);
            return data;
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
        [postVisitor.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.visitorsArray.push(action.payload);
            state.errMsg = ''; 
            alert(
                    `Muchas gracias por contactarnos.\nSu peticion ha sido sometida.\nDios les bendiga ${action.payload.firstname} ${action.payload.lastname}.`
            );
        },
        [postVisitor.rejected]: (state, action) => {
            state.isLoading = false;
            alert(
                'Tu peticion no has sido sometida!\nError: ' +
                (action.error ? action.error.message : 'Sometimiento ha fallado')
            );
        }
    }

});

export const visitorReducer = visitorSlice.reducer;