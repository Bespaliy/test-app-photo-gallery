import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { THEME } from "../../common/styles/global.style";
import { PhotoScreenRouteProp } from "../../common/types/navigation.type";

const PhotoPage = () => {
  const routes = useRoute<PhotoScreenRouteProp>();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: routes.params.url }}
        style={styles.fullScreen}
        resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: THEME.container,
  img: THEME.img,
  fullScreen: { width: "100%", minHeight: "100%" }
});

export default PhotoPage;
