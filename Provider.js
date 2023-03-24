import React, { useState, useEffect } from "react";
import { db } from "./important/config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ref, get, limitToLast, query, onValue, onChildAdded } from 'firebase/database';

//We import this "ISNRVContext" in all other files, where we want to use a global state
const ISNRVContext = React.createContext();

//STEPS-> put the provider around all in App.js, put a Ctxt in each file and just reuse a global mgmt state
const ISNRVProvider = (props) => {
  const loadAsyncData = async () => {
    try {
      //First, we will check if there's something already in my storage called "HijriCorrect"
      const Hijri_correct = await AsyncStorage.getItem("HijriCorrect"); //Previosuly has been set in toggleHijriCorrect
      Hijri_correct !== null
        ? setHijriCorrect(JSON.parse(Hijri_correct))
        : setHijriCorrect(0);
    } catch (error) { }
    return HijriCorrect;
  };

  const [HijriCorrect, setHijriCorrect] = useState(loadAsyncData());
  const [StablePost, setStablePost] = useState("Loading...");
  const [LastPost, setLastPost] = useState(null);
  const [postList, setPostList] = useState([]);

  const [time, setTime] = useState(0);

  useEffect(() => {
    loadAsyncData();
    
    // Fixed
    onChildAdded(query( ref(db, "Posts"), limitToLast(1)), (snapshot) => {
      setLastPost(snapshot.val());
    });
    // Fixed
    onValue(ref(db, "STATIC"), (snapshot) => {
      setStablePost(snapshot.val());
    });

    // Fixed
    onValue(query( ref(db, "Posts"), limitToLast(20)), (snapshot) => {
      // setStablePost(snapshot.val());
      let temp = [];
      snapshot.forEach(function (childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        temp.push(item);
      });
      setPostList([...temp.reverse()]);
  });
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // <-- Change this line!
    }, 15000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return (
    <ISNRVContext.Provider
      value={{ HijriCorrect, setHijriCorrect, StablePost, LastPost, postList }}
    >
      {props.children}
    </ISNRVContext.Provider>
  );
};

export { ISNRVContext, ISNRVProvider };
