import React from 'react';
import TopNotification from './top-notification';
import Header from './header';
import MobileMenu from './mobile-menu';

const HeaderComponent =()=>{
    return(
        <>
            <TopNotification />
            <Header />
            <MobileMenu />
        </>
    )
}
export default HeaderComponent;