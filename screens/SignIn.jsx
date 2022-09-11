import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useState } from "react";
import img from "../images/illustration.png";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput, Keyboard , ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

export default function () {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  function pressHandler() {
    Keyboard.dismiss();
  }

  function toggle()
  {
    navigation.navigate("SignUp");
  }

  async function submitHandler()
  {
    const response = await fetch("http://localhost:5000/auth/signIn",{
      method:"POST",
      header:{
        "content-type":"application/json"
      },
      body: JSON.stringify({

      })
    })
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={pressHandler} >
        <ScrollView>
          <View className="h-[130px] w-full relative" >
            <View className="bg-[#00B0FF] h-[260px] w-[260px] rounded-full absolute top-[-130px] left-[-130px]  ">

            </View>
          </View>
          <View className="flex items-center px-8">
            <Text className="text-2xl font-bold text-[#777] mb-4" >
              Welcome Back !
            </Text>
            <Image source={img} className="scale-[0.8] mb-4" />
            <View className="mb-4 shadow bg-[white] flex flex-row py-3 px-6 w-full rounded-full">
              <FontAwesome name="user" color={"#777"} size={25} />
              <TextInput
                className="flex-1 ml-4"
                placeholder="Enter email..."
              />
            </View>
            <View className="mb-2 shadow bg-[white] flex flex-row py-3 px-6 w-full rounded-full">
              <FontAwesome name="lock" color={"#777"} size={25} />
              <TextInput
                className="flex-1 ml-4"
                placeholder="Enter password..."
                secureTextEntry={true}
              />
            </View>
            <View className="w-full py-2 mb-2" >
              <Text className="text-right font-bold text-[#00b0ff]" >
                Forgot password ?
              </Text>
            </View>
            <TouchableOpacity className="mb-3 w-full" onPress={submitHandler}>
              <View className="bg-[#00B0FF] w-full p-3 rounded-full flex items-center justify-center" >
                <Text className="text-white font-bold text-lg" >
                  Sign in
                </Text>
              </View>
            </TouchableOpacity>
            <View className="flex flex-row mb-4">
              <Text className="text-[#777] font-bold" >
                Don't have an account ?
              </Text>
              <Text className="ml-1 text-[#00b0ff] font-bold" onPress={toggle}>
                Sign up !
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  )
}