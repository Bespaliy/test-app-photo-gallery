import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { env } from "./src/config/env";
import PhotoListPage from "./src/components/pages/PhotoList";
import PhotoPage from "./src/components/pages/Photo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={env.ROUTER_KEYS.PhotoList} component={PhotoListPage} />
          <Stack.Screen name={env.ROUTER_KEYS.Photo} component={PhotoPage} />
        </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}
