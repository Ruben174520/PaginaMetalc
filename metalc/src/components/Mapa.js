import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function Mapa() {
  const zoom = 10;
  const center = {
    lat: 22.120930754655156,
    lng: -100.9050073762789,
  };

  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCA1x60gUPELxQKFqVDLQbLP5WEseo6-F4",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
    map.setZoom(zoom)
  }, []);

  const unMount = React.useCallback(function callback(map) {
    setMap(null);
  });
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={unMount}
      id="place"
      zoom={22}
      options={{
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
        position={{ lat: 22.120930754655156, lng: -100.9050073762789 }}
      ></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Mapa;
