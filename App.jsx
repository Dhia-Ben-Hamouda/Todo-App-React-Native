import React from "react";
import { StatusBar } from "react-native";
import Navigator from "./routes/Navigator.jsx";

export default function(){
  return(
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <Navigator/>
    </>
  )
}