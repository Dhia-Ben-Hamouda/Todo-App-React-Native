import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import img from "../images/illustration.png";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput , Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

export default function () {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  function pressHandler()
  {
    Keyboard.dismiss();
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={pressHandler} >
        <View>
          <View className="h-[140px] w-full relative" >
            <View className="bg-[#00B0FF] h-[280px] w-[280px] rounded-full absolute top-[-140px] left-[-140px]  ">

            </View>
          </View>
          <View className="flex items-center px-8">
            <Text className="text-2xl font-bold text-[#777] mb-4" >
              Welcome Back !
            </Text>
            <Image source={img} className="scale-[0.8] mb-4" />
            <View className="bg-[white] flex flex-row py-4 px-6 w-full rounded-full">
              <FontAwesome name="user" color={"#777"} size={25} />
              <TextInput 
                className="flex-1 ml-4" 
                placeholder="Enter email..."
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}