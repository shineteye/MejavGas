import React from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
// import styles from '../components/CardStyles';

const small = "Small"
const medium = "Medium"
const large = "Large"
const smallPrice = 60.00
const mediumPrice = 120.00
const largePrice = 200.00

const handleBtnPress = () => {
    console.log(small + " Chosen");
}
const Cards = ({ setMode, title, setSource, amount, handler, btnText }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imgTitle}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Image source={setSource} style={styles.cardImg} />
                <Text style={styles.cardAmount}>{amount}</Text>
                <Button style={styles.cardButton} title={`Choose ${btnText}`} onPress={handler} />
            </View>
        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: bac,
    },
    cardTitle: {
        fontSize: 18
    },
    imgTitle: {
        alignItems: 'center'
    },
    cardImg: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardAmount: {
        fontSize: 18
    },
    cardButton: {
        height: 30,
        width: 70
    }
})

