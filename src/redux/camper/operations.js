import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://669cbf7a15704bb0e30429e3.mockapi.io/',
});

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/advert');

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
