import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/Api'



export const brandAdd = createAsyncThunk(
    'brand/brandAdd',
    async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
             console.log(name)
             console.log(image)
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('image', image)
            console.log(name , image)
            const { data } = await api.post('/brand-add', formData, { withCredentials: true })
            console.log('data from' , data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : "An error occurred");
        }
    }
)

export const get_brand = createAsyncThunk(
    'brand/get_brand',
    async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/brand-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const brandReducer = createSlice({
    name: 'brand',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        brands: [],
        totalbrand: 0
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(brandAdd.pending, (state, _) => {
            state.loader = true;
          })
          .addCase(brandAdd.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = payload.error;
          })
          .addCase(brandAdd.fulfilled, (state, { payload }) => {
            state.loader = false;
            state.successMessage = payload.message;
            state.brands = [...state.brands, payload.brand];
          })
          .addCase(get_brand.fulfilled, (state, { payload }) => {
            state.totalbrand = payload.totalbrand;
            state.brands = payload.brands;
          });
      }
      

})
export const { messageClear } = brandReducer.actions
export default brandReducer.reducer