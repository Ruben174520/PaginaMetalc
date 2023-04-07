import { GoogleMap, OverlayView } from "@react-google-maps/api";
import React from "react";
export const CustomOverlay = ({ position, mapPaneName, children }) => {
  const overlayViewRef = React.useRef(null);

  const onOverlayViewLoad = (overlayView) => {
    overlayViewRef.current = overlayView;
  };

  const onOverlayViewChanged = () => {
    if (overlayViewRef.current) {
      const projection = overlayViewRef.current.getProjection();
      const position = new window.google.maps.LatLng(40.748817, -73.985428);
      const pixelPosition = projection.fromLatLngToDivPixel(position);
      const divStyle = {
        position: "absolute",
        left: `${pixelPosition.x}px`,
        top: `${pixelPosition.y}px`,
      };
      overlayViewRef.current.containerDiv.style.cssText = `
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          ${divStyle}
        `;
    }
  };

  return (
    <OverlayView
      position={position}
      mapPaneName={mapPaneName}
      onLoad={onOverlayViewLoad}
      onUnmount={null}
      onPositionChanged={onOverlayViewChanged}
    >
      {children}
    </OverlayView>
  );
};
