// src/redux/slices/bannersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BassUrl } from '../utils/BassUrl';

// Async thunk to fetch banners data
export const fetchBanners = createAsyncThunk('banner/fetchBanners', async () => {
    const Url = BassUrl();
    try {
        const response = await axios.get(`${Url}/api/banner`);
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

const bannerSlice = createSlice({
    name: 'banner',
    initialState: {
        banners: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBanners.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBanners.fulfilled, (state, action) => {
                state.loading = false;
                state.banners = action.payload;
            })
            .addCase(fetchBanners.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default bannerSlice.reducer;
