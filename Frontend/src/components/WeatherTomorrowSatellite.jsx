// import axios from 'axios';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const TomorrowSatellite = () => {
  // const options = {
  //   method: 'GET',
  //   url: 'https://api.tomorrow.io/v4/map/tile/5/2/3/precipitationIntensity/now.png',
  //   params: { apikey: 'HTKNEHfVQwHE1kiikwZVlQWbyFzbElsQ' },
  //   headers: { accept: 'text/plain' }
  // };

  // axios
  //   .request(options)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.error(err));
  // Replace 'YOUR_TOMORROW_IO_API_KEY' with your actual Tomorrow.io API key

  const tomorrowIoApiKey = "YOUR_TOMORROW_IO_API_KEY";

  // Add Tomorrow.io tiles to the map

  L.tileLayer(

    `https://maps2.tomorrow.io/weather/${tomorrowIoApiKey}/current/precipitation/{z}/{x}/{y}.png`,

    {

      attribution: "Tomorrow.io Weather",

      tileSize: 256,

      maxZoom: 16,

      opacity: 0.7,

    },

  ).addTo(map);
  return (
    <div>

    </div>
  )
}

export default TomorrowSatellite
