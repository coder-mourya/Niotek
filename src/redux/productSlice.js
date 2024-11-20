// src/redux/slices/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BassUrl } from '../utils/BassUrl';

// Async thunk to fetch products data
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const Url = BassUrl();
    try {
        const response = await axios.get(`${Url}/api/product`);
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productSlice.reducer;
