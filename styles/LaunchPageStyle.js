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
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: backgcolor,
    },
    headerText: {
        color: foreGcolor,
        fontSize: 30,
        fontWeight: 700,
        marginBottom: 100
    },
    image: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    launchBtn: {
        backgroundColor: foreGcolor,
        height: 50,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    launchBtnText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 700,
        display: 'flex',
    },
})

export default styles;