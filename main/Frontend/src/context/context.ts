import React from 'react'

type ContextProps = { 
    signIn: any,
    signOut: any,
  };

export const AuthContext = React.createContext<Partial<ContextProps>>({})