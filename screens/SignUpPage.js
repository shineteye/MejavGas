import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import client from '../api/client';
import FormContainer from '../components/FormContainer';
import FormInput from '../components/FormInput';
import FormSubmitBtn from '../components/FormSubmitBtn';
import Header from '../components/Header';
import TextButton from '../components/TextButton';
import styles from '../styles/SignUpPageStyle';


const cablePhoneAddress = "http://192.168.137.1:3000"
const localhostAddress = "http://localhost:3000"
const devAddress = "https://devsite.com"

const SignUpPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [fullname, setName] = useState('');
    const [phone, setPhone] = useState('')

    const handleChange = async () => {

        const regObj = { fullname, email, phone, password };
        console.log('form', regObj)
        if (isValidForm()) {
            try {
                console.log('1');
                const res = await client.post('/create', { fullname, email, phone, password });
                console.log(res.data.message);
                console.log(res.data.data);
                alert('Account created successfully')
                handleSignup();
            } catch (error) {
                console.log('error', error);
            }
        }
        else {
            Alert.alert("Error", "Please fill all entries");
            console.log("error")
        }
    }

    const handleSignup = async () => {
        navigation.navigate('LoginPage')
    }

    // const { fullname, email, phone ,password } = values
    const isValidForm = () => {
        // if valid name with 3 or more characters
        if (!fullname.trim() || fullname.length < 3) {
            alert('Invalid name!')
            return false
        }
        // only valid email id is allowed
        if (!(email.includes('@'))) {
            alert('Invalid email!');
            return false
        }
        // password must have 8 or more characters
        if (!(phone.startsWith('0'))) {
            alert('Invalid phone number');
            return false
        }
        if (!(phone.length <= 10)) {
            alert('Invalid phone number');
            return false
        }
        // password must have 8 or more characters
        if (!password.trim() || password.length < 8) {
            alert('Password is less then 8 characters!');
            return false
        }
        // password and confirm password must be the same
        if (password !== confPassword) {
            alert('Password does not match!');
            return false;
        }
        return true;
    };

    const sumbitForm = () => {
        if (isValidForm()) {
            // submit form
            console.log(userInfo);
        }
    };
    return (
        <View style={styles.container}>
            <Header title='Sign Up' />
            <ScrollView style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} behavior={"height"}>
                    <FormContainer>
                        <FormInput title='Full name' value={fullname} textChangeVal={setName} />
                        <FormInput title='Email' value={email} textChangeVal={setEmail} />
                        <FormInput title='Phone number' value={phone} textChangeVal={setPhone} />
                        <FormInput title='Password' value={password} secure={true} textChangeVal={setPassword} />
                        <FormInput title='Retype Password' value={confPassword} secure={true} textChangeVal={setConfPassword} />
                        <FormSubmitBtn title='Submit' handler={handleChange} />
                        <TextButton title="Already have an account?" handler={handleSignup} />
                    </FormContainer>
                </View >
            </ScrollView >
        </View>
    )
}

export default SignUpPage