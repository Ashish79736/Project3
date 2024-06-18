export default function BCoffee(){
    return(
        <>
            <div id="black-c" className="black-coffee">
                <div className="row">
                    <div className="black-head mt-5 col-sm-5">
                        <h3 className="grand-hotel">Black<br />Coffees</h3>
                        <button className="button montserrat black-c">
                            Order Now <span></span><span></span><span></span><span></span>
                        </button>
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="black-content content col-sm-6">
                        <img
                            src={require("../resources/images/black coffee.png")}
                            alt="Black Coffee"
                            className="shd img-fluid"
                        />
                        <p className="montserrat">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                            beatae cupiditate odit commodi nihil tempore illo quia ducimus
                            corporis necessitatibus, iusto voluptatibus voluptates ipsa
                            maiores officiis recusandae fugiat at vero!
                        </p>
                        </div>
                </div>
                
                <div className="bg-icons">
                    <img src={require("../resources/images/cup.png")} className="img-fluid" alt="cup" id="black-cup" />
                    <img src={require("../resources/images/jar.png")} className="img-fluid" alt="jar" id="black-jar" />
                    <img src={require("../resources/images/bean.png")} className="img-fluid" alt="bean" id="black-bean1" />
                    <img src={require("../resources/images/bean.png")} className="img-fluid" alt="bean" id="black-bean2" />
                    <img src={require("../resources/images/bean.png")} className="img-fluid" alt="bean" id="black-bean3" />
                    <img src={require("../resources/images/bean.png")} className="img-fluid" alt="bean" id="black-bean4" />
                </div>
            </div>
            <img src={require("../resources/images/hot coffee design 2.png")} alt="" class="hot-coffee-design img-fluid"/>
        </>
    )
}