import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  description: '',
};

const errorSlice = createSlice({
  name: 'hello',
  initialState,
  reducers: {
    setTitle(state, action) {
      return { ...state, title: action.payload };
    },
    setDescription(state, action) {
      return { ...state, description: action.payload };
    },
  },
});

export const { setTitle, setDescription } = errorSlice.actions;

export const getTitle = () => (dispatch) => {
  // some async calls are welcome here...
  dispatch(setTitle(process.env.TITLE));
};

export const getDescription = () => (dispatch) => {
  // some async calls are welcome here...
  dispatch(setDescription('This is a skeleton app for react project.'));
};

export default errorSlice.reducer;
