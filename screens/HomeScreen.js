import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
// Tailwind is used for CSS styling/ simplification
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Google_Maps_APIKey} from "@env";
import NavOptions from "../components/NavOptions";
import { useDispatch } from "react-redux";
import { setDestination,setOrigin } from "../slices/navSlice";


const HomeScreen = () => {
   const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <Image source= {require('./logo.jpg')} style ={{width: 400, height:140}} />

        <GooglePlacesAutocomplete
          placeholder="From location"
          styles ={{
            container: {
              flex:0,
            },
            textInput: {
              fontSize:18,
            },
          }}

          onPress={(data,details = null) => {
            dispatch(
              setOrigin({
              location: details.geometry.location,
              description: data.description,
            }));

            dispatch(setDestination(null));
          }}
          fetchDetails = {true}
          returnKeyType={"search"}
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