import {Pressable, StyleSheet, View, Text} from 'react-native';

const PotentialSavingsOverview = () => {


    return (
        <Pressable style={({pressed}) => [styles.container, pressed && styles.containerPressed]}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>Potential Saving:</Text>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>1,000,000.00 $</Text>
            </View>
        </Pressable>
    )
}

export default PotentialSavingsOverview; 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: '5%',
        width: '90%',
        margin: 8,
        backgroundColor: '#3fb60c',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
    },
    containerPressed: {
        opacity: 0.4
    },
    innerContainer: {
        margin: 5
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },

});