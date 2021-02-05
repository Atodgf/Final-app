import React, {FC, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Input, Button} from '../components'
import { AuthContext } from '../context/context'

const App: FC = (props:any) =>{
    const [username, setUsername] = useState<string | null>()
    const [password, setPassword] = useState<string | null>()

    const { signIn } = React.useContext(AuthContext)

    const sendCred= async (props:any)=>{
        fetch("http://192.168.100.2:3000/users/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "username": username, 
                "password":password
         })
        })
        .then(res=>res.json())
        .then(json =>{
            if(json.message === "Unauthorized"){
                alert("Wrong login or password!")
            }else {
                signIn(json.token)
            }
        })
        
     }

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Input placeholder="Username" onChangeText={(text)=>{setUsername(text)}}/>
            <Input placeholder="Password" onChangeText={(text)=>{setPassword(text)}}/>
            <Button title="Login" onPress={()=> sendCred(props)}/>
            <View style={styles.signUpText}>
                <Text style={{marginHorizontal: 5}}>Don't Have an Account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('signup')} style={{marginHorizontal: 5}}>
                    <Text style={{color: 'rgba(81,135,200,1)'}}>Sugn Up Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpText: {
        flexDirection: 'row',
        marginVertical: 20
    }
})