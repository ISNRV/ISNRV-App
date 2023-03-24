import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import { Platform, Linking } from "react-native";
import { db, firebaseAuth } from "./important/config";
import * as Device from "expo-device";
import { useNavigation } from "@react-navigation/native";
import { ref, set } from "firebase/database";

//This handler determines how your app handles notifications that come in while the app is foregrounded
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function notifiyApp(navigation) {
  const [USER, setUSER] = useState(-1);
  useEffect(() => {
    // Set up the Firebase authentication listener and register for push notifications
    const unsubscribe = firebaseAuth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUSER(firebaseUser);
        registerForPushNotificationsAsync(firebaseUser.uid);
      }
    });

    // Set up the notification and notification response listeners
    const notificationListener = Notifications.addNotificationReceivedListener((notification) => {
      // Handle incoming notifications here
    });

    const notificationResponseListener = Notifications.addNotificationResponseReceivedListener((response) => {
      // Handle user interactions with notifications here
      navigation.navigate('Posts');
    });

    // Clean up the listeners when the component unmounts
    return () => {
      unsubscribe();
      notificationListener.remove();
      notificationResponseListener.remove();
    };
  }, []);
}

async function registerForPushNotificationsAsync(userr) {
  let token;
  if (Device.isDevice) {
    // const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      // const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      const { status } = await Notifications.getPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      //ON IOS NOT ALLOWED TO SEND NOTIFICATIONS
      Alert.alert("Failed to get push token for push notification!");
      return;
    }

    //Returns an Expo token that can be used to send a push notification to this device using Expo push notifications service.
    //Returns data (string) -- The push token as a string
    token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    Alert.alert("Must use physical device for Push Notifications");
  }

  //SAVE TOKENS OF MY APP IN REALTIME DATABASE
  //console.log("Token is saved" + token);
  
  set(ref(db, "USERS/" + userr), {
    token: token,
    name:
      Device.deviceName +
      " - " +
      Device.brand +
      " - " +
      Device.osName +
      " - " +
      Device.osVersion,
  });

  // STYLING NOTIFICATION TYPE FOR ANDROID
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      //Click on any of them to show the other options to be set
      name: "default",
      enableLights: true,
      showBadge: true,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      sound: "One Drop",
      lockscreenVisibility: true,
      lightColor: "#009688",
    });
  }
}
