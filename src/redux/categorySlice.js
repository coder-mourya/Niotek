// src/redux/slices/categoriesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BassUrl } from '../utils/BassUrl';

// Async thunk to fetch categories data
export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
    const Url = BassUrl();
    try {
        const response = await axios.get(`${Url}/api/category`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default categorySlice.reducer;
