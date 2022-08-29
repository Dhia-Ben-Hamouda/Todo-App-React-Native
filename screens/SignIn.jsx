import React from "react";
import { View , Image , TouchableOpacity , Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import img from "../images/illustration.png";

export default function(){
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  } , [])

  return(
    <>
      <View className="h-[140px] w-full relative" >
        <View className="bg-[#00B0FF] h-[280px] w-[280px] rounded-full absolute top-[-140px] left-[-140px]  ">

        </View>
      </View>
      <View>
        <Text>
          Welcome Back !
        </Text>
      </View>
    </>
  )
}