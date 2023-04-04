import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function HorizontalLine() {

    return (
        <View
            style={{
                borderBottomColor: '#eee',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginVertical: 10
            }}
        />
    )
}