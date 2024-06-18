export default function Voucher(){
    return(
        <div className="voucher mt-5">
                <div className="row">
                    <div className="col-sm-5"></div>
                    <div className="col-sm-4"><h3 className="grand-hotel">Voucher</h3></div>
                    <div className="col-sm-3"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-8"> <img src={require("../resources/images/voucher.png")} className="img-fluid voucher-img" alt="Voucher" /></div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-sm-5"></div>
                    <div className="col-sm-4"><button className="button montserrat">
                        Get Voucher Now <span></span><span></span><span></span><span></span>
                        </button>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <div className="bg-icons">
                    <img src={require("../resources/images/cup.png")} alt="cup" className="img-fluid" id="voucher-cup" />
                    <img src={require("../resources/images/bean.png")} alt="bean" className="img-fluid" id="voucher-bean1" />
                    <img src={require("../resources/images/jar.png")} alt="jar" className="img-fluid" id="voucher-jar" />
                </div>
            </div>
    )
}