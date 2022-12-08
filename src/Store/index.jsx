import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { showSidebar: false };

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    showSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
  },
});

const store = configureStore({
  reducer: sidebarSlice.reducer,
});

export const sidebarAction = sidebarSlice.actions;
export default store;
