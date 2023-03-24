import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../styles/SignUpPageStyle';

const cablePhoneAddress = "http://192.168.137.1:3000"
const localhostAddress = "http://localhost:3000"
const devAddress = "https://devsite.com"

const SignUpPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')

    const handleChange = async () => {

        let regObj = { name, email, phone, password };
        console.log(regObj)
        if (password === password1) {
            fetch(cablePhoneAddress + "/register/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(regObj)
            }).then((res) => {
                console.log("Registered Successfully")
                navigation.navigate("LoginPage")
            }).catch((err) => {
                console.log("failed" + err.message)
            })
        }
        else {
            Alert.alert("Error", "passwords do not match");
            console.log("error")
        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.headerInfo}>
                <Image
                    source={require('../assets/gas-tank.png')}
                    style={{ width: 40, height: 40 }} />
                <Text style={styles.headerText}>Sign Up</Text>
            </View>
            <ScrollView style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} behavior={"height"}>
                    <View style={styles.form} >
                        <View style={styles.formField}>
                            <Text style={styles.labelText}>Full name</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder=""
                                value={name}
                                onChangeText={(val) => setName(val)}
                            />
                        </View>
                        <View style={styles.formField}>
                            <Text style={styles.labelText}>Email</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder=""
                                value={email}
                                onChangeText={(val) => setEmail(val)}
                            />
                        </View>
                        <View style={styles.formField}>
                            <Text style={styles.labelText}>Phone number</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder=""
                                value={phone}
                                onChangeText={(val) => setPhone(val)}
                            />
                        </View>
                        <View style={styles.formField}>
                            <Text style={styles.labelText}>Password</Text>
                            <TextInput
                                style={styles.textInput}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={(val) => setPassword(val)}
                            />
                        </View>
                        <View style={styles.formField}>
                            <Text style={styles.labelText}>Retype Password</Text>
                            <TextInput
                                style={styles.textInput}
                                secureTextEntry={true}
                                value={password1}
                                onChangeText={(val) => setPassword1(val)}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Pressable onPress={handleChange}>
                            <View style={styles.submitBtn}>
                                <Text style={styles.submitBtnText}>Submit</Text>
                            </View>
                        </Pressable>
                        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                            <Text style={{ ...styles.text, marginTop: 10 }}>Already have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </ScrollView >
        </View>

    )
}

export default SignUpPage