import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { GlobalContext } from '../GlobalContext';
import { storeData } from '../AsyncStore';

export default function AssigmentDetail({  assignment, navigation }) {

    const [isDocumentUploaded, setIsDocumentUploaded] = useState(false);
    const { currentUser, assignments, setAssignments ,setIsModalOpen } = useContext(GlobalContext);


    const handleSubmissionsReroute = () =>{

        setIsModalOpen(false);
        navigation.navigate('Submissions')

    }

    const deleteAssignment = () =>{
        setAssignments(prevAss => {
            const newState = prevAss.filter(p => p.id !== assignment.id)
            storeData('assignment', newState)
            return newState;
        });
        setIsModalOpen(false);
    }

    return (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500', marginBottom: 10 }}>{assignment.title} </Text>

            <View style={styles.detailItem}>
                <Text style={styles.detailTitle}>Description</Text>
                <Text>{assignment.description}</Text>
            </View>

            <View style={styles.detailItem}>
                <Text style={styles.detailTitle}>Course</Text>
                <Text>{assignment.courseName}</Text>
            </View>
            <View style={styles.detailItem}>
                <Text style={styles.detailTitle}>Lecturer</Text>
                <Text>{assignment.courseLecturer}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>Closes</Text>
                    <Text>{assignment.dueDateSummary}</Text>
                </View>
                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>Close Date</Text>
                    <Text>{assignment.dueDate}</Text>
                </View>
            </View>

            {isDocumentUploaded &&
                <View style={styles.detailItem}>
                    <Text style={styles.detailTitle}>Selected Document</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text>Solution for Assignment.zip</Text>
                        <Pressable>
                            <Text>x</Text>
                        </Pressable>
                    </View>
                </View>
            }

            {isDocumentUploaded && currentUser.role == "student" &&
                <View>
                    <Pressable style={[styles.button, { backgroundColor: "#2F85FE" }]}>
                        <Text style={{ color: '#fff', fontWeight: '500' }}>Submit Solution</Text>
                    </Pressable>
                </View>
            }
            {!isDocumentUploaded && currentUser.role == "student" &&
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, gap: 20 }}>
                    <Pressable style={[styles.button, { borderWidth: 1, borderColor: '#2F85FE' }]}>
                        <Text style={{ color: '#2F85FE', fontWeight: '500' }}>Download Question</Text>
                    </Pressable>
                    <Pressable style={[styles.button, { backgroundColor: "#2F85FE" }]}>
                        <Text style={{ color: '#fff', fontWeight: '500' }}>Upload Solution</Text>
                    </Pressable>
                </View>
            }

            {currentUser.role == "lecturer" &&
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, gap: 20 }}>
                    <Pressable style={[styles.button, { borderWidth: 1, borderColor: 'red' }]} onPress={deleteAssignment}>
                        <Text style={{ color: 'red', fontWeight: '500' }}>Delete Assignment</Text>
                    </Pressable>
                    <Pressable style={[styles.button, { backgroundColor: "#2F85FE" }]} onPress={handleSubmissionsReroute}>
                        <Text style={{ color: '#fff', fontWeight: '500' }}>View Submissions</Text>
                    </Pressable>
                </View>
            }


        </View>
    )
}

const styles = StyleSheet.create({

    detailItem: {
        marginBottom: 15
    },
    detailTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center'
    }

});