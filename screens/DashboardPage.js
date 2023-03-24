import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import Card from '../components/Cards';
import styles from '../styles/DashboardStyle';

const cablePhoneAddress = "http://192.168.137.1:3000"
const localhostAddress = "http://localhost:3000"
const devAddress = "https://devsite.com"


const DashboardPage = ({ navigation }) => {
    const serviceCharge = 15;
    const [cylinderSize, setCylinerSize] = useState('Medium');
    const [location, setLocation] = useState('')
    const [hostel, setHostel] = useState('')
    const [amount, setAmount] = useState('')
    const [cost, setCost] = useState(0);
    const total = serviceCharge + amount;

    const handleOrder = async () => {

        let orderDetails = { location, hostel, total }
        try {
            fetch(cablePhoneAddress + "/order", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderDetails)
            }).then((res) => {
                console.log("Order Placed Successfully")
                navigation.navigate("LaunchPage")
            })
        }
        catch (err) {
            console.log("failed" + err.message)
        }

    }

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
            <View>
                <Card />
            </View>
            <View style={styles.orderBody}>
                <Text style={styles.labelText}>Location</Text>
                <TextInput
                    style={styles.textInput}
                    value={location}
                    onChangeText={(val) => setLocation(val)}
                />
                <Text style={styles.labelText}>Hostel</Text>
                <TextInput
                    style={styles.textInput}
                    value={hostel}
                    onChangeText={(val) => setHostel(val)}
                />
                <Text style={styles.labelText}>Amount</Text>
                <TextInput
                    style={styles.textInput}
                    value={amount}
                    onChange={(val) => setAmount(val)}
                />
            </View>
            <View style={styles.bottomInfo}>
                <Text style={styles.text}>Our Service charge is {serviceCharge}</Text>
                <Text style={styles.text}>Total amount to be paid is GHc {total}</Text>
            </View>
            <View style={styles.orderBtn}>
                <Pressable onPress={handleOrder}>
                    <View style={styles.orderBtn}>
                        <Text style={styles.orderBtnText}>Order</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}


export default DashboardPage