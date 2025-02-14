import {FlatList, StyleSheet, View, } from 'react-native';
import color from '../constant/Color';
import FinanceOverview from '../components/FinanceOverview';
import ExpenseItem from '../components/ExpenseItem';
import data from '../data/dummy-data.json';
import PotentialSavingsOverview from '../components/PotentialSavingsOverview';

const MainScreen = () => {


    return (
        <View style={styles.rootContainer}>
            <FinanceOverview />
            <View style={styles.pickerContainer}></View>
            <View style={styles.itemscontainer}>
                <FlatList data={data} renderItem={({item}) => <ExpenseItem name={item.name} amount={item.amount} />} />
            </View>
            <PotentialSavingsOverview />
        </View>
    )
}

export default MainScreen ;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: color.primaryColor300,
        alignItems: 'center'
    },

    pickerContainer: {
        height: '5%',
        width: '90%'
    },

    itemscontainer: {
        height: '70%',
        width: '90%',
        backgroundColor: color.primaryColor500,
        borderWidth: 2,
        borderRadius: 7,
    },

});