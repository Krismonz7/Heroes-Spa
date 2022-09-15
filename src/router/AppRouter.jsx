import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'


export const AppRouter = () => {
return (
    <div>

        <div className="container">
        <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/*' element={
                <PrivateRoute children={<HeroesRoutes/>}/>
            }/>
            <Route path='/*' element={<HeroesRoutes/>}></Route>
        </Routes>
        </div>
    </div>
)
}
