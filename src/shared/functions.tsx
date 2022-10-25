
import { useEffect } from 'react';

import { VStack } from 'native-base';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from './Colors';



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

    if (icon.includes("01")) {
        return (<><Ionicons name="md-sunny" mb={0} size={80} color={Colors.mainLight} /></>);
    }
    else if (icon.includes("02")) {
        return (<><Fontisto name="day-cloudy" mb={0} size={80} color={Colors.mainLight} /></>);
    }
    else if (icon.includes("03")) {
        return (<><Fontisto name="cloudy" mb={0} size={80} color={Colors.mainLight} /></>);
    }
    else if (icon.includes("04")) {
        return (<>
            <Ionicons name="cloud" mb={0} size={80} color={Colors.mainLight} />
        </>);
    }
    else if (icon.includes("09")) {
        return (<><Ionicons name="rainy-sharp" mb={0} size={80} color={Colors.mainLight} /></>);
    }
    else if (icon.includes("10")) {
        return (<><FontAwesome5 name="cloud-sun-rain" mb={0} size={80} color={Colors.mainLight} /></>);
    }
    else if (icon.includes("11")) {
        return (<><Feather name="cloud-lightning" mb={0} size={80} color={Colors.mainLight} /></>);
    }
    else if (icon.includes("13")) {
        return (<><FontAwesome name="snowflake-o" mb={0} size={80} color={Colors.mainLight} /></>);
    }
    else if (icon.includes("50")) {
        return (<><Ionicons name="md-cloud-sharp" mb={0} size={80} color={Colors.mainLight} /></>);
    }

}