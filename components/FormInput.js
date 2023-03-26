import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const backgcolor = "#FFFFFF";
const foreGcolor = '#227BFF';

const FormInput = ({ placeholder, title, value, textChangeVal }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>{title}</Text>
            <TextInput
                value={value}
                placeholder={placeholder}
                style={styles.textInput}
                onChangeText={textChangeVal}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start'
    },
    labelText: {
        color: foreGcolor,
        fontSize: 15,
        fontWeight: 700,
        margin: 10
    },

    textInput: {
        borderWidth: 2,
        borderLeftColor: backgcolor,
        borderRightColor: backgcolor,
        borderTopColor: backgcolor,
        borderBottomColor: foreGcolor,
        color: foreGcolor,
        fontSize: 20,
        backgroundColor: backgcolor,
        paddingBottom: 2,
        marginBottom: 10,
        width: 300,
    }
})

export default FormInput