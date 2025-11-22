import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsAPI } from "./api";

export const fetchAllProducts = createAsyncThunk('users/fetchAllProducts', async () => {
    const resp = await ProductsAPI.get('');
    return resp.data.products;
})

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

const backendSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            return {...state, users: state.users.filter(item => item.id != action.payload)}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        })
        builder.addCase(fetchAllProducts.rejected, (state) => {
            state.isLoading = false;
            state.error = 'Xatolik'
        })
    }
})

export const {deleteProduct} = backendSlice.actions;
export default backendSlice.reducer;