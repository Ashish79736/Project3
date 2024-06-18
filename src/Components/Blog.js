export default function Blog(){
    return(
        <div id="reviews" className="reviews mt-5">
                <div className="row mt-5">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-5"><h3 className="grand-hotel text-wrap">Customer Reviews</h3></div>
                    <div className="col-sm-3"></div>
                </div>
                <div className="cards">
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-4">
                            <div className="review-card">
                                <img src={require("../resources/images/customer 2.png")} className="img-fluid" alt="Customer" />
                                <h6 className="grand-hotel">John Peter</h6>
                                <p className="montserrat">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  Excepturi ullam quam possimus facilis. Error, harum illo.
                                  Officiis repellat nostrum eum! Ipsum repellat non velit, quas
                                  consectetur blanditiis fugit ab voluptatibus!
                                </p>
                              </div>
                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4">
                            <div className="review-card">
                                <img src={require("../resources/images/customer 1.png")} className="img-fluid" alt="Customer" />
                                <h6 className="grand-hotel">Ella Thomson</h6>
                                <p className="montserrat">
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                  Excepturi ullam quam possimus facilis. Error, harum illo.
                                  Officiis repellat nostrum eum! Ipsum repellat non velit, quas
                                  consectetur blanditiis fugit ab voluptatibus!
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>
                    </div>
                </div>
                <div className="bg-icons">
                  <img src={require("../resources/images/cup.png")} alt="cup" className="img-fluid" id="review-cup" />
                  <img src={require("../resources/images/bean.png")} alt="bean" className="img-fluid" id="review-bean1" />
                  <img src={require("../resources/images/jar.png")} alt="jar" className="img-fluid" id="review-jar" />
                </div>
                <div className="curl1" style={{marginTop:"-10%",marginLeft:"-7.1%"}}>
                    <img style={{zIndex:"3"}} src={require("../resources/images/intro Design.png")} alt=""  className="intro-design img-fluid" />
                </div>
            </div>
    )
}