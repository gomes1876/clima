import { Dimensions } from 'react-native';
import { Box, HStack, Text } from "native-base";

import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Colors from "../shared/Colors";

const { width } = Dimensions.get('window');

export default function WeekItem({ item }) {
    let thisDate = ((item?.dt_txt.toString()));
    let day = thisDate.substring(8, 10);
    let month = thisDate.substring(5, 7);

    return (
        <>
            <Box
                h={width / 2.8} w={width * 0.3} borderRadius={'xl'} backgroundColor={Colors.mainLight}
                borderWidth={1} borderColor={Colors.mainLight} ml={'4'} justifyContent={'center'}
                alignItems={'center'}>
                <HStack mb={2}>
                    <MaterialCommunityIcons name="calendar-blank" size={22} color={Colors.secoundaryLight} style={{ alignSelf: 'center', }} />
                    <Text fontWeight={'bold'} mt={0} fontSize={'md'} color={Colors.secoundaryLight}>{day}/{month}</Text>
                </HStack>
                <HStack>
                    <MaterialCommunityIcons name="water" size={20} color={Colors.secoundaryLight} style={{ alignSelf: 'center', }} />
                    <Text fontSize={'md'} color={Colors.secoundaryLight}>{item?.main?.humidity}%</Text>
                </HStack>

                <HStack>
                    <FontAwesome name="thermometer-empty" size={20} color={Colors.secoundaryLight} style={{ alignSelf: 'center', }} />
                    <Text ml={'2'} fontSize={'md'} color={Colors.secoundaryLight}>{parseInt(item?.main?.temp_max)}°</Text>
                </HStack>
                <HStack alignItems={'center'} justifyContent={'center'}>
                    <Fontisto style={{ alignSelf: 'center' }} name="wind" size={20} color={Colors.secoundaryLight} style={{ alignSelf: 'center', }} />
                    <Text ml={'2'} fontSize={'md'} color={Colors.secoundaryLight}>{parseInt(item?.wind?.speed)}m/s</Text>
                </HStack>
            </Box></>
    );
}