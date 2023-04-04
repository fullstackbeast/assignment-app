import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native'
import DashboardLayout from '../layouts/DashboardLayout'
import { formatDistanceToNow } from 'date-fns';
import Font from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { GlobalContext } from '../GlobalContext';
import AssigmentDetail from './AssignmentDetail';
import HorizontalLine from './HorizontalLine';

export default function AssigmentItem({ assignment, navigation }) {

    const { setIsModalOpen, setModalChild } = useContext(GlobalContext);

    const handleModalOpen = () => {
        setIsModalOpen(true)
        setModalChild(<AssigmentDetail navigation={navigation} assignment={assignment}/>)
    }

    return (
        <Pressable onPress={handleModalOpen}>
            <View style={styles.assignmentCard}>
                <Text style={{ fontSize: 16, fontWeight: '600', marginVertical: 10 }}>{assignment.title}</Text>
                <Text>{assignment.description}</Text>

                <View
                    style={{
                        borderBottomColor: '#e6e6e6',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginVertical: 10
                    }}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Font name='timer' size={20} />
                        <Text>{assignment.dueDateSummary}</Text>
                    </View>


                    <Text>{assignment.dueDate}</Text>

                </View>

                <HorizontalLine/>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Ionicons
                            name='ios-person-outline'
                            size={20}

                        />
                        <Text>{assignment.courseLecturer}</Text>
                    </View>


                    <Text>{assignment.courseName}</Text>

                </View>



            </View>
        </Pressable>
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