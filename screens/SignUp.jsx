import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function () {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[]);

  return (
    <>
      <View className="h-[130px] w-full relative" >
        <View className="bg-[#00B0FF] h-[260px] w-[260px] rounded-full absolute top-[-130px] left-[-130px]  ">

        </View>
      </View>
    </>
  )
}