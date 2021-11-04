import React from 'react';
import {Route, Routes} from 'react-router-dom'
import HomeComponent from './components/Home';
import AboutComponent from './components/About' ;
import NotFound from './components/NotFound';

const PageRoutes=()=>{
    return(
        <div>
                <Routes>
                    <Route exact path='/' element={<HomeComponent />} />
                    <Route path='/home' element={<HomeComponent />} />
                    <Route path='/about' element={<AboutComponent/>} />
                    <Route path='*' element={<NotFound/>} />
                </Routes>
        </div>
    )
}
export default PageRoutes;
