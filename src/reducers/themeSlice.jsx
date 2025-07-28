import { THEME_MODES } from '@/utils/constants';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: localStorage.getItem('themeSettings') && JSON.parse(localStorage.getItem('themeSettings'))?.mode || 'system',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateThemeMode: (state, action) => {
      const newThemeMode = action.payload;
      if (Object.values(THEME_MODES).includes(newThemeMode)) {
        state.mode = newThemeMode;
        localStorage.setItem('themeSettings', JSON.stringify(state))
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateThemeMode } = themeSlice.actions

export const themeModeSelector = (state) => state.theme.mode;

export default themeSlice.reducer