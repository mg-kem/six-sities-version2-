import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {MapProps} from './Map.types.ts';
import useMap from '../../../../hooks/useMap.ts';

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


export function Map({offers, activeOffer, cityLocation}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null); // сначала находим контейнер для размещения карты
  const instanceMap = useMap(mapRef, cityLocation); // выносим всю логику создания карты в отдельный хук
  const markersLayer = useRef<leaflet.LayerGroup | null>(null);

  useEffect(() => {
    const map = instanceMap.current;
    if (!map) {
      return;
    }
    markersLayer.current = leaflet
      .layerGroup()
      .addTo(map);

    return () => {
      markersLayer.current?.remove();
      markersLayer.current = null;
    };
  }, [instanceMap, cityLocation]);

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
  }, [offers, activeOffer, cityLocation]);


  return (
    <section
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}
