import { Pressable, StyleSheet, Text, View, } from "react-native";
import color from "../constant/Color";

const ExpenseItem = ({ name, amount }) => {


    return (
        <Pressable style={ ({ pressed }) => [styles.itemContainer, pressed && styles.itemPressed]}>
            <View style={styles.labelContainer}><Text style={styles.label}>Name</Text>
                    <View>
                        <Text style= {[styles.dynamicText, {color: '#ffffff'}]}>{name}</Text>
                    </View>
            </View>
            <View style={styles.labelContainer}><Text style={styles.label}>Amount</Text>
                    <View>
                        <Text style={styles.dynamicText}>{amount}</Text>
                    </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem ;

const styles = StyleSheet.create({
    itemContainer: {
    flexDirection: 'row',
        height: 'auto',
        width: 'auto',
        margin: 8,
        justifyContent: 'space-evenly',
        backgroundColor: color.accentColor200,
        borderWidth: 1,
        borderRadius: 10,

    },
    itemPressed: {
        opacity: 0.7
    },
    labelContainer: {
        height: 'auto',
        width: 'auto',
        margin: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    label: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold'
    },
    dynamicText: {
        color: '#b50c0c',
        fontSize: 18,
        fontWeight: 'bold'
    },

});