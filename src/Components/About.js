export default function About(){
    return(
        <div id="branches" className="branches">
                <img src={require("../resources/images/branch up design 2.png")} alt="Branch design" className="branch-design-up img-fluid"/>
                <div className="row mt-5">
                    <div className="col-sm-5"></div>
                    <div className="col-sm-4"><h3 className="grand-hotel text-wrap">Our Branches</h3></div>
                    <div className="col-sm-3"></div>
                </div>
                <div className="row">
                    <div className="location-cards mt-5 row">
                        <div className="branch-card col-sm-4">
                          <img src={require("../resources/images/new york.png")} className="img-fluid" alt="New York Branch" />
                          <p className="branch-name montserrat mt-3 text-wrap">New York</p>
                          <p className="branch-info montserrat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nesciunt dolores pariatur praesentium! Quas, fugit porro
                            praesentium, itaque vitae perferendis ex eveniet dolor
                            blanditiis odio adipisci ut, nisi quo incidunt dicta.
                          </p>
                        </div>
                        <div className="branch-card col-sm-4">
                          <img src={require("../resources/images/jakarta.png")} className="img-fluid" alt="Jakarta Branch" />
                          <p className="branch-name montserrat mt-3 text-wrap">Jakarta</p>
                          <p className="branch-info montserrat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nesciunt dolores pariatur praesentium! Quas, fugit porro
                            praesentium, itaque vitae perferendis ex eveniet dolor
                            blanditiis odio adipisci ut, nisi quo incidunt dicta.
                          </p>
                        </div>
                        <div className="branch-card col-sm-4">
                          <img src={require("../resources/images/paris.png")} className="img-fluid" alt="Paris Branch" />
                          <p className="branch-name montserrat mt-3 text-wrap">Paris</p>
                          <p className="branch-info montserrat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nesciunt dolores pariatur praesentium! Quas, fugit porro
                            praesentium, itaque vitae perferendis ex eveniet dolor
                            blanditiis odio adipisci ut, nisi quo incidunt dicta.
                          </p>
                        </div>
                </div>
                
                </div>
                <div className="curl1" style={{marginLeft:"-6%"}}>
                    <img style={{zIndex:"3"}} src={require("../resources/images/intro Design.png")} alt=""  className="intro-design img-fluid" />
                </div>
                <div className="bg-icons">
                  <img src={require("../resources/images/cup.png")} alt="cup" className="img-fluid" id="branch-cup" />
                  <img src={require("../resources/images/bean.png")} alt="bean" className="img-fluid" id="branch-bean1" />
                  <img src={require("../resources/images/bean.png")} alt="bean" className="img-fluid" id="branch-bean2" />
                  <img src={require("../resources/images/jar.png")} alt="jar" className="img-fluid" id="branch-jar" />
                </div>
            </div>
    )
}