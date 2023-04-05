import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import DashboardLayout from '../layouts/DashboardLayout'
import { formatDistanceToNow } from 'date-fns';
import AssigmentItem from '../components/AssignmentItem';
import { GlobalContext } from '../GlobalContext';

export default function LecturerDashboard({navigation}) {

    const {assignments} = useContext(GlobalContext);

    return (
        <DashboardLayout pageTitle="Lecturer Home" navigation={navigation}>
            <View>
        
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Assigments</Text>

                        <Pressable onPress={()=>navigation.navigate("AllAssignments")}>
                            <Text style={{ textDecorationLine: 'underline' }}>See All</Text>
                        </Pressable>
                    </View>

                    <View>
                        {assignments.map((assignment, index) =>
                            (index < 3 && <AssigmentItem navigation={navigation} assignment={assignment} key={assignment.id} />))}
                    </View>
                </View>
            </View>
        </DashboardLayout>
    )
}

const styles = StyleSheet.create({
    topCard: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    },
    assignmentCard: {
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 10,
        borderLeftWidth: 8,
        borderLeftColor: '#810a0a40',
        borderRadius: 10
    }
})