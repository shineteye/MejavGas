import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import styles from '../styles/DashboardStyle'

const DashboardPage = () => {
    var serviceCharge = 15;
    const [cylinderSize, setCylinerSize] = useState('Medium');
    const [cost, setCost] = useState(0);
    let total = serviceCharge + cost;

    return (
        <View style={styles.container}>
            <View style={styles.headerInfo}>
                <Image
                    source={require('../assets/gas-tank.png')}
                    style={{
                        width: 40, height: 40,
                    }} />
                <Text style={styles.headerText}>Order</Text>
            </View>
            <View style={styles.image}>
                <Image
                    source={require('../assets/gas-cylinder.png')}
                    style={{
                        width: 150, height: 150, marginBottom: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} />
            </View>
            <View style={styles.body}>
                <Picker style={styles.textInput}>
                    selectedValue={cylinderSize}
                    onValueChange={cylinderSize => setCylinerSize(cylinderSize)}
                    <Picker.Item label="SM" value="Small" />
                    <Picker.Item label="MD" value="Medium" />
                    <Picker.Item label="LG" value="Large" />
                </Picker>
                <Text style={styles.labelText}>Location</Text>
                <TextInput style={styles.textInput} placeholder="Your location" />
                <Text style={styles.labelText}>Hostel</Text>
                <TextInput style={styles.textInput}
                    placeholder="Hostel name"
                />
                <Text style={styles.labelText}>Amount</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Amount to fill"
                    onChange={(val) => setCost(val)}
                />
                <Text style={styles.text}>Our Service charge is {serviceCharge}</Text>
                <Text style={styles.text}>Total amount to be paid is GHc {cost}</Text>
            </View>
            <View>
                <Pressable >
                    <View style={styles.launchBtn}>
                        <Text style={styles.launchBtnText}>Login</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default DashboardPage