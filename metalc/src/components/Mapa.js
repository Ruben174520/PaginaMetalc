import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function Mapa() {
  const zoom = 2;
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const center = {
    lat: 22.120930754655156,
    lng: -100.9050073762789,
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
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
      zoom={zoom}
      options={{
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: window.google.maps.ControlPosition.TOP_RIGHT,
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE],
        },
      }}
    >
      <Marker
        position={{ lat: 22.120930754655156, lng: -100.9050073762789 }}
        label={"Metalc"}
      ></Marker>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <h1>Título</h1>
        <p>Contenido</p>
      </div>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Mapa;
