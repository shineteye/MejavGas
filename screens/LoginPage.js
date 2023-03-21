import React, { useState } from 'react';
import { Image, Modal, Pressable, Text, TextInput, View } from 'react-native';
import styles from '../styles/LoginPageStyle';

const LoginPage = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            handleModalClose()

            alert(data.message)

            navigation.navigate('DashboardPage')
        } catch (e) {
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
                <Text style={{ ...styles.headerText, ...styles.LoginHeaderText }}>LoginPage</Text>
            </View>

            {/* Modal */}
            <Modal visible={modalOpen} animationType={'slide'}>
                <View style={styles.modalContent}>
                    <View style={styles.modalContainer}>
                        <Pressable onPress={handleModalClose}>
                            <View style={styles.launchBtn}>
                                <Text style={styles.launchBtnText}>back</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View style={styles.modalContainer}>
                        <Image
                            source={require('../assets/gas-tank.png')}
                            style={{
                                width: 100, height: 100,
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }} />
                    </View>
                    <View style={styles.modalContainer}>
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
                                    <Text style={styles.launchBtnText}>Submit</Text>
                                </View>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </Modal>

            <View>
                <Pressable onPress={handleModalOpen}>
                    <View style={styles.launchBtn}>
                        <Text style={styles.launchBtnText}>Login</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}



export default LoginPage