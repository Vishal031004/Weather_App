import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Search({updateInfo}) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a9b06a096fac628216dabe96695fc59f";
    let [city, setCity] = useState("");
    let [err,setError]=useState(false)

    let getWeatherInfo = async () => {
        try{ let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        // console.log(result);
        return result
    }
    catch(error){
        throw error
    }
       
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
        try{event.preventDefault();
            setCity("");
            setError(false);   // Clear the city input after fetching weather info
            let newInfo=await getWeatherInfo()
            updateInfo(newInfo)
        }
        catch(error){
            setError(true)
        }
        
    };

    return (
        <div className="searchBox">
    <h3>Search for the weather</h3>
    <form onSubmit={handleSubmit}>
        <TextField 
            id="city" 
            label="City Name" 
            variant="outlined" 
            required 
            value={city} 
            onChange={handleChange} 
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white', // Outline color
                    },
                    '&:hover fieldset': {
                        borderColor: 'green', // Outline color on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'blue', // Outline color when focused
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'white', // Placeholder/Label color
                },
                '& .MuiInputBase-input': {
                    color: 'white', // Text color inside the input
                }
            }}
        />
        &nbsp;&nbsp;
        <Button variant="contained" type="submit">Search</Button>
        {err && <p style={{color:'red'}}>No such place in the API</p>}
        
        <br /><br />
    </form>
</div>

    );
}
