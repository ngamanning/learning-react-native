import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card (props) {
    return(
        <View style={{...styles.card, ...props.styles}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {        
        backgroundColor: "#fff",
        padding: 32,
        shadowColor: "#000",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
      }
})