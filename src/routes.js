import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Recordes from './pages/Recordes'
import Footer from './components/Footer'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/recordes' element={<Recordes/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}