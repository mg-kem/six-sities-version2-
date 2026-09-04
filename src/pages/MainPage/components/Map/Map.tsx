import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {MapProps} from './Map.types.ts';

const defaultPin = leaflet.icon({
  iconUrl: '../../../../../public/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});

const activePin = leaflet.icon({
  iconUrl: '../../../../../public/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39]
});


export function Map({offers, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const instanceMap = useRef<leaflet.Map | null>(null);
  const markersLayer = useRef<leaflet.LayerGroup | null>(null);


  useEffect(() => {
    if (!mapRef.current || instanceMap.current) {
      return;
    }
    const map = leaflet.map(mapRef.current, {
      center: [48.868610000000004, 2.342499],
      zoom: 12,
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
    markersLayer.current = leaflet
      .layerGroup()
      .addTo(map);

    return () => {
      map.remove();
      instanceMap.current = null;
      markersLayer.current = null;
    };
  }, []);


  useEffect(() => {
    const markers = markersLayer.current;
    if (!markers) {
      return;
    }

    markers.clearLayers();

    offers.forEach((offer) => {
      const isActive = offer.id === activeOffer?.id;

      leaflet
        .marker(
          [
            offer.location.latitude,
            offer.location.longitude,
          ],
          {
            icon: isActive ? activePin : defaultPin,
          })
        .addTo(markers);
    });
  }, [offers, activeOffer]);


  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}
