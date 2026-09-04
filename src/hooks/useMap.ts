import {RefObject, useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import {Location} from '../commonTypes/commonTypes.ts';

export default function useMap(mapRef: RefObject<HTMLElement>, location: Location) {
  const instanceMap = useRef<leaflet.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || instanceMap.current || !location) {
      return;
    }
    const map = leaflet.map(mapRef.current, {
      center: [
        location.latitude,
        location.longitude],
      zoom: location.zoom,
    });
    leaflet
      .tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; OpenStreetMap contributors',
        }
      )
      .addTo(map);
    instanceMap.current = map;


    return () => {
      map.remove();
      instanceMap.current = null;
    };
  }, [mapRef, location]);

  useEffect(() => {
    const map = instanceMap.current;
    if (!map) {
      return;
    }

    map.setView(
      [
        location.latitude,
        location.longitude
      ],
      location.zoom);
  }, [location]);

  return instanceMap;
}
