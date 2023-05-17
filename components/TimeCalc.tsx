import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
  } from 'react-native';


  type Props = {
    weatherData: props.weatherData;
  };

const TimeCalc = (props: Props) => {

    const [sunriseTime, setSunriseTime] = useState("")
    const [sunsetTime, setSunsetTime] = useState("")

    const getRiseTime = () => {
        const date = new Date(( (props.weatherData.sys ? props.weatherData.sys.sunrise : null) * 1000  + ((props.weatherData.timezone ? props.weatherData.timezone : null) * 1000 )) ).toUTCString()
        
        setSunriseTime(`${date.split(" ")[4]} ${ +date.split(" ")[4].split(":")[0] > 12 ? "PM" : "AM" }`)
    }

    const getSetTime = () => {
        const date = new Date( (props.weatherData.sys ? props.weatherData.sys.sunset : null) * 1000  + ((props.weatherData.timezone ? props.weatherData.timezone : null) *1000)).toUTCString()

        setSunsetTime(`${date.split(" ")[4]} ${ + date.split(" ")[4].split(":")[0] > 12 ? "PM" : "AM" }`)
    }


    useEffect (() => {
        getRiseTime()
        getSetTime()
    }, [])

    return (
        <View>
            <View className="flex-row ">
                <Text className="mr-2">Sunrise Time: </Text>
                <Text>{sunriseTime}</Text>
            </View>
            <View className="flex-row ">
                <Text className="mr-2">Sunset Time: </Text>
                <Text>{sunsetTime}</Text>
            </View>
        </View>
    )

}

export default TimeCalc;