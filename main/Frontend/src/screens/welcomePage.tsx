import React, {FC} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Button} from '../components'

const App: FC = (props:any) =>{
    return (
        <View style={styles.container}>
            <Text>Welcome Screen</Text>
            <Button title="Login" onPress={()=> props.navigation.navigate('login')}/>
            <Button title="Sign Up" onPress={()=> props.navigation.navigate('singup')}/>
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