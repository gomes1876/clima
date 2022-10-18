import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

import { View, Text, HStack, VStack, Box } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import { getInfoLocal } from '../connections/getInfo';
import { SelectIcon } from '../shared/functions';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function MainView() {
    const [data, setData] = useState({});
    const [weather, setWeather] = useState([]);
    const [location, setLocation] = useState(null);


    const init = async () => {


        let { status } = await Location.requestForegroundPermissionsAsync();
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        const { latitude, longitude } = location?.coords;

        const res = await getInfoLocal(latitude, longitude);
        setData(res);
        // console.log(res);

        setWeather(res?.weather[0]);

    }

    useEffect(() => {

        init();

    }, []);

    return (
        <HStack alignItems="center" justifyContent={'center'} >
            {data != undefined &&
                <VStack justifyContent={'center'} alignItems="center" >
                    <Text fontSize={'7xl'} fontWeight={'semibold'} color={'orange.400'} mt={'2/6'}>{parseInt(data?.main?.temp)}°</Text>
                    {data != undefined ? (<SelectIcon info={data} />) : null}

                    <Text fontSize={'md'} mt={1} mb={1} fontWeight={'normal'} color={'orange.400'}>{weather?.description}</Text>

                    <Text fontSize={'2xl'} fontWeight={'medium'} color={'orange.400'}>{data?.name}</Text>
                    <Text fontSize={'md'} fontWeight={'light'} color={'orange.400'}>{data?.sys?.country}</Text>

                    <HStack justifyContent={'center'} h={'20%'} mt={'6'}>
                        <Box backgroundColor={'orange.400'} paddingX={'8'} w={'2/5'} paddingTop={'10'} paddingBottom={'8'} borderRadius={'md'} justifyContent={'center'}>
                            <Fontisto style={{ alignSelf: 'center' }} name="wind" size={40} color={'#fef3c7'} />
                            <Text alignSelf={'center'} mt={'4'} color={'#fef3c7'} fontSize={'md'} fontWeight={'bold'}>{data?.wind?.speed} m/s</Text>
                        </Box>

                        <Box backgroundColor={'orange.400'} paddingX={'8'} w={'2/5'} paddingTop={'4'} borderRadius={'md'} ml={'6'} >
                            <MaterialCommunityIcons name="water" size={60} color={'#fef3c7'} style={{ alignSelf: 'center' }} />
                            <Text alignSelf={'center'} mt={'3'} color={'#fef3c7'} fontSize={'md'} fontWeight={'bold'}>{data?.main?.humidity}%</Text>
                        </Box>
                    </HStack>
                </VStack>}
        </HStack >
    );
}