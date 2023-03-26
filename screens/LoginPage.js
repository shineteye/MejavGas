import React, { useContext, useState } from 'react';
import { Image, View } from 'react-native';
import client from '../api/client';
import FormContainer from '../components/FormContainer';
import FormInput from '../components/FormInput';
import FormSubmitBtn from '../components/FormSubmitBtn';
import TextButton from '../components/TextButton';
import { useLogin } from '../contexts/loginProvider';
import { UserContext } from '../contexts/userContext';
import styles from '../styles/LoginPageStyle';

const cablePhoneAddress = "http://192.168.137.1:3000"
const localhostAddress = "http://localhost:3000"
const devAddress = "https://devsite.com"

const LoginPage = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(UserContext);
    const { isLoggedIn, setIsLoggedIn } = useLogin();


    const handleLogin = async () => {
        if (isValidForm) {
            try {
                const res = await client.post('/login', { email, password })
                if (res.data.success) {
                    setUser(res.data.user)
                    setIsLoggedIn(true)
                    alert("Log in success")
                    navigation.navigate('DashboardPage')
                }
                else
                    alert('invalid credentials')
            } catch (error) {
                console.log(error);
                alert("Error", "Please fill all entries");
            }
        }
        else {
            console.log("error")
        }
    }

    const handleSignup = () => {
        navigation.navigate("SignUpPage")
    }

    const isValidForm = () => {
        // only valid email id is allowed
        if (!(email.includes('@'))) {
            alert('Invalid email!');
            return false
        }
        // password must have 8 or more characters
        if (!password.trim() || password.length < 8) {
            alert('Password is less then 8 characters!');
            return false
        }
        return true;
    };


    return (
        <View style={styles.container}>
            <View style={styles.modalImageContainer}>
                <Image
                    source={require('../assets/gas-tank.png')}
                    style={{
                        width: 100, height: 100,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }} />
            </View>
            <FormContainer>
                <FormInput title='Email'
                    value={email}
                    textChangeVal={setEmail} />
                <FormInput
                    title='Password'
                    value={password}
                    secure={true}
                    textChangeVal={setPassword} />
                <FormSubmitBtn title='Login' handler={handleLogin} />
                <TextButton title="Don't yet have an account?" handler={handleSignup} />
            </FormContainer>
        </View>
    )
}



export default LoginPage