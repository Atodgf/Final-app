import React, { FC, useState, useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppStack from './appStack'
import AuthStack from './authStack'
import { AuthContext } from '../context/context'
import AsyncStorage from '@react-native-async-storage/async-storage'


const MainNav : FC = () =>{
    const [isLogged, setIsLogged] = useState<boolean | null>(false)

    const authContext = React.useMemo(() => ({
        signIn: async(token:string) => {
            fetch("http://192.168.100.2:3000/users/validate",{
                method:"GET",
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                })
                .then(res=>res.json())
                .then(async(json) => {
                    if (json.message === "Token(s) validated") {
                        await AsyncStorage.setItem('token', token)
                        setIsLogged (true)
                    }
                })
        },
        signOut: async() => {
            setIsLogged (false)
            await AsyncStorage.removeItem('token')
        }
      }), [])

    useEffect(() => {
        const fetchData = async() => {
            const checkToken = await AsyncStorage.getItem('token')
            fetch("http://192.168.100.2:3000/users/validate",{
                method:"GET",
                headers: {
                    'Authorization': 'Bearer ' + checkToken
                },
                })
                .then(res=>res.json())
                .then(json =>{
                    if(json.message === "Token(s) validated") {
                        setIsLogged (true)
                    }
                })
        }
        fetchData()
      }, [])
    
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {isLogged !== false ? <AppStack/> : <AuthStack/>}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default MainNav