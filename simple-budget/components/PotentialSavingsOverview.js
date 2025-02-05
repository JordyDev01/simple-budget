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
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        margin: 8,
        backgroundColor: '#52893a',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
    },
    containerPressed: {
        opacity: 0.3
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