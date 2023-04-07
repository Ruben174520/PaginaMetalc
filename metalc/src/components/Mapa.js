import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import style from "../app/page.module.css";
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
      zoom={12}
      options={{
        mapTypeControl: true,
        mapTypeControlOptions: {
          position: window.google.maps.ControlPosition.TOP_RIGHT,
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          mapTypeIds: [
            google.maps.MapTypeId.ROADMAP,
            google.maps.MapTypeId.SATELLITE,
          ],
        },
      }}
    >
      <Marker
        position={{ lat: 22.120930754655156, lng: -100.9050073762789 }}
        label={"Metalc"}
      ></Marker>
      <div
        className="items-center align-middle
            absolute mx-6 my-6 transition-all
            font-Roboto font-bold text-4xl border-b-8
            hover:border-b-cyan-800 bg-white rounded-md cursor-pointer
            border-b-white"
      >
        <h1 className="mx-4 my-4">UBICA NUESTRA SUCURSAL</h1>
      </div>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Mapa;
