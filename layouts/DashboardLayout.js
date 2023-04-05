import React, { useContext, useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'
import { ScrollView, Text, View } from 'react-native'
import Font from 'react-native-vector-icons/Ionicons'
import { GlobalContext } from '../GlobalContext';
import useCompare from '../hooks/useCompare';
import areIntervalsOverlappingWithOptions from 'date-fns/esm/fp/areIntervalsOverlappingWithOptions/index.js';

export default function DashboardLayout({ navigation, pageTitle, children }) {

    const { currentUser, assignments } = useContext(GlobalContext);

    // const assignmentHasChanged = useCompare(assignments);

    // useEffect(() => {

    //     if (assignmentHasChanged) {

    //         console.log("assignment ttt changed", assignments)
    //     }


    // }, [assignments])

    const logOut = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#F3F4FA' }}>

            <View style={styles.topBarContainer}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>{pageTitle}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 50, height: 50, overflow: 'hidden', borderRadius: 5000 }}>
                        <Image style={{ width: '80%', height: '80%' }} source={require('../assets/icons/girl-user.png')} />
                    </View>

                    <Pressable onPress={logOut}>
                        <Text>Logout</Text>
                    </Pressable>
                </View>

            </View>

            <ScrollView style={{ flex: 1, padding: 10, marginVertical: 10 }}>
                {children}
            </ScrollView>

            {

                currentUser.role == "student" ?

                    <View style={styles.bottomNav}>

                        <Pressable style={styles.navItems} onPress={() => navigation.navigate('StudentDashboard')}>
                            <Font
                                name='home-outline'
                                size={20}
                                color='#000'
                            />
                            <Text>Home</Text>
                        </Pressable>

                        <Pressable style={styles.navItems} onPress={() => navigation.navigate('Active')}>
                            <Font
                                name='timer-outline'
                                size={20}
                                color='#000'
                            />
                            <Text>Active</Text>
                        </Pressable>

                        <Pressable style={styles.navItems} onPress={() => navigation.navigate('Missed')}>
                            <Font
                                name='md-close-circle-outline'
                                size={20}
                                color='#000'
                            />
                            <Text>Missed</Text>
                        </Pressable>

                        {/* <Pressable style={styles.navItems} onPress={() => navigation.navigate('StudentDashboard')}>
                    <Font
                        name='ios-person-outline'
                        size={20}
                        color='#000'
                    />
                    <Text>Profile</Text>
                </Pressable> */}
                    </View>

                    :
                    <View style={styles.bottomNav}>

                        <Pressable style={styles.navItems} onPress={() => navigation.navigate('LecturerDashboard')}>
                            <Font
                                name='home-outline'
                                size={20}
                                color='#000'
                            />
                            <Text>Home</Text>
                        </Pressable>
                        <Pressable style={styles.navItems} onPress={() => navigation.navigate('CreateAssignment')}>
                            <Font
                                name='add-outline'
                                size={20}
                                color='#000'
                            />
                            <Text>Create Assigment</Text>
                        </Pressable>

                        <Pressable style={styles.navItems} onPress={() => navigation.navigate('AllAssignments')}>
                            <Font
                                name='timer-outline'
                                size={20}
                                color='#000'
                            />
                            <Text>All Assigments</Text>
                        </Pressable>


                    </View>


            }

        </View>
    )

}

const styles = StyleSheet.create({
    navItems: {
        flex: 1,
        alignItems: 'center'
    },
    bottomNav: {
        flexDirection: 'row',
        //elevation: 10,
        shadowColor: '#000',
        shadowOffset: 10,
        backgroundColor: '#fbfbfb',
        padding: 5,
        borderRadius: 20
    },
    topBarContainer: {
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 30
    }
})