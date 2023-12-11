import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/Api';

export const admin_Login = createAsyncThunk(
    'auth/admin_login',
    async (info , {rejectWithValue , fulfillWithValue}) => {
       
        try {
            const { data } = await api.post('/admin-login', info, { withCredentials: true })
            localStorage.setItem('accessToken' , data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
         }
    } 
)


export const seller_register = createAsyncThunk(
    'auth/seller_register',
    async (info , {rejectWithValue , fulfillWithValue}) => {
           
        try {
            const { data } = await api.post('/seller-register', info, { withCredentials: true })
            localStorage.setItem('accessToken' , data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
         }
    } 
)


export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: ''
    },
    reducers: {
        messageClear: (state, _) => {
              state.errorMessage =''
              state.successMessage =''
        }
    },
    extraReducers: {
           [admin_Login.pending] : (state , _) => {
            state.loader = true
           },
           [admin_Login.rejected] : (state, action) => {
            state.loader = false
            state.errorMessage = action.payload ? action.payload.error : 'An error occurred';
           },
           [admin_Login.fulfilled] : (state, action) => {
            state.loader = false
            state.successMessage = action.payload ? action.payload.message : 'An error occurred';
           },


           [seller_register.pending] : (state , _) => {
            state.loader = true
           },
           [seller_register.rejected] : (state, action) => {
            state.loader = false
            state.errorMessage = action.payload ? action.payload.error : 'An error occurred';
           },
           [seller_register.fulfilled] : (state, action) => {
            state.loader = false
            state.successMessage = action.payload ? action.payload.message : 'An error occurred';
           }
    }
});
export const {messageClear} = authReducer.actions
export default authReducer.reducer