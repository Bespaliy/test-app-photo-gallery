import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native"
import { THEME } from "../../common/styles/global.style";
import { PhotoScreenNavigationProp } from "../../common/types/navigation.type";
import { env } from "../../config/env";
import PhotoModel from "../../models/photo.model";

const Photo = (photo: PhotoModel) => {

	const { navigate } = useNavigation<PhotoScreenNavigationProp>();

	const { description, author, urls } = photo;

	return (
		<View style={styles.container}>
			<View style={styles.halfScreen}>
				<Text style={styles.fontSize}>Title: {description}</Text>
				<Text style={styles.fontSize}>Autor: {author}</Text>
			</View>
			<TouchableHighlight
				style={{...styles.img, flex: 2}}
				onPress={() => navigate(env.ROUTER_KEYS.Photo, { url: urls.full })}>
				<Image
					source={{ uri: urls.thumb }}
					style={styles.fullScreen}
					resizeMode="contain" />
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	container: THEME.container,
	img: THEME.img,
	fontSize: THEME.textFS,
	halfScreen: { width: "50%" },
	fullScreen: { width: "100%", minHeight: "100%" }
});

export default Photo;