import React from 'react';
import AboutContent from './pages/about-content'
import BrandLogo from './pages/brand-logo';
import Breadcrum from './pages/breadcrum'
const AboutComponent =()=>{
    return(
        <>
            <Breadcrum breadcrumName="About Us" />
            <AboutContent />
            <BrandLogo />
        </>
    )
}
export default AboutComponent;