import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./HomeScreen";
import Settings from "./SettingsScreen";
// import { ScreenOrientation } from 'expo-screen-orientation';
import Posts from "./PostsScreen";
import { ISNRVProvider } from "./Provider";
import { Animated, View, Text, StyleSheet, TouchableOpacity, Easing, EasingFunction } from 'react-native';

const Stack = createStackNavigator();
// async function changeScreenOrientation() {
//   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
// }
export default function App() {
  // changeScreenOrientation();
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  // }, []);
  const config = {
    animation: 'timing',
    config: {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    },
  };
  return (
    <ISNRVProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings}
          />
          <Stack.Screen name="Posts" component={Posts} />
        </Stack.Navigator>
      </NavigationContainer>
    </ISNRVProvider>
  );
}
