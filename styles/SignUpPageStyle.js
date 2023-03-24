import { StyleSheet } from "react-native";

const backgcolor = "#FFFFFF";
const foreGcolor = '#227BFF';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgcolor,
    },
    headerText: {
        color: foreGcolor,
        fontSize: 30,
        fontWeight: 700,
        padding: 10,
    },
    headerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgcolor,
        marginTop: 60,
        marginBottom: 50
    },
    text: {
        fontWeight: 700,
        color: foreGcolor
    },
    form: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
        width: '80%',
        backgroundColor: "#c3234"
    },
    formField: {
        flex: 1,
        justifyContent: 'flex-start',
        marginBottom: 5
    },
    labelText: {
        color: foreGcolor,
        fontWeight: 700,
        fontSize: 16,
        marginBottom: 4
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
        marginBottom: 15,
        width: 300,
    },
    submitBtn: {
        backgroundColor: foreGcolor,
        height: 45,
        width: 150,
        alignItems: 'center',
        borderRadius: 5
    },
    submitBtnText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 700,
        display: 'flex',
    },
})

export default styles;