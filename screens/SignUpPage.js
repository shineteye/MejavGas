import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import styles from '../styles/SignUpPageStyle';


const SignUpPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')

    const handleChange = async () => {

        let regObj = { name, email, phone, password };
        console.log(regObj)

        fetch("http://localhost:3000/register/", {
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
    return (
        <View style={styles.container}>
            <View style={styles.headerInfo}>
                <Image
                    source={require('../assets/gas-tank.png')}
                    style={{ width: 40, height: 40 }} />
                <Text style={styles.headerText}>Sign Up</Text>
            </View>
            <View style={styles.manImgContainer}>

            </View>
            <View style={styles.form}>
                <Text style={styles.labelText}>Full name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder=""
                    value={name}
                    onChangeText={(val) => setName(val)}
                />
                <Text style={styles.labelText}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder=""
                    value={email}
                    onChangeText={(val) => setEmail(val)}
                />
                <Text style={styles.labelText}>Phone number</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder=""
                    value={phone}
                    onChangeText={(val) => setPhone(val)}
                />
                <Text style={styles.labelText}>Password</Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(val) => setPassword(val)}
                />
                <Text style={styles.labelText}>Retype Password</Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    value={password1}
                    onChangeText={(val) => setPassword1(val)}
                />
                <Pressable onPress={handleChange}>
                    <View style={styles.launchBtn}>
                        <Text style={styles.launchBtnText}>Submit</Text>
                    </View>
                </Pressable>
                <Text
                    onPress={() => navigation.navigate('LoginPage')}
                    style={{ ...styles.text, marginTop: 10 }}>Already have an account?</Text>
            </View>
        </View>
    )
}

export default SignUpPage