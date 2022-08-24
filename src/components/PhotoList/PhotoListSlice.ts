import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "../../services/photo.service";
import { IPhotoProps } from "../../common/types/photo.type";

const initialState: IPhotoProps = {
	photo: [],
	photoLoadingStatus: "idle",
};

export const fetchPhoto = createAsyncThunk(
	"photo/fetchPhoto",
	async () => {
		return await photoService.getAllPhoto();
	}
);

const photoSlice = createSlice({
	name: "photo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPhoto.pending, state => { state.photoLoadingStatus = "loading" })
			.addCase(fetchPhoto.fulfilled, (state, action) => {
				state.photoLoadingStatus = "idle";
				state.photo = action.payload;
			})
			.addCase(fetchPhoto.rejected, state => {
				state.photoLoadingStatus = "error";
			})
			.addDefaultCase(() => { })
	}
});

const { reducer } = photoSlice;

export default reducer;