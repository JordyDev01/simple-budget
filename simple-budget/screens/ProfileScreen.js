import { Button, Image, StyleSheet, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from "react-redux";
import { logoffUser } from "../redux/slice";
import color from "../constant/Color";
import { useEffect } from "react";
import LogoffButton from "../components/LogoffButton";

const ProfileScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const logoffHandler = async () => {
        SecureStore.deleteItemAsync('uid')
        .then(() => console.log(`uid deleted!`))

        SecureStore.deleteItemAsync('email')
        .then(() => console.log(`email deleted!`))

        SecureStore.deleteItemAsync('password')
        .then(() => console.log(`password deleted!`))

        dispatch(logoffUser())
        
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <LogoffButton logoffHandler={logoffHandler}/>
        })
    }, [navigation])
    return (
        <View style={styles.container}>
            <Image style={styles.picture}/>
        </View>
    ) 
}

export default ProfileScreen ;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    picture: {
        height: '25%',
        width: '70%',
        borderWidth: 5,
        borderColor: color.accentColor200,
        borderRadius: 50,
        marginTop: 15,
        alignSelf: 'center'
    },
    infoContainer: {},

});