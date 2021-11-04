import React from 'react';

const Breadcrum =(props)=>{
    return(
        <>
        <section className="about-breadcrumb">
            <div className="about-back section-tb-padding" style={{backgroundImage: "url(assets/image/about-image.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="about-l">
                                <ul className="about-link">
                                    <li className="go-home"><a href="index1.html">Home</a></li>
                                    <li className="about-p"><span>{props.breadcrumName && props.breadcrumName}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Breadcrum;