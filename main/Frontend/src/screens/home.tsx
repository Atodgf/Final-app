import React, {FC} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AuthContext } from '../context/context'
import {Button} from '../components'

const App: FC = () =>{

    const { signOut } = React.useContext(AuthContext)
    const func = ()=>{
        signOut()
    }
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Logout" onPress={()=> func()}/>
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