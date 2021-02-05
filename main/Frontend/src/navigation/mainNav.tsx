import React, { FC, useState, useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppStack from './appStack'
import AuthStack from './authStack'
import { AuthContext } from '../context/context'


const MainNav : FC = () =>{
    const [token, setToken] = useState<string | null>(null)

    const authContext = React.useMemo(() => ({
        signIn: async(token:string) => {
            console.log(token)
            setToken(token)
        },
        signOut: async() => {
          setToken(null)
        }
      }), [])


    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {token !==null ? <AppStack/> : <AuthStack/>}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default MainNav