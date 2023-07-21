"use client";

import { createContext, useContext, useState } from "react";

interface LocationState {
  latitude: number;
  longitude: number;
  setLocation: (latitude: number, longitude: number) => void;
  isAutoDetect: boolean;
  setIsAutoDetect: (isAutoDetect: boolean) => void;
}

export const locationState = createContext<LocationState>({
  latitude: 0,
  longitude: 0,
  setLocation: () => {},
  isAutoDetect: false,
  setIsAutoDetect: () => {},
});

export const useLocation = () => useContext(locationState);

export default function Pages({ children }) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isAutoDetect, setAutoDetect] = useState(false);

  const setLocation = (latitude: number, longitude: number) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  const setIsAutoDetect = (isAutoDetect: boolean) => {
    setAutoDetect(isAutoDetect);
  };

  const location: LocationState = {
    latitude,
    longitude,
    setLocation,
    isAutoDetect,
    setIsAutoDetect,
  };

  return (
    <locationState.Provider value={location}>{children}</locationState.Provider>
  );
}
