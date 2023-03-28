import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator , TransitionPresets } from "@react-navigation/stack";
import Home from "./HomeScreen";
import Settings from "./SettingsScreen";
import { ScreenOrientation } from 'expo-screen-orientation';
import Posts from "./PostsScreen";
import { ISNRVProvider } from "./Provider";
import { Easing } from 'react-native';

const Stack = createStackNavigator();
export default function App() {
  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
    changeScreenOrientation();
  }, []);
  const fadeIn = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <ISNRVProvider>
      <NavigationContainer>
        {/* <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        > */}
         <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          cardStyleInterpolator: fadeIn, // add the custom animation here
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
