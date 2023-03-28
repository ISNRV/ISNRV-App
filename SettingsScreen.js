import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
  FlatList
} from "react-native";
import { version } from "./package.json";
import Autolink from "react-native-autolink";
import { FontAwesome5 } from "@expo/vector-icons";
import { ISNRVContext } from "./Provider";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { ref, listAll, getDownloadURL } from '@firebase/storage';
import { storage } from "./important/config";
import * as FileSystem from "expo-file-system";

export default function Settings({ navigation }) {
  //Making use of the "ISNRVContext" from the Provider.js file
  // const Ctxt = useContext(ISNRVContext);
  // const toggleHijriCorrect = async (val) => {
  //   await AsyncStorage.setItem("HijriCorrect", JSON.stringify(val));
  //   Ctxt.setHijriCorrect(val);
  // };

  const Ctxt = useContext(ISNRVContext);
  const CACHED_IMAGES_DIR = FileSystem.cacheDirectory + "cached_images/";

  const [imageUrls, setImageUrls] = useState([]);
  const storageRef = ref(storage, 'Catalog/');


  useEffect(() => {
    const fetchImages = async () => {
      const { items } = await listAll(storageRef);
      const promises = items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        const filename = itemRef.name; // 1.jpg, 2.jpg, ....
        // Check if the image is already cached
        const fileInfo = await FileSystem.getInfoAsync(
          CACHED_IMAGES_DIR + filename
        );

        if (fileInfo.exists) {
          // If it's cached, use the local file URI
          return fileInfo.uri;
        } 
        else {
          // If it's not cached, download the file and cache it
          const fileUri = CACHED_IMAGES_DIR + filename;

          // Create the directory if it doesn't exist
          const directoryInfo = await FileSystem.getInfoAsync(
            CACHED_IMAGES_DIR,
            {
              isDirectory: true
            }
          );
          if (!directoryInfo.exists) {
            await FileSystem.makeDirectoryAsync(CACHED_IMAGES_DIR, {
              intermediates: true
            });
          }

          await FileSystem.downloadAsync(url, fileUri);  // If it's not cached, Download the contents at a remote URI to a file in the app's file system.
          return fileUri; // returning the local file URI.
        }
      });
      const urls = await Promise.all(promises);
      setImageUrls(urls);
    };



    fetchImages();
  }, []);


  catalogList = Ctxt.catalogList
  return (
    <View style={{ flex: 1, }}>

      <Text style={styles.TheBigTitle}>ISNRV Catalog</Text>
      {/* Image taking the first hlf of the page */}

      <FlatList
        data={imageUrls}
        renderItem={({ item }) => {
          return (
            <Image source={{ uri: item }} style={styles.carousalImage} />
          );
        }}
        // Any Key to be returned, just word "key" and the index
        keyExtractor={(item, index) => "key" + index}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={true}
        horizontal={true}
        pagingEnabled={true}
        getItemLayout={(data, index) => ({
          index,
          length: Dimensions.get("window").width,
          offset: Dimensions.get("window").width * index,
        })}

        style={{ height: Dimensions.get('window').height / 4 }}
      />

      {/* Links to Catalog pages */}
      <FlatList
        data={catalogList}
        keyExtractor={(item) => item.key}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={() => Linking.openURL(item.Link)} key={item.key} style={styles.touchable}>
              <LinearGradient colors={['#32AB9F', '#009688', '#32AB9F']} //#009688 #99D5CF --- Beautiful Blue ['#56CCF2', '#2F80ED'
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.catalogRect} >
                <Text style={styles.catalogTitle} linkStyle={{ fontWeight: "bold" }}>
                  {item.Title}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
        // * Bottom Social Media * 
        ListFooterComponent={
          <View>
            <LinearGradient colors={WHITE_GRADIENT_COLORS} style={styles.socialMediaContainer}>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/isnrv/")}>
                <View style={styles.iconContainer}>
                  <MaterialIcons name="facebook" size={ICON_SIZE * 0.6} color={BLUE_BORDER_COLOR} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.home.isnrv.org/")}>
                <View style={styles.iconContainer}>
                  <MaterialIcons name="language" size={ICON_SIZE * 0.6} color={BLUE_BORDER_COLOR} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/maps/dir//location+isnrv/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x884d957be02670a7:0x8763812a15f95476?sa=X&ved=2ahUKEwidh5SEl_j9AhW3KFkFHeVmBfwQ9Rd6BAhwEAQ")}>
                <View style={styles.iconContainer}>
                  <MaterialIcons name="location-on" size={ICON_SIZE * 0.6} color={BLUE_BORDER_COLOR} />
                </View>
              </TouchableOpacity>
            </LinearGradient>
            <Autolink text={"Version " + version} style={styles.smallText}></Autolink>
          </View>
        }
      />

      {/* 
      <TouchableOpacity
        onPress={() => Linking.openURL("http://www.isnrv.org/")}
        activeOpacity={0.5}
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          width: 64,
          height: 64,
          backgroundColor: "white",
          marginBottom: 10,
        }}
      >
        <Image
          source={require("./assets/round.png")}
          style={{
            width: 66,
            height: 66,
          }}
        />
      </TouchableOpacity> */}

      {/* Following is the back button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.5}
        accessibilityHint="settings"
        style={{
          borderRadius: 50,
          width: 65,
          height: 65,
          backgroundColor: "white",
          bottom: 15,
          left: 15,
          alignSelf: "flex-start",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          elevation: 3,
          shadowOpacity: 0.32,
          shadowRadius: 5.46,
          shadowColor: "#808080",
          shadowOffset: {
            width: 0,
            height: 4,
          },
        }}
      >
        {/* <FontAwesome5 name="arrow-left" size={35} color="rgba(0,150,136,1)" /> */}
        <MaterialIcons name="home" size={35} color="rgba(0,150,136,1)" />
      </TouchableOpacity>
    </View>

  );
}

const WHITE_GRADIENT_COLORS = ['#FFFFFF', '#F5F5F5'];
const BLUE_BORDER_COLOR = '#32AB9F';
const ICON_SIZE = 50;


const styles = StyleSheet.create({
  carousalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousalImage: {
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height / 2,
    resizeMode: 'cover',

  },

  flatListContainer: {
    alignItems: 'center',
    padding: 20
  },


  touchable: {
    elevation: 1,
    shadowColor: "grey",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
  },
  catalogRect: {
    backgroundColor: "#808080",
    width: Dimensions.get("window").width / 2.4,
    height: 60,
    margin: 5,
    justifyContent: 'center' // center vertically
  },

  catalogTitle: {
    paddingVertical: 5,
    fontSize: 21,
    color: "white",
    textAlign: "center",
    fontWeight: 'bold',
    justifyContent: 'center', // center vertically
  },

  socialMediaContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: BLUE_BORDER_COLOR,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    margin: 30,
    height: 50
  },
  iconContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    backgroundColor: 'transparent',
    borderRadius: ICON_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },


  TopRect: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },
  TheBigTitle: {
    color: "rgba(156,152,152,100)",
    fontSize: 30,
    textAlign: "left",
    marginBottom: 10,
    marginTop: 60,
    marginHorizontal: 12,
    paddingHorizontal: 9,
  },
  BackRect: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  PrayerTimes: {
    color: "rgba(255,255,255,1)",
    marginTop: 50,
    fontSize: 27,
    fontFamily: "recursive",
    alignSelf: "center",
    marginLeft: 12,
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  smallText: {
    color: "rgba(156,152,152,100)",
    fontSize: 14,
    flex: 1.4,
    flexGrow: 1,
    textAlign: "center",
  },
});
