import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/Api'


export const get_sellers = createAsyncThunk(
    'chat/get_sellers',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/chat/admin/get-sellers`, { withCredentials: true })
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const send_message_seller_admin = createAsyncThunk(
    'chat/send_message_seller_admin',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post(`/chat/message-send-seller-admin`, info, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const get_admin_message = createAsyncThunk(
    'chat/get_admin_message',
    async (receverId, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/chat/get-admin-messages/${receverId}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_seller_message = createAsyncThunk(
    'chat/get_seller_message',
    async (receverId, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/chat/get-seller-messages`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)




export const chatReducer = createSlice({
    name: 'seller',
    initialState: {
        successMessage: '',
        errorMessage: '',
        messages: [],
        activeSellers: [],
        messageNotification: [],
        activeAdmin: "",
        seller_admin_message: [],
        currentSeller: {},
        sellers: []
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage = ""
        },
        updateMessage: (state, { payload }) => {
            state.messages = [...state.messages, payload]
        },
      
        updateSellers: (state, { payload }) => {
            state.activeSellers = payload
        },
        updateAdminMessage: (state, { payload }) => {
            state.seller_admin_message = [...state.seller_admin_message, payload]
        },
        updateSellerMessage: (state, { payload }) => {
            state.seller_admin_message = [...state.seller_admin_message, payload]
        },
        activeStatus_update: (state, { payload }) => {
            state.activeAdmin = payload.status
        }
    },


    extraReducers: (builder) => {
  builder
    .addCase(get_sellers.fulfilled, (state, { payload }) => {
      state.sellers = payload.sellers;
    })
    .addCase(send_message_seller_admin.fulfilled, (state, { payload }) => {
      state.seller_admin_message = [...state.seller_admin_message, payload.message];
      state.successMessage = 'message send success';
    })
    .addCase(get_admin_message.fulfilled, (state, { payload }) => {
      state.seller_admin_message = payload.messages;
      state.currentSeller = payload.currentSeller;
    })
    .addCase(get_seller_message.fulfilled, (state, { payload }) => {
      state.seller_admin_message = payload.messages;
    });
}
})
export const { messageClear, updateMessage, updateSellers, updateAdminMessage, updateSellerMessage, activeStatus_update } = chatReducer.actions
export default chatReducer.reducer