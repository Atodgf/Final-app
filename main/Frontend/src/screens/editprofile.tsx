import React, {FC} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Button} from '../components'

const App: FC = () =>{

    
    return (
        <View style={styles.container}>
            <Text>Edit Profile Screen</Text>
            <Button title="Logout" onPress={()=> alert('Button Clicked!')}/>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})