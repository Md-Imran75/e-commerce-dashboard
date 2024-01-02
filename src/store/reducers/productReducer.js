import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/Api'


export const add_product = createAsyncThunk(
    'product/add_product',
    async (product, { rejectWithValue, fulfillWithValue }) => {
        console.log('product', product)
        try {
            const { data } = await api.post('/product-add', product, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const update_product = createAsyncThunk(
    'product/updateProduct',
    async (product, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/product-update', product, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const product_image_update = createAsyncThunk(
    'product/product_image_update',
    async ({ oldImage, newImage, productId }, { rejectWithValue, fulfillWithValue }) => {
      

        try {
            const formData = new FormData()
            formData.append('oldImage', oldImage)
            formData.append('newImage', newImage)
            formData.append('productId', productId)
            const { data } = await api.post('/product-image-update', formData, { withCredentials: true })
            console.log('data image',data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const document_image_update = createAsyncThunk(
    'product/document_image_update',
    async ({ oldImage, newImage, productId }, { rejectWithValue, fulfillWithValue }) => {
      

        try {
            const formData = new FormData()
            formData.append('oldImage', oldImage)
            formData.append('newImage', newImage)
            formData.append('productId', productId)
            const { data } = await api.post('/document-image-update', formData, { withCredentials: true })
            console.log('data image',data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const get_products = createAsyncThunk(
    'product/get_products',
    async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/products-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const get_product = createAsyncThunk(
    'product/get_product',
    async (productId, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/product-get/${productId}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const get_all_products_for_admin = createAsyncThunk(
    'product/get_all_products_for_admin',
    async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/all-products-get-for-admin?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);


export const delete_product = createAsyncThunk(
    'product/delete_product',
    async (productId, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/delete-product', { productId }, { withCredentials: true });
            return fulfillWithValue(data);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const get_product_request = createAsyncThunk(
    'seller/get_product_request',
    async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/request-product-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const product_status_update = createAsyncThunk(
    'seller/product_status_update',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        console.log(info)
        try {
            const { data } = await api.post(`/product-status-update`, info, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const get_active_products = createAsyncThunk(
    'seller/get_active_products',
    async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-products?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const get_rejected_products = createAsyncThunk(
    'seller/get_active_products',
    async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-rejected-products?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true })
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)





export const productReducer = createSlice({
    name: 'product',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        products: [],
        allProducts: [],
        product: '',
        totalProduct: 0
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
    },

    extraReducers: (builder) => {
  builder
    .addCase(add_product.pending, (state, _) => {
      state.loader = true;
    })
    .addCase(add_product.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    })
    .addCase(add_product.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
    })
    .addCase(get_products.fulfilled, (state, { payload }) => {
      state.totalProduct = payload.totalProduct;
      state.products = payload.products;
    })
    .addCase(get_product.fulfilled, (state, { payload }) => {
      state.product = payload.product;
    })
    .addCase(update_product.pending, (state, _) => {
      state.loader = true;
    })
    .addCase(update_product.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error;
    })
    .addCase(update_product.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.product = payload.product;
      state.successMessage = payload.message;
    })
    .addCase(product_image_update.fulfilled, (state, { payload }) => {
      state.product = payload.product;
      state.successMessage = payload.message;
    })
    .addCase(document_image_update.fulfilled, (state, { payload }) => {
      state.product = payload.product;
      state.successMessage = payload.message;
    })
    .addCase(delete_product.pending, (state, _) => {
        state.loader = true;
    })
    .addCase(delete_product.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
    })
    .addCase(delete_product.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
    })
    .addCase(get_all_products_for_admin.fulfilled, (state, { payload }) => {
        state.totalProduct = payload.totalProduct;
        state.allProducts = payload.products;
    })
    .addCase(product_status_update.fulfilled, (state, { payload }) => {
        state.product = payload.product;
        state.successMessage = payload.message;
      })
      .addCase(get_active_products.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.totalProduct = payload.totalProduct;
      })
      .addCase(get_product_request.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.totalProduct = payload.totalProduct;
      })

}

})
export const { messageClear } = productReducer.actions
export default productReducer.reducer