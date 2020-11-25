import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function SellScreen({ navigation}) {
    return (
        <View style={styles.sellContainer}>
            <Button style={styles.sellButton} title="Map" onPress={() => navigation.navigate('Map')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    sellContainer: {
        flex: 1,
        backgroundColor: colors.Navy,
    },
});

export default SellScreen;