import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
return (
    <div>

        <div className="container">
        <Routes>
            <Route path='login/*' element={<PublicRoute children={<Login/>}/>}></Route>
            <Route path='/*' element={
                <PrivateRoute children={<HeroesRoutes/>}/>
            }/> 
        </Routes>
        </div>
    </div>
)
}
