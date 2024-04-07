import { useEffect, useState } from "react";

function CurrentLocationHook() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(location);
  });

  function getLocation() {
    setLoading(true);
    setError(null)
    if (!navigator.geolocation){
        setError("Could not get position")
        setLoading(false)
      }    
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
    setLoading(false);
  }

  return {
    getLocation,
    error,
    loading,
    location
  }
}

export default CurrentLocationHook;
