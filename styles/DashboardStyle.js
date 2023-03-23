import { StyleSheet } from "react-native";

const backgcolor = "#FFFFFF";
const foreGcolor = '#227BFF';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgcolor,
        alignItems: 'center',
        color: 'white',
        justifyContent: 'center',
        height: '100%'
    },
    cardContainer: {
    },
    headerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        marginTop: 50
    },
    headerText: {
        color: foreGcolor,
        fontSize: 30,
        fontWeight: 700,
        padding: 10,
    },
    image: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    orderBody: {
        // flex: 1,
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: '#ccc',
        padding: 0
    },
    labelText: {
        color: foreGcolor,
        fontWeight: 700,
        fontSize: 16
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
    },
    text: {
        fontWeight: 700,
        color: foreGcolor
    },
    orderBtn: {
        backgroundColor: foreGcolor,
        height: 50,
        width: 150,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    orderBtnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 700
    },
    bottomInfo: {
        margin: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default styles;