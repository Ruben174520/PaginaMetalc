import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import style from "../app/page.module.css";
function Mapa(promps) {

  const center = React.useMemo(() => {
    // Calculate the center object here
    return { lat: 22.133607605661613 , lng: -100.95909167743125}; // Replace with your actual calculation
  }, []);
  const containerStyle = {
    width: "100%",
    height: promps.tam,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCA1x60gUPELxQKFqVDLQbLP5WEseo6-F4",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    console.log(map.getZoom())
    setMap(map);
  }, [center]);

  // const unMount = React.useCallback(function callback(map) {
  //   setMap(null);
  // });
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={unMount}
      zoom={12}
      id="place"
      options={{
        zoom:12,
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: window.google.maps.ControlPosition.TOP_LEFT,
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          mapTypeIds: [
            google.maps.MapTypeId.SATELLITE,
            google.maps.MapTypeId.TERRAIN
          ],
        },
      }}
    >
      <Marker
        position={{ lat: 22.133547976423497, lng: -100.95900584674825 }}
      ></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Mapa;
