import CurrentLocationHook from "./CurrentLocationHook";

function CurrentLocation() {
  const { getLocation, error, loading, location } = CurrentLocationHook();
  return (
    <>
      <button onClick={getLocation}>GET POSITION</button>
      <h2>{loading && loading}</h2>
      <h2>{error && error}</h2>
      <h2>{location && `Longitude: ${location.longitude}`}</h2>
      <h2>{location && `Longitude: ${location.latitude}`}</h2>
    </>
  );
}

export default CurrentLocation;
