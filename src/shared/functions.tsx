
import { useEffect } from 'react';

import { VStack } from 'native-base';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export function SelectIcon(info) {

    useEffect(() => { }, [info]);

    let icon = undefined;
    if (info != undefined) {
        icon = info?.info?.weather;
        if (info?.info?.weather != undefined) {
            if (info?.info?.weather.length > 0) {
                icon = info?.info?.weather[0]?.icon

            }

        }
    }

    if (icon == "01d") {
        return (<><Ionicons name="md-sunny" mb={0} size={80} color={'#fb923c'} /></>);
    }
    else if (icon == "02d") {
        return (<><Fontisto name="day-cloudy" mb={0} size={80} color={'#fb923c'} /></>);
    }
    else if (icon == "03d") {
        return (<><Fontisto name="cloudy" mb={0} size={80} color={'#fb923c'} /></>);
    }
    else if (icon == "04d") {
        return (<>
            <Ionicons name="cloud" mb={0} size={80} color={'#fb923c'} />);
        </>)
    }
    else if (icon == "09d") {
        return (<><Ionicons name="rainy-sharp" mb={0} size={80} color={'#fb923c'} /></>);
    }
    else if (icon == "10d") {
        return (<><FontAwesome5 name="cloud-sun-rain" mb={0} size={80} color={'#fb923c'} /></>);
    }
    else if (icon == "11d") {
        return (<><Feather name="cloud-lightning" mb={0} size={80} color={'#fb923c'} /></>);
    }
    else if (icon == "13d") {
        return (<><FontAwesome name="snowflake-o" mb={0} size={80} color={'#fb923c'} /></>);
    }
    else if (icon == "50d") {
        return (<><Ionicons name="md-cloud-sharp" mb={0} size={80} color={'#fb923c'} /></>);
    }

}