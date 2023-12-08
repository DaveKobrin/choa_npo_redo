import { useEffect, useState } from "react";
import { locationAndWaitTimes } from "@/data/locationAndWaitTimes";

const Map = () => {
  const [googleMapsScriptUrl, setGoogleMapsScriptUrl] = useState("");

  const [scriptLoaded, setScriptLoaded] = useState(false);


  const geocodeAddresses = (locations) => {
    return Promise.all(
      locations.map((location) => {
        return new Promise((resolve, reject) => {
          const geocoder = new google.maps.Geocoder();

          const { address, city, state, zipcode } = location;

          const fullAddress = `${address}, ${city}, ${state} ${zipcode}`;

          geocoder.geocode({ address: fullAddress }, (results, status) => {
            if (
              status === "OK" &&
              results &&
              results[0] &&
              results[0].geometry &&
              results[0].geometry.location
            ) {
              resolve({
                position: results[0].geometry.location,
                address: fullAddress,
              });
            } else {
              console.error(`Geocoding failed for address: ${fullAddress}`);
              reject();
            }
          });
        });
      })
    );
  };

  useEffect(() => {
    fetch("/api/maps")
      .then((response) => response.json())
      .then((data) => {
        const { googleMapsScriptUrl } = data;
        setGoogleMapsScriptUrl(googleMapsScriptUrl);

        const customWindow = window;
        customWindow.initMap = async () => {
          const mapElement = document.getElementById("map");

          if (!mapElement) {
            console.error("Map element not found");
            return;
          }

          const map = new google.maps.Map(mapElement, {
            center: { lat: 33.87, lng: -84.34 },
            zoom: 8.8,
          });

          try {
            const locations = locationAndWaitTimes.map((item) => ({
              address: item.address,
              city: item.city,
              state: item.state,
              zipcode: item.zipcode,
            }));

            const results = await geocodeAddresses(locations);

            results.forEach((result, index) => {
              const { position, address } = result;
              const service = locationAndWaitTimes[index].facilityType;

              // Customize marker based on the service
              let markerIcon;

              switch (service) {
                case "Urgent Care Center":
                  markerIcon =
                    "http://maps.google.com/mapfiles/ms/icons/hospitals.png";
                  break;
                case "Emergency Department":
                  markerIcon =
                    "http://maps.google.com/mapfiles/ms/icons/red.png";
                  break;
                default:
                  markerIcon =
                    "http://maps.google.com/mapfiles/ms/icons/blue.png"; // Default blue icon
                  break;
              }

              const marker = new google.maps.Marker({
                position,
                map,
                title: address,
                icon: markerIcon,
              });
            });
          } catch (error) {
            console.error("Error geocoding addresses:", error);
          }
        };

        const script = document.createElement("script");
        script.src = googleMapsScriptUrl;
        script.async = false;
        script.defer = true;

        // script.onload = () => {
        //   customWindow.initMap?.();
        // };
        script.onload = () => {
          setScriptLoaded(true);
        };

        document.head.appendChild(script);

        return () => {
          document.head.removeChild(script);
        };
      })
      .catch((error) =>
        console.error("Error fetching Google Maps script URL:", error)
      );
  }, []);

  useEffect(() => {
    if (scriptLoaded) {
      // Initialize the map only when the script is loaded
      window.initMap?.();
    }
  }, [scriptLoaded]);


  return <div id="map" className="h-[350px] w-10/12 rounded"></div>;
};

export default Map;
