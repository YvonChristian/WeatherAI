import WeatherChatBot2 from "./WeatherChatBot2"
import WeatherSatelliteMap from "./WeatherSatelliteMap"

const WeatherPage = () => {
  return (
    <div className="flex">
      <WeatherSatelliteMap />
      <WeatherChatBot2 />
    </div>
  )
}

export default WeatherPage
