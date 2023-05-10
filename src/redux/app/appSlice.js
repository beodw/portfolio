import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsVisible: false,
  showCasedProject: {
    name: "",
    description: "",
    tags: [],
    image: "",
    source_code_link: "",
    liveSiteLink: "",
    carousel_images: [],
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setModalVisible: (state, action) => {
      state.modalIsVisible = action.payload;
    },
    setShowCasedProject: (state, action) => {
      state.showCasedProject = action.payload;
    },
  },
});

export const { setModalVisible, setShowCasedProject } = appSlice.actions;
export default appSlice.reducer;
