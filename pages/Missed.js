import React, { useContext } from 'react'
import { View } from 'react-native'
import DashboardLayout from '../layouts/DashboardLayout';
import AssigmentItem from '../components/AssignmentItem';
import { GlobalContext } from '../GlobalContext';


export default function Missed({navigation}) {

    const { assignments } = useContext(GlobalContext);

    return (
        <DashboardLayout pageTitle="Missed Assignment" navigation={navigation}>
            <View>
            <View>
                {assignments.map(assignment =><AssigmentItem navigation={navigation} assignment={assignment} key={assignment.id} /> )}
            </View>

            </View>

        </DashboardLayout>
    )
}