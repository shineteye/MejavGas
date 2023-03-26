import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const backgcolor = "#FFFFFF";
const foreGcolor = '#227BFF';

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/gas-tank.png')}
                style={styles.img} />
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgcolor,
        marginTop: 60,
        marginBottom: 20
    },
    img: {
        width: 40,
        height: 40
    },
    headerText: {
        color: foreGcolor,
        fontSize: 30,
        fontWeight: 700,
        padding: 10,
    }
})