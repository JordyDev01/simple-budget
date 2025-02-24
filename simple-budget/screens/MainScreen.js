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
            
                <FlatList data={data} renderItem={({item}) => <ExpenseItem name={item.name} amount={item.amount} />} />
           
            <PotentialSavingsOverview />
        </View>
    )
}

export default MainScreen ;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },


    // itemscontainer: {
    //     height: '70%',
    //     width: '100%',
    //     borderTopEndRadius: 25,
    //     borderTopLeftRadius: 25
    // },

});