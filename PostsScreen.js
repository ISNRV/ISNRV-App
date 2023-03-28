import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform, Dimensions,
  TouchableOpacity,
} from "react-native";
import { ISNRVContext } from "./Provider";

import { MaterialIcons } from "@expo/vector-icons";
import Autolink from "react-native-autolink";
import Accordion from "react-native-collapsible/Accordion";
import { LinearGradient } from 'expo-linear-gradient';


export default function Posts({ navigation }) {
  const [ActiveSections, setActiveSections] = useState([]);
  const Ctxt = useContext(ISNRVContext);

  const _renderHeader = (section) => {
    return (

      <View style={styles.TitleRect}>
        <LinearGradient colors={['#32AB9F', '#009688', '#32AB9F']} //#009688 #99D5CF --- Beautiful Blue ['#56CCF2', '#2F80ED'
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }} style={styles.TitleRect}>
          <Text style={styles.date}>{section.Date}</Text>
          <Text style={styles.Title}>{section.Title}</Text>
        </LinearGradient></View>

    );
  };
  const _renderContent = (section) => {
    return (
      <View style={styles.oneRect}>
        <Autolink
          text={section.Body}
          style={styles.PostText}
          showAlert={true}
          textProps={{ editable: true }}
        ></Autolink>
      </View>
    );
  };
  const _updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.TheBigTitle}>Announcements</Text>

      <ScrollView style={styles.scroll}>
        <Accordion
          sections={Ctxt.postList}
          activeSections={ActiveSections}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          onChange={_updateSections}
          touchableComponent={TouchableOpacity}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
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
        <MaterialIcons name="home" size={35} color="rgba(0,150,136,1)" />
        {/* <FontAwesome5 name="arrow-left" size={35} color="rgba(0,150,136,1)" /> */}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  scroll: {
    paddingTop: 10,
    paddingHorizontal: 12,
    marginBottom: 5,
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
  PostText: {
    color: "rgba(0,0,0,100)",
    fontSize: 18,
    textAlign: "left",
    paddingVertical: 5,
    paddingHorizontal: 4,
    flex: 1,
    lineHeight: 30
  },

  oneRect: {
    backgroundColor: "rgba(255,255,255,1)",
    marginBottom: 15,
    // marginLeft: 3,
    // marginRight: 3,
    elevation: 2,
    borderRadius: 10,
    borderColor: "rgba(0,150,136,1)",
  },

  TitleRect: {
    backgroundColor: "#56CCF2", //['#56CCF2', '#2F80ED'
    elevation: 6,
    shadowColor: "grey",
    marginBottom: 17,
    alignItems: "center",
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
  },
  Title: {
    paddingVertical: 5,
    fontSize: 23,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    color: "white",
    paddingVertical: 5,
    fontSize: 18,
  },
});
