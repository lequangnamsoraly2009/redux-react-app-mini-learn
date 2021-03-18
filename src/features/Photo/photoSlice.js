import { createSlice } from "@reduxjs/toolkit";

const initialPhotos = [];

const photo = createSlice({
  name: "photos",
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      const removePhotoId = action.payload;
      return (state = state.filter((photo) => photo.id !== removePhotoId));
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      // đi tìm id của thằng muốn upate trong state
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);

      // Kiểm tra nếu PhotoIndex có tồn tại trong mảng state
      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto; // set state tại vị trí state index bằng newPhoto => mutate trực tiếp trên mảng state hiện tại
      }
    },
  },
});

export const { addPhoto, removePhoto, updatePhoto } = photo.actions;
export default photo.reducer;
