import Voucher from "./Voucher";
import BCoffee from "./blackCoffee";
import HCoffee from "./hotCoffee";
import WCoffee from "./whiteCoffee";

export default function Menu(){
    return(
        <>
            <BCoffee/>
            <HCoffee/>
            <WCoffee/>
            <Voucher/>
        </>
    )
}