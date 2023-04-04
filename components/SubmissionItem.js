import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function SubmissionItem({ submission }) {

    return (

        <View style={styles.assignmentCard} >
            <Text>{submission.studentName}</Text>
            <Text>Submitted: {submission.submissionDateSummary}</Text>
            <Pressable style={[styles.button, { borderWidth: 1, borderColor: '#2F85FE' }]}>
                <Text style={{ color: '#2F85FE', fontWeight: '500' }}>Download Submission</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 5,
        marginVertical: 10,
        marginTop: 30,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center'
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