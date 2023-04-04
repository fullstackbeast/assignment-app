import { formatDistanceToNow } from 'date-fns';
import React, { useState } from 'react'
import { View } from 'react-native'
import DashboardLayout from '../layouts/DashboardLayout';
import SubmissionItem from '../components/SubmissionItem';

export default function Submissions({navigation}) {

    const [submissions, setSubmissions] = useState([
        {
            id: 1,
            studentName: "Alake Abisola",
            submissionDate: "April 4, 2023 8:00 AM",
            submissionDateSummary: formatDistanceToNow(
                new Date(2023, 3, 4),
                { addSuffix: true }
            )
        },
        {
            id: 2,
            studentName: "Odeyemi Idris",
            submissionDate: "April 4, 2023 8:00 AM",
            submissionDateSummary: formatDistanceToNow(
                new Date(2023, 3, 4),
                { addSuffix: true }
            )
        },
        {
            id: 3,
            studentName: "Olaide Kolapo",
            submissionDate: "April 4, 2023 8:00 AM",
            submissionDateSummary: formatDistanceToNow(
                new Date(2023, 3, 4),
                { addSuffix: true }
            )
        },

        
    ]);

    return (
        <DashboardLayout pageTitle="Assignment Submissions" navigation={navigation}>
            <View>
            <View>
                {submissions.map(submission =><SubmissionItem submission={submission} key={submission.id} /> )}
            </View>

            </View>

        </DashboardLayout>
    )
}