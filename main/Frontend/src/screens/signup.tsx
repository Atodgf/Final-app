import React, {FC, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Input, Button} from '../components'

const App: FC = (props:any) =>{
    const [username, setUsername] = useState<string | null>()
    const [email, setEmail] = useState<string | null>()
    const [password, setPassword] = useState<string | null>()
    const [repeatpassword, setRepeatpassword] = useState<string | null>()

    const sendCred= async (props:any)=>{
        if (password === repeatpassword)
        {
            fetch("http://192.168.100.2:3000/users/register",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "email":email,
                "username": username, 
                "password":password
         })
        })
        .then(res=>res.json())
        .then(json =>{
            console.log(json)
            if (json.message !== undefined){
                alert(json.message)
            } else {
                alert("User created!")
            }
        })
        } else {
            alert("Passwords doesn't match")
        }
     }

    return (
        <View style={styles.container}>
            <Text>Sign up Screen</Text>
            <Input placeholder="Username" onChangeText={(text)=>{setUsername(text)}}/>
            <Input placeholder="Email" onChangeText={(text)=>{setEmail(text)}}/>
            <Input placeholder="Password" onChangeText={(text)=>{setPassword(text)}} secureTextEntry/>
            <Input placeholder="Repeat Password" onChangeText={(text)=>{setRepeatpassword(text)}} secureTextEntry/>
            <Button title="Sign Up" onPress={()=> sendCred(props)}/>
            <View style={styles.loginText}>
                <Text style={{marginHorizontal: 5}}>Already Have an Account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('login')} style={{marginHorizontal: 5}}>
                    <Text style={{color: 'rgba(81,135,200,1)'}}>Login Here</Text>
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
    loginText: {
        flexDirection: 'row',
        marginVertical: 20
    }
})