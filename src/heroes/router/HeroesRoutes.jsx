import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../../auth'
import { Navbar } from '../../ui'
import { Search } from '../pages/Search'
import { HeroPage } from '../pages/HeroPage'
import { DcPage } from '../pages/DcPage'
import { MarvelPage } from '../pages/MarvelPage'


export const HeroesRoutes = () => {
    return (
    <>
    <Navbar/>    
    <hr />
    <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path='search' element={<Search/>}></Route>
        <Route path='hero/:heroId' element={<HeroPage/>}></Route>
        {/*Search, Hero by id */}
        <Route path='login' element={<Login/>}></Route>
        <Route path='/' element={<Navigate to={'marvel'}/>}></Route>
    </Routes>

    </>
    )
}
