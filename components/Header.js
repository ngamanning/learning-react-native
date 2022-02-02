import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style ={styles.text}>{props.title}</Text>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        width: '100%',
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text :{
        fontSize: 18,
        alignSelf: 'center',
        paddingBottom:20,
        paddingTop:20,
        color: '#fff',
        fontWeight: 'bold',
    }
})