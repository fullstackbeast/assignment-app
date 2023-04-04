import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext'
import { Alert, Modal, StyleSheet, Pressable, View, Text, FlatList, ScrollView } from 'react-native'
import HorizontalLine from './HorizontalLine'

export default function ModalComponent() {

    const { isModalOpen, setIsModalOpen, modalChild } = useContext(GlobalContext)

    if (isModalOpen) {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalOpen}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setIsModalOpen(false);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                                <Text style={styles.modalText}></Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setIsModalOpen(false)}>
                                    <Text style={styles.textStyle}>X</Text>
                                </Pressable>
                            </View>
                            <HorizontalLine/>
                            <ScrollView >
                                { modalChild }
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

            </View>

        )
    } else {
        return (<>
        </>)
    }




}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
        width: '100%',
        position: 'absolute',
        height: '100%'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        height: '70%',

    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        //backgroundColor: '#F194FF',
    },
    buttonClose: {
        //backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});