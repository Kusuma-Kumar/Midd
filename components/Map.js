import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { Google_Maps_APIKey } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null); // create a map reference so we can manipulate view
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;

    // Zoom to map entire trip
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination']);
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination || !Google_Maps_APIKey) return;

    const getTravelTime = async () => {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${Google_Maps_APIKey}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data && data.rows && data.rows.length > 0 && data.rows[0].elements && data.rows[0].elements.length > 0) {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
        } else {
          console.error('Invalid or unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching travel time:', error);
      }
    };

    getTravelTime();
  }, [origin, destination, Google_Maps_APIKey]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType='mutedStandard'
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
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
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
const styles = StyleSheet.create({});
