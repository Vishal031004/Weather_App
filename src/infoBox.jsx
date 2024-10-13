import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import SignalWifiStatusbarNullTwoToneIcon from '@mui/icons-material/SignalWifiStatusbarNullTwoTone';

import INIT_IMG from './assets/init_img.png';  // Use ./ to indicate the current directory
import HOT_IMG from './assets/sum_img.png';
import COLD_IMG from './assets/cold_img.png';
import RAIN_IMG from './assets/rain_img.png';


export default function InfoBox({ info }) {
    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140, objectFit: 'contain' }}  // Ensures the image is contained
                    image={info.temp ? info.humidity > 75 ? RAIN_IMG : info.temp > 20 ? HOT_IMG : COLD_IMG : INIT_IMG}
                    title="Weather image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}&nbsp;{info.temp ? info.humidity > 75 ? <ThunderstormTwoToneIcon /> : info.temp > 20 ? <WbSunnyTwoToneIcon /> : <AcUnitTwoToneIcon /> : <SignalWifiStatusbarNullTwoToneIcon />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}%</p>
                        <p>Minimum Temperature = {info.tempMin}&deg;C</p>
                        <p>Maximum Temperature = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
