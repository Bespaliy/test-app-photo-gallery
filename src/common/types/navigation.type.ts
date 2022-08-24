import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { env } from "../../config/env";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

export type Route = keyof typeof env.ROUTER_KEYS;

export type RootStackParamList = {
	PhotoList: undefined
	Photo: {
		url: string
	}
};

export type PhotoScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	"Photo"
>;

export type PhotoScreenRouteProp = RouteProp<RootStackParamList, "Photo">;

export type NavigateProps = NativeStackScreenProps<RootStackParamList, Route>;
