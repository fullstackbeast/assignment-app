import { format, formatDistanceToNow, set } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native'
import DashboardLayout from '../layouts/DashboardLayout';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import { COURSES } from '../Data';
import { Dropdown } from 'react-native-element-dropdown';
import { GlobalContext } from '../GlobalContext';
import { storeData } from '../AsyncStore';


export default function CreateAssignment({ navigation }) {

    const { currentUser, assignments, setAssignments } = useContext(GlobalContext);

    const dateFormat = 'E PPp';

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dateString, setDateString] = useState(format(date, dateFormat));

    const [courseId, setCourseId] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const data = COURSES.map(c => ({
        value: c.id,
        label: `${c.code} - ${c.name}`
    }))

    const createNewAssignment = () => {
        
        const newAssignment = {
            id: assignments.length + 1,
            title,
            description,
            courseId,
            courseName: COURSES.find(c => c.id == courseId).name,
            lecturerId: currentUser.id,
            courseLecturer: currentUser.firstName + " " + currentUser.lastName,
            submitDate: date,
            dueDate: dateString,
            get dueDateSummary() {
                return formatDistanceToNow(this.submitDate, { addSuffix: true })
            }

        }

        setAssignments(prevAss => {
            const newState = [...prevAss, newAssignment]
            storeData('assignment', newState)
            return newState;
        });



        navigation.navigate("AllAssignments");
    }


    useEffect(() => {

        setDateString(format(date, dateFormat))

    }, [date])



    return (
        <DashboardLayout pageTitle="Create Assignment" navigation={navigation}>
            <View style={styles.secondPart}>
                <Text style={{ fontSize: 28, textAlign: 'center', fontWeight: '900' }}>Create Assignment</Text>
                <View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Title</Text>
                        <TextInput style={styles.inputElements}
                            onChangeText={newText => setTitle(newText)} placeholder="Enter assignment Title" />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Description</Text>
                        <TextInput style={styles.inputElements}
                            onChangeText={newText => setDescription(newText)} placeholder="Enter assignment Description" />
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Course</Text>
                        <View style={styles.container}>

                            <Dropdown
                                style={[isFocus && { borderColor: 'blue' }]}
                                data={data}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select course' : '...'}
                                searchPlaceholder="Search..."
                                value={courseId}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setCourseId(item.value);
                                    setIsFocus(false);
                                }}

                            />
                        </View>
                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Closing Date</Text>
                        <Pressable style={styles.inputElements} placeholder="Choose Closing Date" onPress={() => setOpen(true)}>
                            {date && <Text>{dateString}</Text>}
                        </Pressable>
                        <DatePicker
                            modal
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                                console.log(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                    </View>

                    <Pressable style={{ backgroundColor: '#2F85FE', alignItems: 'center', padding: 10, borderRadius: 20, marginVertical: 10 }} onPress={createNewAssignment}>

                        <Text style={{ fontWeight: '500', color: '#fff' }}>Create Assignment</Text>

                    </Pressable>
                </View>

            </View>

        </DashboardLayout>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    logoContainer: {
        backgroundColor: 'white',
        height: 150,
        width: 150,
        borderRadius: 300,
        marginBottom: -75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstPart: {
        flex: 1,
        backgroundColor: '#151F33',
        borderBottomEndRadius: 120,
        borderBottomStartRadius: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    secondPart: {
        flex: 1,

        padding: 20,
        backgroundColor: 'white'
    },

    elevation: {
        elevation: 20,
        shadowColor: '#eee',
    },

    inputElements: {
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
        borderColor: '#eee',
        borderWidth: 1,
        marginTop: 10
    }

});