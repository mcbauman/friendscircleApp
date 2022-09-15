import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import Log from './components/Log';
import Header from './components/Header';
import Main from './components/Main';
import {MdSearch} from "react-icons/md"

// const userFromLS = localStorage.getItem("user");
// const userDefault = userFromLS ? JSON.parse(userFromLS) : null;

// const userProfPicLS = localStorage.getItem("userProfPic");
// const userProfPicDefault = userFromLS ? userProfPicLS : "";

// const tokenFromLS = localStorage.getItem("token");
// const tokenDefault = tokenFromLS ? tokenFromLS : null;

export default function App() {
  const [user, setUser] = useState("156486431354");
  const [token, setToken] = useState("1564341534-2");
  const [userProfPic, setUserProfPic] = useState();
  //const { theme, setLatitude, setLongitude } = useContext(Context);

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem("user", JSON.stringify(user));
  //   } else {
  //     localStorage.removeItem("user");
  //   }  
  // }, [user]);

  // useEffect(() => {
  //   if (token) {
  //     localStorage.setItem("token", token);
  //   } else {
  //     localStorage.removeItem("token");
  //   }
  // }, [token]);

  // useEffect(() => {
  //   if (userProfPic) {
  //     localStorage.setItem("userProfPic", userProfPic);
  //   } else {
  //     localStorage.removeItem("userProfPic");
  //   }
  // }, [userProfPic]);

  return (
    <View style={styles.container}>
      {user&&token?(
        <View>
          <Header setUser={setUser} setToken={setToken}
            setUserProfPic={setUserProfPic}
          />
          <Main
            setUser={setUser} user={user} setToken={setToken}
            token={token} userProfPic={userProfPic}
            setUserProfPic={setUserProfPic}
          />
        </View>
      ):(<Log
        setUser={setUser} setToken={setToken}
        setUserProfPic={setUserProfPic}
      />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
