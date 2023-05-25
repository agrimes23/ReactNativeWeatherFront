import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react'

type Props = {
    sunriseData: number;
    sunsetData: number;
    timezoneData: number;
};


const TimeCalc = ({sunriseData, sunsetData, timezoneData}: Props) => {

    const [sunriseTime, setSunriseTime] = useState<String>()
    const [sunsetTime, setSunsetTime] = useState<string>()

    const getTime = () => {
//         const localDate = new Date( time * 1000  + ((zoneData) *1000)).toUTCString().split("GMT")
        const localSunrise = new Date(( (sunriseData) * 1000  + ((timezoneData) * 1000 )) ).toUTCString()
        const localSunset = new Date( (sunsetData) * 1000  + ((timezoneData) *1000)).toUTCString()

//         setLocalTime(localDate[0])
        setSunriseTime(`${localSunrise.split(" ")[4]} ${ + localSunrise.split(" ")[4].split(":")[0] > 12 ? "PM" : "AM" }`)
        setSunsetTime(`${localSunset.split(" ")[4]} ${ + localSunset.split(" ")[4].split(":")[0] > 12 ? "PM" : "AM" }`)
    }

    useEffect (() => {

        getTime()

    }, [])

    return (
        <View>
            <View className="flex-row ">
                <Text className="mr-2 text-base">Sunrise Time:   {sunriseTime}</Text>
            </View>
            <View className="flex-row ">
                <Text className="mr-2 text-base">Sunset Time:   {sunsetTime}</Text>
            </View>

        </View>
    )
}
