import { Box, Text, IBoxProps } from "native-base";
import Colors from "../shared/Colors";

type props = IBoxProps & {
    icon: JSX.Element;
    text: string;
}

export default function ({ icon, text, ...rest }: props) {
    return (
        <>
            <Box backgroundColor={Colors.mainLight} paddingX={'8'} w={'2/5'} h={'120'} paddingTop={'10'} paddingBottom={'8'} borderRadius={'md'} justifyContent={'center'} {...rest}>
                {icon}
                <Text alignSelf={'center'} mt={'4'} mb={'1'} color={Colors.secoundaryLight} fontSize={'md'} fontWeight={'bold'}>{text}</Text>
            </Box>
        </>
    )
}