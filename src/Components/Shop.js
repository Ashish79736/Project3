export default function Shop(){
    return (
        <div className="timings">
                <div className="row mt-5">
                    <div><h3 className="grand-hotel text-wrap">We are Open</h3></div>
                </div>
                <div className="row mt-5">
                    <div className="weekday mt-5">
                        <p className="montserrat day">Monday - Friday</p>
                        <p className="montserrat time">9:00 am - 10:00 pm</p>
                      </div>
                </div>
                <div className="row mt-5">
                    <div className="weekend">
                        <p className="montserrat day">Saturday - Sunday</p>
                        <p className="montserrat time">10:00 am - 10:10 pm</p>
                      </div>
                </div>
                <div className="bg-icons">
                  <img src={require("../resources/images/cup.png")} alt="cup" className="img-fluid" id="timing-cup" />
                  <img src={require("../resources/images/bean.png")} alt="bean" className="img-fluid" id="timing-bean1" />
                  <img src={require("../resources/images/bean.png")} alt="bean" className="img-fluid" id="timing-bean2" />
                  <img src={require("../resources/images/jar.png")} alt="jar" className="img-fluid" id="timing-jar" />
                </div>
            </div>
    )
}