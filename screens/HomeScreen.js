import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
// Tailwind is used for CSS styling/ simplification
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";


const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Image source= {require('./logo.jpg')} style={styles.logo} />

        <NavOptions style={tw`mt-8`} /> 
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});