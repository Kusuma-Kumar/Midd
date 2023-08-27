import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Google_Maps_APIKey} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination,setOrigin } from "../slices/navSlice";
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <GooglePlacesAutocomplete
          placeholder='Destination?'
          styles={toInputBoxStyles}
          fetchDetails = {true}
          returnKeyType={"search"}
          
          minLength={2}
          onPress={(data,details = null) => {
            dispatch(
              setDestination({
              location: details.geometry.location,
              description: data.description,
            }));

            navigation.navigate("RideOptionsCard")
          }}
          enablePoweredByContainer={false}
          query = {{
            key:Google_Maps_APIKey,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce = {400}

        />

      </View>
      </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container:{
        paddingTop: 10,
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