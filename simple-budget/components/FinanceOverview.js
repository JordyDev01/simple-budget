import { StyleSheet, View, Text } from "react-native";
import color from "../constant/Color";

const FinanceOverview = () => {

    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>

                

                <View style={styles.box}>
                    <Text style={styles.textHeader}>Income</Text>
                    <View style={styles.innerBottomBox}><Text style={[styles.textFinance, {color: '#00b03b',}]}>1,000.000$</Text></View>
                </View>

                <View style={styles.box}>
                    <Text style={styles.textHeader}>expenses</Text>
                    <View style={styles.innerBottomBox}><Text style={[styles.textFinance, {color: '#dc6565'}]}>- 1,000.00$</Text></View>
                </View>

            </View>
        </View>
    );
}

export default FinanceOverview;

const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.accentColor200,
        borderWidth: 2,
        borderRadius: 7,
        borderColor: color.primaryColor500,
        margin: 12
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    box: {
        height: 'auto',
        width: 'auto',
        margin: 6,
    },
    innerBottomBox: {
        height: 'auto',
        width: 'auto',

    },
    textHeader: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
    },
    textFinance: {
        fontWeight: 'bold',
        fontSize: 18
    },
    
});