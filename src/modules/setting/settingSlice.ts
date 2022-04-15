import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISetting {
  language: string;
}
const initialState: ISetting = {
  language: 'vi',
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => ({
      ...state,
      language: action.payload,
    }),
  },
});

export const { changeLanguage } = settingSlice.actions;
export default settingSlice.reducer;
