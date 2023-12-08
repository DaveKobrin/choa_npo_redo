import React, { useEffect, useState } from 'react';
import { locationAndWaitTimes } from '@/data/locationAndWaitTimes';

const GetDistance = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [hospitalDistances, setHospitalDistances] = useState([]);
  const [googleMapsScriptUrl, setGoogleMapsScriptUrl] = useState('');


  const calculateDistance = (coord1, coord2) => {
    console.log("Coordinates 1 & 2: ", JSON.stringify(coord1) + ", " + JSON.stringify(coord2) )
    try {
        const R = 3958.8; // Earth's radius in miles
        const lat1 = (Math.PI / 180) * coord1.lat;
        const lon1 = (Math.PI / 180) * coord1.lng;
        const lat2 = (Math.PI / 180) * coord2.lat;
        const lon2 = (Math.PI / 180) * coord2.lng;
    
        const dlat = lat2 - lat1;
        const dlon = lon2 - lon1;
    
        const a =
        Math.sin(dlat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
        const distance = R * c; // Distance in miles
    
        return distance.toFixed(2);
    } catch (error) {
        console.error('Error calculating distance:', error);
        return 'Error';
    }
  };

  const geocodeAddresses = async (locations) => {
    const results = await Promise.all(
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
    return results;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/maps');
        const data = await response.json();
        const { googleMapsScriptUrl } = data;
        setGoogleMapsScriptUrl(googleMapsScriptUrl);

        // Using the Geolocation API to get the user's location
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } catch (error) {
        console.error('Error getting user location:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = googleMapsScriptUrl;
      script.async = false;
      script.defer = true;

      script.onload = () => {
        fetchDistances();
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    if (googleMapsScriptUrl) {
      loadGoogleMapsScript();
    }
  }, [googleMapsScriptUrl]);

  const fetchDistances = async () => {
    if (userLocation) {
      // Get lat and long of emergency and urgent care addresses
      const locations = locationAndWaitTimes.map((item) => ({
        address: item.address,
        city: item.city,
        state: item.state,
        zipcode: item.zipcode,
      }));

      try {
        const results = await geocodeAddresses(locations);

        const updatedDistances = locationAndWaitTimes.map((hospital, index) => {
          const hospitalLocation = {
            lat: results[index].position.lat(),
            lng: results[index].position.lng(),
          };

          return {
            locationName: hospital.name,
            distance: calculateDistance(userLocation, hospitalLocation)
          }
        });

        setHospitalDistances(updatedDistances);
      } catch (error) {
        console.error('Error fetching distances:', error);
      }
    }
  };

  return hospitalDistances;

};

export default GetDistance;
