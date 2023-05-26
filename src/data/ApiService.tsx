import { useState, useEffect } from 'react'
import {API_TOKEN} from "react-native-dotenv"
import axios from 'axios'


export default class ApiService {

    static getWeather = async (cityName: string, apiUnit: string) => {

        return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}
        &appid=${API_TOKEN}&units=${apiUnit}`)
    }

    static handleAddCity = (name: string) => {

        return axios.post("http://10.0.2.2:3000/api/v1/weather", name)

    }


}