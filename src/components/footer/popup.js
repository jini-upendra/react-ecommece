import React from 'react'

const Popup = () => {
    return ( 
        <>        
        <div className="vegist-popup animated modal fadeIn" id="myModal1" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="popup-content">
                            <a href="" data-bs-dismiss="modal" aria-label="Close" className="close-btn"><i className="ion-close-round"></i></a>
                            <div className="pop-up-newsletter" style={{backgroundImage: "url(assets/image/news-popup.jpg)"}}>
                                <div className="logo-content">
                                    <a href="index1.html"><img src="assets/image/logo1.png" alt="image" className="img-fluid" /></a>
                                    <h4>Become a subscriber</h4>
                                    <span>Subscribe to get the notification of latest posts</span>
                                </div>
                                <div className="subscribe-area">
                                    <input type="text" name="comment" placeholder="Your email address" />
                                    <a href="index1.html" className="btn btn-style1">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="scroll" id="top">
            <span><i className="fa fa-angle-double-up"></i></span>
        </a>
        </>
    )
}
export default Popup;