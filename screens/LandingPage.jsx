import React from "react";
import { View , Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function(){
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  } , []);

  return(
    <>
      <View className="h-[140px] w-full relative" >
        <View className="bg-[#00B0FF] h-[280px] w-[280px] rounded-full absolute top-[-140px] left-[-140px]  ">

        </View>
      </View>
    </>
  )
}