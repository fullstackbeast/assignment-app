import { formatDistanceToNow } from 'date-fns';
import React, { useState } from 'react'
import { View } from 'react-native'
import DashboardLayout from '../layouts/DashboardLayout';
import AssigmentItem from '../components/AssignmentItem';


export default function Active({navigation}) {

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
        <DashboardLayout pageTitle="Pending Assignments" navigation={navigation}>
            <View>
                {assignments.map(assignment =><AssigmentItem navigation={navigation} assignment={assignment} key={assignment.id} /> )}
            </View>

        </DashboardLayout>
    )
}