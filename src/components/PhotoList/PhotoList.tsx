import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IPhotoProps } from "../../common/types/photo.type";
import PhotoModel from "../../models/photo.model";
import Photo from "../PhotoListItem/PhotoListItem";
import { fetchPhoto } from "./PhotoListSlice";

type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<IPhotoProps[], null, AnyAction>

const PhotoList = () => {

	const photoLoadingStatus = useSelector<IPhotoProps>(state => state.photoLoadingStatus);
	const photo = useSelector<IPhotoProps, PhotoModel[]>(state => state.photo);
	const dispatch = useDispatch<AppDispatch>();
	
	useEffect(() => {
		dispatch(fetchPhoto());
	}, []);

	if (photoLoadingStatus === "loading") {
		return <Text>Loading...</Text>;
	} else if (photoLoadingStatus === "error") {
		return <Text>Error</Text>
	}

	return (
		<>
			<FlatList
				data={photo}
				renderItem={({ item }) =>
					<Photo {...item} />}
				keyExtractor={({ id }) => id} />
		</>
	)
}

export default PhotoList;