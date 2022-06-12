import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Barbershop from './pages/Barbershop'
import UserPage from './pages/UserPage'
import UserRegister from './pages/Register'
import BarbershopRegister from './pages/BarbershopRegister'
import BarbershopPageInfo from './pages/BarbershopPage'
import BarbershopRegisterOpeningHours from './pages/BarbershopRegisterOpeningHours'
import BarbershopRegisterEmployees from './pages/BarbershopRegisterEmployees'
import BarbershopRegisterServices from './pages/BarbershopRegisterServices'

function IbarberRoutes() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />  
                <Route path="/login" element={<Login/>} />
                <Route path="/search" element={<Search/>} >
                    <Route path=":cityName" />
                    <Route path=":cityName/:districtName" element={<Search/>} />
                </Route>
                <Route path="/barbershop">
                    <Route path="register">
                        <Route path="general-info" element={<BarbershopRegister/>}/>
                        <Route path="opening-hours/:barbershopId" element={<BarbershopRegisterOpeningHours/>}/>
                        <Route path="employees/:barbershopId" element={<BarbershopRegisterEmployees/>}/>
                        <Route path="services/:barbershopId" element={<BarbershopRegisterServices/>}/>
                    </Route>
                    <Route path=":barbershopId" element={<Barbershop/>}/>
                    {/* <Route path="logged">
                        <Route path="info/:barbershopId" element={<BarbershopPageInfo/>}/>
                        <Route path="opening-hours/:barbershopId" element={<BarbershopPageOpHours/>}/>
                    </Route> */}
                </Route>
                <Route path="/user">
                    <Route path=":userId" element={<UserPage/>}/>
                    <Route path="register" element={<UserRegister/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default IbarberRoutes