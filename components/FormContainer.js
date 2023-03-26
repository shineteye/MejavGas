import React from 'react';
import { Dimensions, KeyboardAvoidingView, StyleSheet } from 'react-native';

const backgcolor = "#FFFFFF";
const foreGcolor = '#227BFF';

const FormContainer = ({ children, extraStyles }) => {
    return (
        <KeyboardAvoidingView style={{ ...styles.container, ...extraStyles }}>
            {children}
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgcolor,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        padding: 20,
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
    },
})

export default FormContainer