import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import styles from '../styles/LaunchPageStyle'


const LaunchPage = ({ navigation }) => {

    const handleChange = () => {
        navigation.navigate('SignUpPage')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>MEJAV</Text>
                <View style={styles.image}>
                    <Image
                        source={require('../assets/gas-tank.png')}
                        style={{
                            width: 200, height: 200, marginBottom: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} />
                </View>
                <View style={styles.body}>
                    <Pressable onPress={handleChange}>
                        <View style={styles.launchBtn}>
                            <Text style={styles.launchBtnText}>Launch</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>

    )
}

export default LaunchPage