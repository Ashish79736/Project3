export default function Contact(){
    return(
        <footer>
                <div id="footer" className="footer">
                  <div className="foot row">
                    <img src={require("../resources/images/logo.png")} alt="" className="logo col-sm-2" />
                    <div className="col-sm-3"></div>
                    <div className="info col-sm-6">
                      <div className="information info-card col-sm-6">
                        <p className="montserrat">Information.</p>
                        <ul>
                          <li className="montserrat"><a href="#">About us</a></li>
                          <li className="montserrat"><a href="#">Branches</a></li>
                          <li className="montserrat"><a href="#">Menu</a></li>
                          <li className="montserrat"><a href="#">Contact</a></li>
                          <li className="montserrat"><a href="#">Map</a></li>
                        </ul>
                      </div>
                      <div className="contact info-card col-sm-6">
                        <p className="montserrat">Contact Us.</p>
                        <ul>
                          <li className="montserrat"><a href="#">Support</a></li>
                          <li className="montserrat"><a href="#">your_id@gmail.com</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>
                  <div className="foot-nav row mt-4">
                    <nav className="navbar col-sm-6">
                      <ul className="menu">
                        <li className="item montserrat"><a href="#">Home</a></li>
                        <li className="item montserrat"><a href="#reviews">About</a></li>
                        <li className="item montserrat"><a href="#black-c">Menu</a></li>
                        <li className="item montserrat"><a href="#">Blog</a></li>
                        <li className="item montserrat"><a href="#branches">Shop</a></li>
                        <li className="item montserrat"><a href="#footer">Contact</a></li>
                      </ul>
                    </nav>
                    <div className="col-sm-2"></div>
                    <div className="social col-sm-4">
                      <i className="ri-facebook-fill"></i>
                      <i className="ri-instagram-line"></i>
                      <i className="ri-twitter-fill"></i>
                      <i className="ri-youtube-fill"></i>
                    </div>
                  </div>
                </div>
            </footer>
    )
}