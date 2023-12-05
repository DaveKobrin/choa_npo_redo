import { useEffect } from 'react';
import {locationAndWaitTimes} from "@/data/locationAndWaitTimes";


const Map = () => {
  const geocodeAddresses = (addresses) => {
    return Promise.all(
      addresses.map((address) => {
        return new Promise((resolve, reject) => {
          const geocoder = new google.maps.Geocoder();

          geocoder.geocode({ address: address }, (results, status) => {
            if (status === 'OK' && results && results[0] && results[0].geometry && results[0].geometry.location) {
              resolve({ position: results[0].geometry.location, address });
            } else {
              console.error(`Geocoding failed for address: ${address}`);
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
        zoom: 10,
      });

      // const addresses = [
      //   { address: '1405 Clifton Road, Atlanta, GA 30322', service: 'Urgent Care' },
      //   { address: '35 Jesse Hill Jr. Drive SE, Atlanta, GA 30303', service: 'Emergency Care' },
      //   { address: '1001 Johnson Ferry Road NE, Atlanta, GA 30342', service: 'Emergency Care' },
      // ];

      try {
        const results = await geocodeAddresses(addresses.map((item) => item.address));

        results.forEach((result, index) => {
          const { position, address } = result;
          const service = addresses[index].service;

          // Customize marker based on the service
          let markerIcon;

          switch (service) {
            case 'Urgent Care':
              markerIcon = 'http://maps.google.com/mapfiles/ms/icons/hospitals.png';
              break;
            case 'Emergency Care':
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