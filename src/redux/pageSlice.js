// src/redux/slices/pagesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BassUrl } from '../utils/BassUrl';

// Async thunk to fetch pages data
export const fetchPages = createAsyncThunk('pages/fetchPages', async () => {
    const Url = BassUrl();
    try {
        const response = await axios.get(`${Url}/api/pages`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

const pagesSlice = createSlice({
    name: 'pages',
    initialState: {
        pages: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPages.fulfilled, (state, action) => {
                state.loading = false;
                state.pages = action.payload;
            })
            .addCase(fetchPages.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default pagesSlice.reducer;
