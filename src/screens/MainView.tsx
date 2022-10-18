import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

import { View, Text, HStack, VStack, Box, Spinner, FlatList } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import { get5Days, getInfoLocal } from '../connections/getInfo';
import { SelectIcon } from '../shared/functions';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import Colors from '../shared/Colors';
import Card from '../components/Card';
import { Dimensions } from 'react-native';
import WeekItem from '../components/WeekItem';

const { width } = Dimensions.get('window');

export default function MainView() {
    const [data, setData] = useState(null);
    const [weather, setWeather] = useState([]);
    const [location, setLocation] = useState(null);
    const [arrWeek, setArrWeek] = useState([])

    const init = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        const { latitude, longitude } = location?.coords;

        const dayInfo = await getInfoLocal(latitude, longitude);
        setData(dayInfo);
        setWeather(dayInfo?.weather[0]);

        const weekInfo = await get5Days(latitude, longitude);
        let dataAtual = parseInt((new Date()).toString().substring(8, 10));

        weekInfo?.data?.list.map((e) => {
            let day = parseInt(e?.dt_txt.substring(8, 11));
            if (dataAtual < day) {
                dataAtual = day;
                if (arrWeek.length < 5) {
                    setArrWeek(arr => arr.concat(e));
                }
            }
        }
        );
    }

    useEffect(() => {

        init();

    }, []);

    return (
        <HStack alignItems="center" justifyContent={'center'} flex={1}>
            {data != undefined ?

                <VStack justifyContent={'space-between'}>
                    <VStack alignItems="center" >
                        <Text fontSize={'7xl'} fontWeight={'semibold'} color={Colors.mainLight} mt={'2/6'}>{parseInt(data?.main?.temp)}°</Text>
                        <SelectIcon info={data} />

                        <Text fontSize={'md'} mt={1} mb={1} fontWeight={'normal'} color={Colors.mainLight}>{weather?.description}</Text>
                        <Text fontSize={'2xl'} fontWeight={'medium'} color={Colors.mainLight}>{data?.name}</Text>
                        <Text fontSize={'md'} fontWeight={'light'} color={Colors.mainLight}>{data?.sys?.country}</Text>

                        <HStack justifyContent={'center'} h={'20%'} mt={'6'}>
                            <Card icon={<Fontisto style={{ alignSelf: 'center' }} name="wind" size={40} color={Colors.secoundaryLight} />} text={`${data?.wind?.speed} m /s`} />
                            <Card ml={'4'} icon={<MaterialCommunityIcons name="water" size={50} color={Colors.secoundaryLight} style={{ alignSelf: 'center', }} />} text={`${data?.main?.humidity}%`} />
                        </HStack>

                    </VStack>


                    <VStack>
                        <Text ml={'4'} fontSize={'2xl'} fontWeight={'bold'} color={Colors.mainLight}>Previsão dos próximos dias:</Text>
                        <FlatList
                            snapToAlignment='start'
                            scrollEventThrottle={16}
                            snapToOffsets={[...Array(arrWeek.length)].map((val, index) => index * (width * 0.7 - 8) + (index - 1) * 8)}
                            decelerationRate={'fast'}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={arrWeek}
                            mt={'2'}
                            renderItem={({
                                item
                            }) => {
                                return (<WeekItem item={item} />);
                            }} />
                    </VStack>
                </VStack>
                : <Spinner color={Colors.mainDark} />}
        </HStack >
    );
}