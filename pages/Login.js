import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Image } from "react-native";
import { GlobalContext } from "../GlobalContext";
import { USERS } from "../Data";

export default function Login({ navigation }) {

    const { setCurrentUser } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        let user = USERS.find(u => u.email.toLowerCase() == email.toLowerCase() && u.password.toLowerCase() == password.toLowerCase());


        if (user) {
            setCurrentUser(user);
            if (user.role == 'lecturer') {
                navigation.navigate('LecturerDashboard')
            }
            else if (user.role == 'student') {
                navigation.navigate('StudentDashboard')
            }
        }




    }

    return (
        <View style={styles.container}>
            <View style={styles.firstPart}>
                <View style={[styles.logoContainer, styles.elevation]}>
                    <Image source={require('../assets/icons/icon-done.png')} style={{ width: 80, height: 90 }} />
                </View>
            </View>
            <View style={styles.secondPart}>
                <Text style={{ fontSize: 28, textAlign: 'center', fontWeight: '900' }}>Login</Text>
                <View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Email Address</Text>
                        <TextInput style={styles.inputElements} keyboardType="email-address"
                            onChangeText={newText => setEmail(newText)} placeholder="Enter your email address" />
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Password</Text>
                        <TextInput style={styles.inputElements} secureTextEntry={true} placeholder="Enter your password" onChangeText={newText => setPassword(newText)} />
                    </View>

                    <Pressable style={{ backgroundColor: '#2F85FE', alignItems: 'center', padding: 10, borderRadius: 20, marginVertical: 10 }} onPress={handleLogin}>

                        <Text style={{ fontWeight: '500', color: '#fff' }}>Login</Text>

                    </Pressable>
                </View>

            </View>

        </View>
    )


}
const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    logoContainer: {
        backgroundColor: 'white',
        height: 150,
        width: 150,
        borderRadius: 300,
        marginBottom: -75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstPart: {
        flex: 1,
        backgroundColor: '#151F33',
        borderBottomEndRadius: 120,
        borderBottomStartRadius: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    secondPart: {
        flex: 1,
        marginTop: 80,
        padding: 20
    },

    elevation: {
        elevation: 20,
        shadowColor: '#eee',
    },

    inputElements: {
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
        borderColor: '#eee',
        borderWidth: 1,
        marginTop: 10
    }

});