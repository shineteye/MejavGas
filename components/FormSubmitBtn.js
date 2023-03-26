import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const backgcolor = "#FFFFFF";
const foreGcolor = '#227BFF';

const FormSubmitBtn = ({ title, handler }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handler}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: foreGcolor,
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 700
    }
})

export default FormSubmitBtn