import { formatDistanceToNow } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import DashboardLayout from '../layouts/DashboardLayout';
import AssigmentItem from '../components/AssignmentItem';
import { GlobalContext } from '../GlobalContext';


export default function Active({ navigation }) {

    const { assignments } = useContext(GlobalContext);

    const [activeAssignments, setActiveAssignments] = useState([]);

    useEffect(() => {
        setActiveAssignments(assignments.filter(a => a.submitDate > new Date()))
    }, [])

    return (
        <DashboardLayout pageTitle="Pending Assignments" navigation={navigation}>
            <View>
                {assignments.map(assignment => <AssigmentItem navigation={navigation} assignment={assignment} key={assignment.id} />)}
            </View>

        </DashboardLayout>
    )
}