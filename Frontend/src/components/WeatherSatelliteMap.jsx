import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

//---------------------------------------Inside--------------------------------//
const WeatherSatelliteMap = () => {
  const [satelliteLayerUrl, setSatelliteLayerUrl] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = process.env.VITE_OPENWEATHER_API_KEY; // API key
  const LAT = -18.777192; // Latitude (Madagascar)
  const LON = 46.854328;// Longitude (Madagascar)

  const { BaseLayer, Overlay } = LayersControl;

  // Define a custom icon
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854866.png", // Your custom icon URL
    iconSize: [15, 15], // Size of the icon
    iconAnchor: [-10, 20], // Anchor point for the icon
    popupAnchor: [0, -32], // Anchor point for popups
  });

  useEffect(() => {
    const fetchSatelliteLayer = async () => {
      try {
        // Example API to fetch imagery 
        const layerUrl = `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`;
        setSatelliteLayerUrl(layerUrl);
      } catch (err) {
        setError("Failed to load satellite imagery.", err);
        console.log(err)
      }
    };

    fetchSatelliteLayer();
  }, []);

  //ERRORS
  if (error) return <p>{error}</p>;
  if (!satelliteLayerUrl) return <p>Loading...</p>;

  return (
    <div className="w-[70%] pr-[20px]">
      {/* {Contains the Map} */}
      <MapContainer
        center={[LAT, LON]}
        zoom={5}
        style={{ height: "500px", width: "100%", margin: " 10px" }}
      >
        <LayersControl
          position="topright"
          collapsed="false"
        >
          {/* Base Layers */}
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
            />
          </BaseLayer>

          {/* Overlays */}
          <Overlay checked name="Weather Clouds">
            <TileLayer
              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </Overlay>

          <Overlay name="Temperature">
            <TileLayer
              url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </Overlay>
          <Overlay checked name="Precipitation">
            <TileLayer
              url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </Overlay>
          <Overlay checked name="Winds">
            <TileLayer
              url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
            />
          </Overlay>

          {/* Optional: Add a marker at the map center */}
          <Marker
            position={[LAT, LON]}
            icon={customIcon}
          >
            <Popup>Satellite Data for this location</Popup>
          </Marker>
        </LayersControl>
      </MapContainer>
      <div className="flex">
        <div className="w-96 h-2 bg-white relative">
          <div className="m-2 flex">
            <h6 className="m-5 text-xs/[1px] text-gray-500">Precipitation,mmh/h</h6>
            <div className="mb-2">
              <span className="mx-[22px] text-xs/[1px] text-gray-500">0</span>
              <span className="mx-[22px] text-xs/[1px] text-gray-500">2</span>
              <span className="mx-[22px] text-xs/[1px] text-gray-500">3</span>
              <span className="mx-[22px] text-xs/[1px] text-gray-500">4</span>
              <span className="mx-[22px] text-xs/[1px] text-gray-500">6</span>
              <div className="w-52 h-2 relative mx-5 bg-gradient-to-l from-indigo-500"></div>
            </div>
          </div>
        </div>
        <div className="w-[800px] h-2 bg-white relative">
          <div className="m-2 flex">
            <h6 className="m-5 text-xs/[1px] text-gray-500">Wind speed,m/s</h6>
            <div className="mb-2">
              <span className="mx-[10px] text-xs/[1px] text-gray-500">0</span>
              <span className="mx-[10px] text-xs/[1px] text-gray-500">2</span>
              <span className="mx-[10px] text-xs/[1px] text-gray-500">3</span>
              <span className="mx-[10px] text-xs/[1px] text-gray-500">6</span>
              <span className="mx-[10px] text-xs/[1px] text-gray-500">12</span>
              <span className="mx-[10px] text-xs/[1px] text-gray-500">25</span>
              <span className="mx-[10px] text-xs/[1px] text-gray-500">50</span>
              <span className="mx-[10px] text-xs/[1px] text-gray-500">100</span>
              <div className="w-52 h-2 relative mx-5 bg-gradient-to-l from-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSatelliteMap;
