import { Pressable, StyleSheet, Text, View, } from "react-native";


const ExpenseItem = ({ name, amount }) => {


    return (
      
        <Pressable style={ ({ pressed }) => [styles.itemContainer, pressed && styles.itemPressed]} andr>
            <View style={styles.labelContainer}><Text style={styles.label}>Name</Text>
                    <View>
                        <Text style= {[styles.dynamicText, {color: '#665656'}]}>{name}</Text>
                    </View>
            </View>
            <View style={styles.labelContainer}><Text style={styles.label}>Amount</Text>
                    <View>
                        <Text style={styles.dynamicText}>-{amount}</Text>
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
        width: '90%',
        margin: 3,
        justifyContent: 'space-between',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {height: 5, width: 0},
        shadowOpacity: 0.5,
        elevation: 15

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
        color: '#687c86',
        fontWeight: 'bold'
    },
    dynamicText: {
        color: '#b50c0c',
        fontSize: 18,
        fontWeight: 'bold'
    },

});