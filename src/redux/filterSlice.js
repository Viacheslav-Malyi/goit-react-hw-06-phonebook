import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  status: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContact: {
      reducer(state, action) {
        state.status = action.payload.text;
      },
      prepare(text) {
        return {
          payload: {
            text,
          },
        };
      },
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getStatusFilter = state => state.filter;
