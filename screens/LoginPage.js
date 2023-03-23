import React, { useState } from 'react';
import { Image, Modal, Pressable, Text, TextInput, View } from 'react-native';
import styles from '../styles/LoginPageStyle';

const cablePhoneAddress = "http://192.168.137.1:3000"
const localhostAddress = "http://localhost:3000"
const devAddress = "https://devsite.com"

const LoginPage = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        handleModalClose()
        navigation.navigate("SignUpPage")
    }
    const handleLogin = async () => {
        try {
            fetch(cablePhoneAddress + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            handleModalClose()
            // alert(message)

            navigation.navigate('DashboardPage')
        } catch (e) {
            console.log(e);
            alert("error")
        }

    }
    const handleModalOpen = () => {
        setModalOpen(true)
    }
    const handleModalClose = () => {
        setModalOpen(false)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ ...styles.headerText }}>Thanks for creating an account</Text>
            </View>

            {/* Modal */}
            <Modal visible={modalOpen} animationType={'slide'}>
                <View style={styles.modalContent}>
                    <View style={styles.modalImageContainer}>
                        <Image
                            source={require('../assets/gas-tank.png')}
                            style={{
                                width: 100, height: 100,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                // backgroundColor: '#ccc'
                            }} />
                    </View>
                    <View style={styles.modalFormContainer}>
                        <Text style={styles.labelText}>Email</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder=""
                            value={email}
                            onChangeText={(val) => setEmail(val)}
                        />
                        <Text style={styles.labelText}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            secureTextEntry={true}
                            value={password}
                            placeholder=""
                            onChangeText={(val) => setPassword(val)}
                        />
                        <View style={styles.submitBtn}>
                            <Pressable onPress={handleLogin}>
                                <View style={styles.launchBtn}>
                                    <Text style={styles.loginBtnText}>Login</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.modalCloseBtnView}>
                        <Pressable onPress={handleSignup}>
                            <Text style={styles.leaveLoginBtnText}>Don't yet have an account?</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/* Main Login Page */}
            <View>
                <Pressable onPress={handleModalOpen}>
                    <View style={styles.launchBtn}>
                        <Text style={styles.loginText}>Get Started</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}



export default LoginPage