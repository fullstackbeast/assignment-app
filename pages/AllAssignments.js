import { formatDistanceToNow } from 'date-fns';
import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import DashboardLayout from '../layouts/DashboardLayout';
import AssigmentItem from '../components/AssignmentItem';
import { GlobalContext } from '../GlobalContext';


export default function AllAssignments({navigation}) {

    const {assignments} = useContext(GlobalContext);

    return (
        <DashboardLayout pageTitle="All Assignments" navigation={navigation}>
            <View>
                {assignments.map(assignment =><AssigmentItem navigation={navigation} assignment={assignment} key={assignment.id} /> )}
            </View>

        </DashboardLayout>
    )
}