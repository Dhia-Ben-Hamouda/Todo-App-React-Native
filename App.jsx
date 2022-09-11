import React from "react";
import { StatusBar , View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Navigator from "./routes/Navigator.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { useEffect } from "react";

export default function(){

  return(
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
        <View className="h-[140px] w-full relative" >
          <View className="bg-[#00B0FF] h-[280px] w-[280px] rounded-full absolute top-[-140px] left-[-140px]  ">
          </View>
        </View>
        <Navigator/>
      </Provider>
    </>
  )
}