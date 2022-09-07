import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

AuthProvider

export const HeroesApp = () => {

  //Implemento el AuthProvider para darle el context al appRouter
  return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}