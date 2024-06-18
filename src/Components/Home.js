import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Menu from "./Menu";
import Shop from "./Shop";

export default function Home(){
    return(
        <>
            <Menu/>
            <Blog/>
            <Shop/>
            <About/>
            <Contact/>
        </>
    )
}