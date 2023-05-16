import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalIsVisible: false,
  scrollDist: 0,
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
    setScrollDistance: (state, action) => {
      state.scrollDist = action.payload;
    },
    setModalVisible: (state, action) => {
      state.modalIsVisible = action.payload;
    },
    setShowCasedProject: (state, action) => {
      state.showCasedProject = action.payload;
    },
  },
});

export const { setModalVisible, setShowCasedProject, setScrollDistance } =
  appSlice.actions;
export default appSlice.reducer;
