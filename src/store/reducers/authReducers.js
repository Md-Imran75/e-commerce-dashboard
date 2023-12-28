import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/Api';
import { jwtDecode } from 'jwt-decode'

export const admin_Login = createAsyncThunk(
    'auth/admin_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {

        try {
            const { data } = await api.post('/admin-login', info, { withCredentials: true })
            localStorage.setItem('accessToken', data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const seller_login = createAsyncThunk(
    'auth/seller_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {

        try {
            const { data } = await api.post('/seller-login', info, { withCredentials: true })
            localStorage.setItem('accessToken', data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const seller_register = createAsyncThunk(
    'auth/seller_register',
    async (info, { rejectWithValue, fulfillWithValue }) => {

        try {
            const { data } = await api.post('/seller-register', info, { withCredentials: true })
            localStorage.setItem('accessToken', data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const profile_image_upload = createAsyncThunk(
    'auth/profile_image_upload',
    async (image, { rejectWithValue, fulfillWithValue }) => {
        console.log(image)
        try {
            const { data } = await api.post('/profile-image-upload', image, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const profile_info_add = createAsyncThunk(
    'auth/profile_info_add',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/profile-info-add', info, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)




export const logout = createAsyncThunk(
    'auth/logout',
    async ({ navigate, role }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get('/logout', { withCredentials: true })
            localStorage.removeItem('accessToken')
            if (role === 'admin') {
                navigate('/admin/imranbike')
            } else {
                navigate('/login')
            }

            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const get_user_info = createAsyncThunk(
    'auth/get_user_info',
    async (_info, { rejectWithValue, fulfillWithValue }) => {

        try {
            const { data } = await api.get('/get-user', { withCredentials: true })

            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const returnRole = (token) => {
    if (token) {

        const decodeToken = jwtDecode(token)
        console.log(decodeToken.role)
        const expireTime = new Date(decodeToken.exp * 1000)
        if (new Date() > expireTime) {
            localStorage.removeItem('accessToken')
            return ''
        } else {
            return decodeToken.role
        }

    } else {
        return ''
    }
}



export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: '',
        role: returnRole(localStorage.getItem('accessToken')),
        token: localStorage.getItem('accessToken')
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ''
            state.successMessage = ''
        },

    },



    extraReducers: (builder) => {
        builder
            .addCase(admin_Login.pending, (state , _) => {
                state.loader = true;
            })
            .addCase(admin_Login.rejected, (state, action) => {
                state.loader = false;
                state.errorMessage = action.payload ? action.payload.error : 'An error occurred';
            })
            .addCase(admin_Login.fulfilled, (state, action) => {
                state.loader = false;
                state.successMessage = action.payload ? action.payload.message : 'An error occurred';
                state.token = action.payload ? action.payload.token : 'An error occurred';
                state.role = action.payload ? action.payload.role : 'An error occurred';
            })

            .addCase(seller_login.pending, (state, _) => {
                state.loader = true;
            })
            .addCase(seller_login.rejected, (state, action) => {
                state.loader = false;
                state.errorMessage = action.payload ? action.payload.error : 'An error occurred';
            })
            .addCase(seller_login.fulfilled, (state, action) => {
                state.loader = false;
                state.successMessage = action.payload ? action.payload.message : 'An error occurred';
                state.token = action.payload ? action.payload.token : 'An error occurred';
                state.role = action.payload ? action.payload.role : 'An error occurred';
            })

            .addCase(seller_register.pending, (state, _) => {
                state.loader = true;
            })
            .addCase(seller_register.rejected, (state, action) => {
                state.loader = false;
                state.errorMessage = action.payload ? action.payload.error : 'An error occurred';
            })
            .addCase(seller_register.fulfilled, (state, action) => {
                state.loader = false;
                state.successMessage = action.payload ? action.payload.message : 'An error occurred';
                state.token = action.payload ? action.payload.token : 'An error occurred';
                state.role = action.payload ? action.payload.role : 'An error occurred';
            })



            .addCase(get_user_info.fulfilled, (state, action) => {
                state.loader = false;
                state.userInfo = action.payload.userInfo;
            })

            .addCase(profile_image_upload.fulfilled, (state, {payload}) => {
                state.loader = false
                state.userInfo = payload.userInfo
                state.successMessage = payload.message;
            })

            .addCase(profile_image_upload.pending, (state, _) => {
                state.loader = true;
            })

            .addCase(profile_info_add.pending, (state, _) => {
                state.loader = true;
            })
            
            .addCase(profile_info_add.fulfilled, (state, {payload}) => {
                state.loader = false
                state.userInfo = payload.userInfo
                state.successMessage = payload.message
            })
           
            
    
    },
});


export const { messageClear } = authReducer.actions
export default authReducer.reducer
