import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Google_Maps_APIKey } from "@env";
import NavOptions from "../components/NavOptions";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View>
        <View style={tw`h-1/6 bg-blue-900 flex items-center justify-center`}>
          <Text style={[tw`text-white text-center`, { fontSize: 44 }]}>Midd Dash</Text>
        </View>

        <GooglePlacesAutocomplete
          placeholder="From location"
          styles={toInputBoxStyles}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: Google_Maps_APIKey,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

const toInputBoxStyles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
  }
});