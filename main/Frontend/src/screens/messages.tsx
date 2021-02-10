import React, {FC} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AuthContext } from '../context/context'


const App: FC = () =>{

    
    return (
        <View style={styles.container}>
            <Text>Messages Screen</Text>
            
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