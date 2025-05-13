import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { create_menu } from '../components/menu';

export default function HomeScreen({ navigation }) {
    return (

        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Тут твій основний контент</Text>
            </View>

            { create_menu(navigation) }
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
