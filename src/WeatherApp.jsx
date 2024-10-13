import InfoBox from "./infoBox"
import Search from "./search"
import { useState } from "react"
export default WeatherApp

function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({})

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return(
        <div>
            <h2>Weather App</h2>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}