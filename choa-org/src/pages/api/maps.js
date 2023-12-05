
export default (req, res) => {
  const googleMapsScriptUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=customWindow.initMap&libraries=places`;

  res.status(200).json({ googleMapsScriptUrl });
};