import React, { useContext, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import client from '../api/client';
import Card from '../components/Cards';
import FormContainer from '../components/FormContainer';
import FormInput from '../components/FormInput';
import FormSubmitBtn from '../components/FormSubmitBtn';
import Header from '../components/Header';
import { UserContext } from '../contexts/userContext';
import styles from '../styles/DashboardStyle';

const cablePhoneAddress = "http://192.168.137.1:3000"
const localhostAddress = "http://localhost:3000"
const devAddress = "https://devsite.com"
const small = "Small"
const medium = "Medium"
const large = "Large"
const smallPrice = 60.00
const mediumPrice = 120.00
const largePrice = 200.00


const DashboardPage = ({ navigation }) => {
    const serviceCharge = 15;
    const [cylinderSize, setCylinderSize] = useState('Medium');
    const [location, setLocation] = useState('')
    const [hostel, setHostel] = useState('')
    const [amount, setAmount] = useState('')
    const { user, setUser } = useContext(UserContext)
    const total = Number(serviceCharge) + Number(amount)

    const handleOrder = async () => {
        try {
            alert("Order Placed Successfully")
            const res = await client.post('/order', { location, hostel, total, email: user?.email, cylinderSize });
            console.log(res.data.message);
            console.log(res.data.data);
            navigation.navigate('LaunchPage')
        }
        catch (err) {
            console.log("failed" + err.message)
        }
    }

    const handleSmall = () => {
        console.log('chosen', small);
        setCylinderSize(small)
    }

    const handleMedium = () => {
        console.log('chosen', medium);
        setCylinderSize(medium)
    }

    const handleLarge = () => {
        console.log('chosen', large);
        setCylinderSize(large)
    }

    return (
        <View style={styles.container}>
            <Header title='Order' />
            <ScrollView horizontal pagingEnabled >
                <Card
                    title='Small'
                    setSource={require('../assets/gas-tank.png')}
                    amount='60.00'
                    handler={handleSmall}
                    btnText={small} />

                <Card
                    title='Medium'
                    setSource={require('../assets/gas-tank.png')}
                    handler={handleMedium}
                    btnText={medium} />

                <Card
                    title='Large'
                    setSource={require('../assets/gas-tank.png')}
                    handler={handleLarge}
                    btnText={large} />
            </ScrollView>
            <FormContainer extraStyles={{ marginTop: 0 }}>
                <FormInput
                    title='Location'
                    value={location}
                    textChangeVal={setLocation} />
                <FormInput
                    title='Hostel'
                    value={hostel}
                    textChangeVal={setHostel} />
                <FormInput
                    title='Amount'
                    value={amount}
                    textChangeVal={setAmount} />
                <FormSubmitBtn title='Order' handler={handleOrder} />
            </FormContainer>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Service Charge is GHc{`${serviceCharge}`}</Text>
                <Text style={styles.text}>Total Amount payable is GHc{`${total}`}</Text>
            </View>
        </View>
    )
}


export default DashboardPage