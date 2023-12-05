import { useEffect } from 'react';
import {locationAndWaitTimes} from "@/data/locationAndWaitTimes";


const Map = () => {
  const geocodeAddresses = (locations) => {
    return Promise.all(
      locations.map((location) => {
        return new Promise((resolve, reject) => {
          const geocoder = new google.maps.Geocoder();

          const { address, city, state, zipcode } = location;

          const fullAddress = `${address}, ${city}, ${state} ${zipcode}`;

          geocoder.geocode({ address: fullAddress }, (results, status) => {
            if (status === 'OK' && results && results[0] && results[0].geometry && results[0].geometry.location) {
              resolve({ position: results[0].geometry.location, address: fullAddress });
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
    const customWindow = window;
    customWindow.initMap = async () => {
      const mapElement = document.getElementById('map');

      if (!mapElement) {
        console.error('Map element not found');
        return;
      }

      const map = new google.maps.Map(mapElement, {
        center: { lat: 33.84, lng: -84.4194 },
        zoom: 9.3,
      });

      try {
        const locations = locationAndWaitTimes.map(item => ({
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
            case 'Urgent Care Center':
              markerIcon = 'http://maps.google.com/mapfiles/ms/icons/hospitals.png';
              break;
            case 'Emergency Department':
              markerIcon = 'http://maps.google.com/mapfiles/ms/icons/red.png';
              break;
            default:
              markerIcon = 'http://maps.google.com/mapfiles/ms/icons/blue.png'; // Default blue icon
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
        console.error('Error geocoding addresses:', error);
      }
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=customWindow.initMap&libraries=places`;
    script.async = false;
    script.defer = true;

    script.onload = () => {
      customWindow.initMap?.();
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ height: '600px', width: '800px' }}></div>;
};

export default Map;