import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NameState {
  firstName: string;
  lastName: string;
}

const initialState: NameState = {
  firstName: '',
  lastName: '',
};

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
  },
});

export const { setFirstName, setLastName } = nameSlice.actions;

export default nameSlice.reducer;
