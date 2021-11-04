import React from 'react'

const TopNotification = () => {
    return (         
        <section className="top1">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="top-home">
                            <li className="top-home-li">
                                <div className="currency">
                                    <span className="currency-head">currency:</span>
                                    <div className="currency-drop">
                                        <div className="eur">
                                            <img className="img-fluid" src="../assets/image/c-icon1.png" alt="" />
                                            <span className="cur-name">EUR</span>
                                        </div>
                                        <ul className="all-currency">
                                            <li>
                                                <a href="">
                                                    <img className="img-fluid" src="../assets/image/c-icon4.png" alt="" />
                                                    <span className="cur-name">AFN</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img className="img-fluid" src="../assets/image/c-icon2.png" alt="" />
                                                    <span className="cur-name">BDT</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img className="img-fluid" src="../assets/image/c-icon3.png" alt="" />
                                                    <span className="cur-name">CAD</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img className="img-fluid" src="../assets/image/c-icon1.png" alt="" />
                                                    <span className="cur-name">EUR</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img className="img-fluid" src="../assets/image/c-icon5.png" alt="" />
                                                    <span className="cur-name">GBP</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img className="img-fluid" src="../assets/image/c-icon6.png" alt="" />
                                                    <span className="cur-name">INR</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img className="img-fluid" src="../assets/image/c-icon7.png" alt="" />
                                                    <span className="cur-name">SAR</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <img className="img-fluid" src="../assets/image/c-icon8.png" alt="" />
                                                    <span className="cur-name">USD</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="r-search">
                                    <a href="#r-search-modal" className="search-popuup" data-bs-toggle="modal"><i className="fa fa-search"></i></a>
                                    <div className="modal fade" id="r-search-modal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-body">
                                                    <div className="m-drop-search">
                                                        <input type="text" name="search" placeholder="Search products, brands or advice" />
                                                        <button className="search-btn" type="button"><i className="fa fa-search"></i></button>
                                                    </div>
                                                    <button type="button" className="close" data-bs-dismiss="modal"><i className="ion-close-round"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="top-home-li t-content">
                                <div className="top-content">
                                    <p className="top-slogn"><span className="top-c">free shipping</span> orders from all item</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TopNotification;