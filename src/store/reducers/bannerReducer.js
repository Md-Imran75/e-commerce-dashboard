import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/Api'

export const delete_banner = createAsyncThunk(
    'banner/delete_banner',
    async (bannerId, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/delete-banner', { bannerId }, { withCredentials: true });
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const bannerAdd = createAsyncThunk(
    'banner/bannerAdd',
    async ({image }, { rejectWithValue, fulfillWithValue }) => {

 console.log('reducer', image)
        try {
            const formData = new FormData()
            formData.append('image', image)
               
            const { data } = await api.post('/banner-add', formData, { withCredentials: true })
            console.log('data', data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : "An error occurred");
        }
    }
)

export const get_banner = createAsyncThunk(
    'banner/get_banner',
    async (_, { rejectWithValue, fulfillWithValue }) => {
      try {
        const response = await api.get('/banner-get', { withCredentials: true });
        return fulfillWithValue(response.data);
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );



export const bannerReducer = createSlice({
    name: 'banner',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        banners: [],
        totalbanner : 0
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(bannerAdd.pending, (state, _) => {
            state.loader = true;
          })
          .addCase(bannerAdd.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = payload.error;
          })
          .addCase(bannerAdd.fulfilled, (state, { payload }) => {
            state.loader = false;
            state.successMessage = payload.message;
            state.banners = [...state.banners, payload.banner];
          })
          .addCase(get_banner.fulfilled, (state, { payload }) => {
            state.totalbanner = payload.totalbanner;
            state.banners = payload.banners;
          })
          .addCase(delete_banner.pending, (state, _) => {
            state.loader = true;
        })
        .addCase(delete_banner.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = payload.error;
        })
        .addCase(delete_banner.fulfilled, (state, { payload }) => {
            state.loader = false;
            state.successMessage = payload.message;
        })
      }
      
})
export const { messageClear } = bannerReducer.actions
export default bannerReducer.reducer