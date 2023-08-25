import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView , {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {Google_Maps_APIKey} from "@env";

const Map = () => {
    const origin= useSelector(selectOrigin);
    const destination= useSelector(selectDestination);
    const mapRef=useRef(null);// create a map reference so we can manipulate view and add vision

    useEffect(() => {
      if(!origin||!destination) return;

      //Zoom to map entire trip
      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'])},[origin, destination])

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005, //To maintain a street distiance kind of value
        longitudeDelta: 0.005,
      }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={Google_Maps_APIKey}
            strokeWidth={2}
            strokeColor="#37538C"
          />

        )}


        {origin?.location && (
            <Marker
              coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
              }}
              title="Me"
              description={origin.description}
              identifier="origin"
              />
            )}


        {destination?.location && (
            <Marker
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              title= "Destination"
              description={destination.description}
              identifier="destination"
              />
            )}
      </MapView>
    
  );
};

export default Map;
const styles = StyleSheet.create({});