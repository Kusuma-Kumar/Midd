import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
// Tailwind is used for CSS styling/ simplification
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutoComplete } from 'react-native-google-places-autocomplete';
import { Google_Maps_APIKey} from "@env";


const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Image source= {require('./logo.jpg')} style ={{width: 400, height:140}} />

        <GooglePlacesAutoComplete
          placeholder="From location"
          style ={{
            container: {
              flex:0,
            },
            textInput: {
              fontSize:18,
            },
          }}

          onPress={(data,details = null) => {
            console.log(data);
            console.log(details);

          }}
          fetchDeatils = {true}
          enablePoweredByContainer={false}
          minLength={2}
          query = {{
            key:Google_Maps_APIKey,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce = {400}
        />

        <NavOptions /> 
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});