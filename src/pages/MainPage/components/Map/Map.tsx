import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {MapProps} from './Map.types.ts';

export function Map({offers}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const instanceMap = useRef<leaflet.Map | null>(null);


  useEffect(() => {
    if (!mapRef.current || instanceMap.current) {
      return;
    }
    const map = leaflet.map(mapRef.current, {
      center: [52.370216, 4.895168],
      zoom: 13,
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
  }, []);


  useEffect(() => {
    const map = instanceMap.current;
    if (!map) {
      return;
    }

    offers.forEach((offer) => {
      leaflet.marker([
        offer.location.latitude,
        offer.location.longitude
      ])
        .addTo(map);
    });
  }, [offers]);


  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}
