export default function HCoffee(){
    return(
        <div className="hot-coffee">
                <div className="row p-5" >
                    <div className="hotC-content content col-sm-5">
                    <img
                        src={require("../resources/images/hot coffee.png")}
                        alt="Hot Coffee"
                        className="shd img-fluid"
                    />
                    <p className="montserrat">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                        beatae cupiditate odit commodi nihil tempore illo quia ducimus
                        corporis necessitatibus, iusto voluptatibus voluptates ipsa
                        maiores officiis recusandae fugiat at vero!
                    </p>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="hot-head col-sm-6">
                    <h3 className="grand-hotel">Hot<br />Coffees</h3>
                    <button className="button montserrat">
                        Order Now <span></span><span></span><span></span><span></span>
                    </button>
                    </div>
                    <div className="bg-icons">
                    <img src={require("../resources/images/cup.png")} alt="cup" className="img-fluid" id="hot-cup" />
                    <img src={require("../resources/images/jar.png")} alt="jar" className="img-fluid" id="hot-jar" />
                    <img src={require("../resources/images/bean.png")} alt="bean" className="img-fluid" id="hot-bean1" />
                    <img src={require("../resources/images/bean.png")} alt="bean" className="img-fluid" id="hot-bean2" />
                    </div>
                </div>
            </div>
    )
}