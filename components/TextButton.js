import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const backgcolor = "#FFFFFF";
const foreGcolor = '#227BFF';

const TextButton = ({ title, handler }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handler}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextButton

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    buttonText: {
        color: foreGcolor,

    }
})