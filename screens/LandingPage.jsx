import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native";
import { useEffect } from "react";
import img from "../images/illustration.png";

export default function () {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  function pressHandler()
  {
    
  }

  return (
    <>
      <View className="h-[140px] w-full relative" >
        <View className="bg-[#00B0FF] h-[280px] w-[280px] rounded-full absolute top-[-140px] left-[-140px]  ">

        </View>
      </View>
      <View className="p-4 flex items-center">
        <Image source={img} className="mb-8" />
        <Text className="font-bold text-2xl text-[#777] mb-6">
          Get things done with our Todo App
        </Text>
        <Text className="text-[#777] text-lg px-2 leading-8 mb-6">
          Our Todo App allows you to manage your daily tasks in an organised way , resulting in an increase in productivity !
        </Text>
        <TouchableHighlight className="w-full" onPress={pressHandler}>
          <View className="bg-[#00B0FF] w-full flex justify-center items-center p-4 rounded-full">
            <Text className="text-[#fff] text-lg font-bold  ">
              Get Started
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  )
}