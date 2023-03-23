import { StyleSheet } from "react-native";

const backgcolor = "#FFFFFF";
const foreGcolor = '#227BFF';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgcolor,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: backgcolor,
    },
    headerText: {
        color: foreGcolor,
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 20
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        color: 'white',
    },
    modalContent: {
        flex: 1,
        backgroundColor: "fefefe"

    },
    modalImageContainer: {
        backgroundColor: backgcolor,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60
    },
    modalFormContainer: {
        backgroundColor: backgcolor,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
        padding: 20
    },
    labelText: {
        color: foreGcolor,
        fontWeight: 700
    },
    textInput: {
        borderWidth: 2,
        borderLeftColor: backgcolor,
        borderRightColor: backgcolor,
        borderTopColor: backgcolor,
        borderBottomColor: foreGcolor,
        color: foreGcolor,
        fontSize: 20,
        // textAlign: "center",
        backgroundColor: backgcolor,
        paddingBottom: 2,
        marginBottom: 10,
        width: 300,
    },
    launchBtn: {
        backgroundColor: foreGcolor,
        height: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30
    },
    loginBtnText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 700,
        display: 'flex',
    },
    submitText: {
        color: foreGcolor
    },
    leaveLoginBtnText: {
        color: foreGcolor,
        fontSize: 15,
        fontWeight: 700,
    },
    modalCloseBtnView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    loginText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 700
    }

})

export default styles;