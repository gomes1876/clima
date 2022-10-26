import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

export default function () {
    const theme = extendTheme({
        components: {
            colors: {
                primary: {
                    50: "#fb923c",
                    100: "#fef3c7"
                }, dark: {

                    50: "#BAE6FD",
                    100: "#075985"
                }
            }
        },
    });
    return (
        <NativeBaseProvider theme={theme}>{/* components */}</NativeBaseProvider>
    );
}