import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import DashboardLayout from '../layouts/DashboardLayout'
import { formatDistanceToNow } from 'date-fns';
import AssigmentItem from '../components/AssignmentItem';

export default function LecturerDashboard({navigation}) {

    const [assignments, setAssignments] = useState([
        {
            id: 1,
            title: "First Assignment",
            description: "This is the first assignment",
            courseId: 1,
            courseName: "First Course",
            courseLecturer: "First Lecturer",
            dueDate: "April 4, 2023 8:00 AM",
            dueDateSummary: formatDistanceToNow(
                new Date(2023, 3, 4),
                { addSuffix: true }
            )
        },

        {
            id: 3,
            title: "Second Assignment",
            description: "This is the second assignment",
            courseId: 1,
            courseName: "Second Course",
            courseLecturer: "Second Lecturer",
            dueDate: "April 4, 2023 8:00 AM",
            dueDateSummary: formatDistanceToNow(
                new Date(2023, 3, 4),
                { addSuffix: true }
            )
        },
        {
            id: 4,
            title: "Third Assignment",
            description: "This is the third assignment",
            courseId: 2,
            courseName: "Third Course",
            courseLecturer: "Third Lecturer",
            dueDate: "April 5, 2023 8:00 PM",
            dueDateSummary: formatDistanceToNow(
                new Date(2023, 3, 5),
                { addSuffix: true }
            )
        },
    ]);

    return (
        <DashboardLayout pageTitle="Lecturer Home" navigation={navigation}>
            <View>
        
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Assigments Due Today</Text>

                        <Pressable>
                            <Text style={{ textDecorationLine: 'underline' }}>See All</Text>
                        </Pressable>
                    </View>

                    <View>
                        {assignments.map(assignment => <AssigmentItem navigation={navigation} assignment={assignment} key={assignment.id} />)}
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