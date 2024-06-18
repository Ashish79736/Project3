export default function WCoffee(){
    return(
        <div className="white-coffee">
                <div className="row mt-2">
                    <div className="white-head col-sm-6 mt-5">
                        <h3 className="grand-hotel">White<br />Coffees</h3>
                        <button className="button montserrat">
                            Order Now <span></span><span></span><span></span><span></span>
                        </button>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="white-content content col-sm-5">
                        <img
                            src={require("../resources/images/white coffee.png")}
                            alt="White Coffee"
                            className="shd img-fluid"
                        />
                        <p className="montserrat">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                            beatae cupiditate odit commodi nihil tempore illo quia ducimus
                            corporis necessitatibus, iusto voluptatibus voluptates ipsa
                            maiores officiis recusandae fugiat at vero!
                        </p>
                        </div>
                        <div className="bg-icons">
                        <img src={require("../resources/images/cup.png")} alt="cup" className="img-fluid" id="white-cup" />
                        <img src={require("../resources/images/bean.png")} alt="bean" className="img-fluid" id="white-bean1" />
                        <img src={require("../resources/images/bean.png")} alt="bean" className="img-fluid" id="white-bean2" />
                        <img src={require("../resources/images/jar.png")} alt="jar" className="img-fluid" id="white-jar" />
                        </div>
                </div>
            </div>
    )
}