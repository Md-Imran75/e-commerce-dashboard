import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/Api'



export const modelAdd = createAsyncThunk(
    'model/modelAdd',
    async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {

 
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('image', image)
            const { data } = await api.post('/model-add', formData, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : "An error occurred");
        }
    }
)

export const get_model = createAsyncThunk(
    'model/get_model',
    async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/model-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const modelReducer = createSlice({
    name: 'model',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        models: [],
        totalmodel : 0
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(modelAdd.pending, (state, _) => {
            state.loader = true;
          })
          .addCase(modelAdd.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = payload.error;
          })
          .addCase(modelAdd.fulfilled, (state, { payload }) => {
            state.loader = false;
            state.successMessage = payload.message;
            state.models = [...state.models, payload.model];
          })
          .addCase(get_model.fulfilled, (state, { payload }) => {
            state.totalmodel = payload.totalmodel;
            state.models = payload.models;
          });
      }
      
})
export const { messageClear } = modelReducer.actions
export default modelReducer.reducer